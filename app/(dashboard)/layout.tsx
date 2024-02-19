import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

import routes from '@/helpers/routes';

import { getSession } from '@/lib/auth';

interface IDashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = async ({ children }: IDashboardLayoutProps) => {
  const session = await getSession();

  if (!session) {
    redirect(routes.register());
  }

  return <>{children}</>;
};

export default DashboardLayout;
