"use client";

import Link from "next/link";
import s from "./CallToAction.module.scss";

export default function CallToActionBanner({callToAction}) {
  return (
    <section className={s.cta}>
      <div className={s.content}>
        <h2 className={s.heading}>Join our community today</h2>
        <p className={s.text}>
          Share your thoughts, connect with people, and explore new opportunities.
        </p>
        <div className={s.buttons}>
          <Link href="/signup" className={s.primaryBtn}>
            Sign Up
          </Link>
          <Link href="/signin" className={s.secondaryBtn}>
            Sign In
          </Link>
        </div>
      </div>
    </section>
  );
}
