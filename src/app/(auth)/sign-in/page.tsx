"use client";

import Link from "next/link";
import s from "./SignIn.module.scss";
import useSignIn from "@/features/auth/hooks/useSignIn";

export default function SignIn() {
  const { handleSubmit, register, errors, isSubmitting, onSubmit } =
    useSignIn();
  return (
    <main className={s.signinPage}>
      <div className={s.card}>
        <h1 className={s.title}>Sign In</h1>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              {...register("email")}
              type="email"
              id="email"
              placeholder="Enter your email"
            />
            {errors.email && <p className={s.error}>{errors.email.message}</p>}
          </div>

          <div className={s.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              {...register("password")}
              type="password"
              id="password"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className={s.error}>{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className={s.btnPrimary}
            disabled={isSubmitting}
          >
            Sign In
          </button>
        </form>

        <p className={s.switch}>
          Don’t have an account?{" "}
          <Link href="/sign-up" className={s.link}>
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}
