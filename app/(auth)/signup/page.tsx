'use client';

import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';
import clsx from 'clsx';

import formStyles from '@/app/styles/form.module.scss';
import styles from './styles.module.scss';

import register, { InitialState } from './actions/register.action';

const initialState: InitialState = {};

const SignUpPage = () => {
  const [state, action] = useFormState(register, initialState);

  if (state?.message) {
    alert(state.message);
  }

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} action={action}>
        <div className={styles.headingContainer}>
          <h1 className={styles.heading}>Sign up</h1>
        </div>

        <div
          className={clsx(
            formStyles.inputContainer,
            state?.errors?.last_name && formStyles.inputError
          )}
        >
          <label htmlFor="last_name">
            Last name<span>*</span>
          </label>

          <input
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Enter your last name"
            required
          />

          {state?.errors?.last_name && (
            <p className={formStyles.footerText}>{state.errors.last_name[0]}</p>
          )}
        </div>

        <div
          className={clsx(
            formStyles.inputContainer,
            state?.errors?.last_name && formStyles.inputError
          )}
        >
          <label htmlFor="first_name">
            First name<span>*</span>
          </label>

          <input
            type="text"
            name="first_name"
            id="first_name"
            placeholder="Enter your first name"
            required
          />

          {state?.errors?.first_name && (
            <p className={formStyles.footerText}>
              {state.errors.first_name[0]}
            </p>
          )}
        </div>

        <div
          className={clsx(
            formStyles.inputContainer,
            state?.errors?.last_name && formStyles.inputError
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
            required
          />

          {state?.errors?.email && (
            <p className={formStyles.footerText}>{state.errors.email[0]}</p>
          )}
        </div>

        <div
          className={clsx(
            formStyles.inputContainer,
            state?.errors?.last_name && formStyles.inputError
          )}
        >
          <label htmlFor="phone">
            Phone<span>*</span>
          </label>

          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            required
          />

          {state?.errors?.phone && (
            <p className={formStyles.footerText}>{state.errors.phone[0]}</p>
          )}
        </div>

        <div
          className={clsx(
            formStyles.inputContainer,
            state?.errors?.last_name && formStyles.inputError
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
            required
            minLength={8}
          />

          <p className={formStyles.footerText}>
            {state?.errors?.password?.[0] || 'Must be 8 or more characters'}
          </p>
        </div>

        <div
          className={clsx(
            formStyles.inputContainer,
            state?.errors?.last_name && formStyles.inputError
          )}
        >
          <label htmlFor="password_confirmation">
            Confirm password<span>*</span>
          </label>

          <input
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            placeholder="Reenter your password"
            required
            minLength={8}
          />

          {state?.errors?.password_confirmation && (
            <p className={formStyles.footerText}>
              {state.errors.password_confirmation[0]}
            </p>
          )}
        </div>

        <FormButton />

        <div className={styles.alternateActionContainer}>
          <p>Already have an account?</p>
          <Link href="#">Log in</Link>
        </div>
      </form>
    </div>
  );
};

const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className={styles.btn} disabled={pending}>
      {pending ? 'Creating...' : 'Create account'}
    </button>
  );
};

export default SignUpPage;
