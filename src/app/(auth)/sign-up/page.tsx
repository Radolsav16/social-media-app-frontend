"use client";

import Link from "next/link";
import styles from "./SignUp.module.scss";

export default function SignUp() {
  return (
    <main className={styles.signupPage}>
      <div className={styles.card}>
        <h1 className={styles.title}>Create Account</h1>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Create a password" />
          </div>

          <button type="submit" className={styles.btnPrimary}>
            Sign Up
          </button>
        </form>

        <p className={styles.switch}>
          Already have an account?{" "}
          <Link href="/signin" className={styles.link}>
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
}

