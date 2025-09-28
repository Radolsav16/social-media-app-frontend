"use client";

import Link from "next/link";
import styles from "./CallToAction.module.scss";

export default function CallToActionBanner() {
  return (
    <section className={styles.cta}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Join our community today</h2>
        <p className={styles.text}>
          Share your thoughts, connect with people, and explore new opportunities.
        </p>
        <div className={styles.buttons}>
          <Link href="/signup" className={styles.primaryBtn}>
            Sign Up
          </Link>
          <Link href="/signin" className={styles.secondaryBtn}>
            Sign In
          </Link>
        </div>
      </div>
    </section>
  );
}
