import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import authLayoutStyles from '../(auth)/layout.module.scss';
import styles from './styles.module.scss';
import signUpStyles from '../(auth)/signup/styles.module.scss';
import formStyles from '@/app/styles/form.module.scss';

import SidebarContainer from '../(auth)/sidebar-container.component';

import logo from '@/public/images/logo.png';

const LoginPage = () => {
  return (
    <main className={authLayoutStyles.main}>
      <SidebarContainer
        containerClass={clsx(authLayoutStyles.sidebar, styles.sidebar)}
      >
        <div className={styles.logoContainer}>
          <Image src={logo} alt="Quickly" />
        </div>
      </SidebarContainer>

      <div className={authLayoutStyles.formWrapper}>
        <form className={signUpStyles.form}>
          <div className={signUpStyles.headingContainer}>
            <h1 className={signUpStyles.heading}>Welcome back</h1>

            <p>Welcome back! Please enter your details</p>
          </div>

          <div className={formStyles.inputContainer}>
            <label htmlFor="email">
              Email<span>*</span>
            </label>

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div className={formStyles.inputContainer}>
            <label htmlFor="password">
              Password<span>*</span>
            </label>

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>

          <div className={styles.forgotPasswordContainer}>
            <div
              className={clsx(
                formStyles.inputContainer,
                formStyles.checkboxInputFirst
              )}
            >
              <input type="checkbox" name="remember" id="remember" />

              <label htmlFor="remember">Remember for 30 days</label>
            </div>

            <Link href={'#'}>Forgot password</Link>
          </div>

          <button className={signUpStyles.btn}>Log in</button>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
