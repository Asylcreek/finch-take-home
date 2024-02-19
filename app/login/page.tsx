'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';
import clsx from 'clsx';

import authLayoutStyles from '../(auth)/layout.module.scss';
import styles from './styles.module.scss';
import signUpStyles from '../(auth)/signup/styles.module.scss';
import formStyles from '@/app/styles/form.module.scss';

import SidebarContainer from '../(auth)/sidebar-container.component';

import login, { InitialState } from './actions/login.action';

import logo from '@/public/images/logo.png';

const initialState: InitialState = {};

const LoginPage = () => {
  const [formState, formAction] = useFormState(login, initialState);

  if (formState?.message) {
    alert(formState.message);
  }

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
        <form className={signUpStyles.formContainer} action={formAction}>
          <div className={signUpStyles.headingContainer}>
            <h1 className={signUpStyles.heading}>Welcome back</h1>

            <p>Welcome back! Please enter your details</p>
          </div>

          <div
            className={clsx(
              formStyles?.inputContainer,
              formState?.errors?.email && formStyles.inputError
            )}
          >
            <label htmlFor="email">
              Email<span>*</span>
            </label>

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />

            {formState?.errors?.email && (
              <p className={formStyles.footerText}>
                {formState.errors.email[0]}
              </p>
            )}
          </div>

          <div
            className={clsx(
              formStyles?.inputContainer,
              formState?.errors?.password && formStyles.inputError
            )}
          >
            <label htmlFor="password">
              Password<span>*</span>
            </label>

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />

            {formState?.errors?.password && (
              <p className={formStyles.footerText}>
                {formState.errors.password[0]}
              </p>
            )}
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

          <FormButton />
        </form>
      </div>
    </main>
  );
};

const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className={signUpStyles.btn} disabled={pending}>
      {pending ? 'Logging in...' : 'Log in'}
    </button>
  );
};

export default LoginPage;
