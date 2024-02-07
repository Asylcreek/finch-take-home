import { ReactNode } from 'react';
import Image from 'next/image';

import styles from './layout.module.scss';

import SidebarContainer from './sidebar-container.component';

import twinkles from '@/public/images/twinkles.png';
import avatar1 from '@/public/images/avatar-1.png';
import avatar2 from '@/public/images/avatar-2.png';
import avatar3 from '@/public/images/avatar-3.png';
import avatar4 from '@/public/images/avatar-4.png';
import avatar5 from '@/public/images/avatar-5.png';
import arrow from '@/public/images/arrow.png';

interface IAuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: IAuthLayoutProps) => {
  return (
    <main className={styles.main}>
      <SidebarContainer containerClass={styles.sidebar}>
        <div className={styles.sidebarContent}>
          <div className={styles.twinklesContainer}>
            <Image src={twinkles} alt="" />
          </div>

          <p className={styles.heading}>
            Start turning your dream into reality.
          </p>

          <p className={styles.subheading}>
            Create a free account and get full access to all features for
            30-days. No credit card needed. Get started in 2 minutes.
          </p>

          <div className={styles.partnersContainer}>
            <div className={styles.avatars}>
              <div className={styles.avatar} data-variant={1}>
                <Image src={avatar1} alt="" />
              </div>

              <div className={styles.avatar} data-variant={2}>
                <Image src={avatar2} alt="" />
              </div>

              <div className={styles.avatar} data-variant={3}>
                <Image src={avatar3} alt="" />
              </div>

              <div className={styles.avatar} data-variant={4}>
                <Image src={avatar4} alt="" />
              </div>

              <div className={styles.avatar} data-variant={5}>
                <Image src={avatar5} alt="" />
              </div>
            </div>

            <p>Join 100+ trade partners</p>
          </div>

          <div className={styles.arrow}>
            <Image src={arrow} alt="" />
          </div>
        </div>
      </SidebarContainer>

      <div className={styles.formWrapper}>{children}</div>
    </main>
  );
};

export default AuthLayout;
