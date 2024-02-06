import type { Metadata } from 'next';

import type { ReactNode } from 'react';

import './base.css';

export const metadata: Metadata = {
  title: 'Homepage',
  description: 'The homepage of your app',
};

interface IRootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
