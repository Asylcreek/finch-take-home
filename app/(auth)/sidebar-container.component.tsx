import Image from 'next/image';
import { ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './sidebar-container.module.scss';

import bg from '@/public/images/bg-1.png';

interface ISidebarContainerProps {
  children: ReactNode;
  containerClass?: string;
}

const SidebarContainer = ({
  children,
  containerClass,
}: ISidebarContainerProps) => {
  return (
    <div className={clsx(styles.container, containerClass)}>
      <Image src={bg} alt="" />

      {children}
    </div>
  );
};

export default SidebarContainer;
