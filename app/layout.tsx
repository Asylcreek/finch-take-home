import type { Metadata } from 'next';

import type { ReactNode } from 'react';

import './styles/vars.css';
import './styles/base.css';

import { metropolis } from './helpers/fonts';

export const metadata: Metadata = {
  title: 'Quickly',
  description: 'Start turning your dream into a reality!!',
};

interface IRootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="en" className={metropolis.variable}>
      <body>{children}</body>
    </html>
  );
}
