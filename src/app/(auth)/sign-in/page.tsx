"use client";

import Link from "next/link";
import styles from "./SignIn.module.scss";

export default function SignIn() {
  return (
         <main className={styles.signinPage}>
      <div className={styles.card}>
        <h1 className={styles.title}>Sign In</h1>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>

          <button type="submit" className={styles.btnPrimary}>
            Sign In
          </button>
        </form>

        <p className={styles.switch}>
          Don’t have an account?{" "}
          <Link href="/signup" className={styles.link}>
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}