import Link from 'next/link';

import formStyles from '@/app/styles/form.module.scss';
import styles from './styles.module.scss';

const SignUpPage = () => {
  return (
    <form className={styles.form}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>Sign up</h1>
      </div>

      <div className={formStyles.formInputContainer}>
        <label htmlFor="name">
          Name<span>*</span>
        </label>

        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
        />
      </div>

      <div className={formStyles.formInputContainer}>
        <label htmlFor="email">
          Email<span>*</span>
        </label>

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />

        <p className={formStyles.footerText}>
          This is a hint text to help user.
        </p>
      </div>

      <button className={styles.btn}>Create account</button>

      <div className={styles.alternateActionContainer}>
        <p>Already have an account?</p>
        <Link href="#">Log in</Link>
      </div>
    </form>
  );
};

export default SignUpPage;
