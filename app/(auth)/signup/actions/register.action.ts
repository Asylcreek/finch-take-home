'use server';

import { z } from 'zod';
import isMobilePhone from 'validator/lib/isMobilePhone';
import { redirect } from 'next/navigation';

import { API_BASE_URL } from '@/app/helpers/constants';
import routes from '@/app/helpers/routes';

export type InitialState = {
  errors?: {
    first_name?: string[];
    last_name?: string[];
    email?: string[];
    password?: string[];
    password_confirmation?: string[];
    phone?: string[];
  };
  message?: string;
};

const registerSchema = z
  .object({
    first_name: z
      .string({ required_error: 'Please enter your first name' })
      .min(1, { message: 'Please enter your first name' }),
    last_name: z
      .string({ required_error: 'Please enter your last name' })
      .min(1, { message: 'Please enter your last name' }),
    email: z
      .string({ required_error: 'Please enter your email' })
      .email({ message: 'Email is invalid' }),
    password: z
      .string({ required_error: 'Please enter your password' })
      .min(8, { message: 'Password must be 8 or more characters' }),
    password_confirmation: z
      .string({ required_error: 'Please reenter your password' })
      .min(8, {
        message: 'Password must be 8 or more characters',
      }),
    phone: z
      .string({ required_error: 'Please enter your phone number' })
      .min(1, { message: 'Please enter your phone number' }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'Passwords do not match',
    path: ['password_confirmation'],
  })
  .refine((data) => isMobilePhone(data.phone), {
    message: 'Phone number is invalid',
    path: ['phone'],
  });

const register = async (_: InitialState, formData: FormData) => {
  const fields = Object.fromEntries(formData.entries());

  const result = registerSchema.safeParse(fields);

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  const res = await fetch(API_BASE_URL + '/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(result.data),
  });

  if (res.ok) {
    redirect(routes.login());
  } else {
    return { message: res.statusText };
  }
};

export default register;
