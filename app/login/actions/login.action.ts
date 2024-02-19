'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { typeToFlattenedError, z } from 'zod';

import { API_BASE_URL } from '@/helpers/constants';
import routes from '@/helpers/routes';

import { encrypt } from '@/lib/auth';

const loginSchema = z.object({
  email: z.string().email({ message: 'Email is invalid' }),
  password: z
    .string()
    .min(8, { message: 'Password must contain 8 or more characters' }),
});

type LoginSchema = z.infer<typeof loginSchema>;

export type InitialState = {
  errors?: typeToFlattenedError<LoginSchema, string>['fieldErrors'];
  message?: string;
};

const login = async (_: InitialState, formData: FormData) => {
  const fields = Object.fromEntries(formData.entries());

  const result = loginSchema.safeParse(fields);

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  let res: Response;

  try {
    res = await fetch(API_BASE_URL + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(result.data),
    });
  } catch (e: unknown) {
    console.log(e);
    return { message: (e as { message: string }).message };
  }

  if (res.ok) {
    const data = await res.json();

    const user = data?.data;

    // Date.now + 10 minutes in milliseconds
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    const session = await encrypt({ user, expiresAt });

    cookies().set('session', session, { expires: expiresAt, httpOnly: true });

    redirect(routes.home());
  } else {
    return { message: res.statusText };
  }
};

export default login;
