'use server';

import { cookies } from 'next/headers';
import { SignJWT, jwtVerify } from 'jose';

import type { User } from '@/types/user.type';

const secretKey = 'finchglow-travel-booking';
const key = new TextEncoder().encode(secretKey);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('10 mins')
    .sign(key);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  });
  return payload;
}

type Session = { user: User; expiresAt: Date };

export async function getSession(): Promise<Session | null> {
  const session = cookies().get('session')?.value;

  if (!session) return null;

  const data: Session = await decrypt(session);

  if (new Date() > data.expiresAt) return null;

  return await decrypt(session);
}
