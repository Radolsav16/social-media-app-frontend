"use client";

import Link from "next/link";
import s from "./SignUp.module.scss";
import useSignUp from "@/features/auth/hooks/useSignUp";
export default function SignUp() {
 const {register,handleSubmit,errors,isSubmitting,onSubmit} = useSignUp()
  return (
    <main className={s.signupPage}>
      <div className={s.card}>
        <h1 className={s.title}>Create Account</h1>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.inputGroup}>
            <label htmlFor="name">Name</label>
            <input {...register("name")} type="text" id="name" placeholder="Enter your name" />
              {errors.name && <p className={s.error}>{errors.name.message}</p>}
          </div>

          <div className={s.inputGroup}>
            <label htmlFor="email">Email</label>
            <input 
              {...register("email")}
            type="email" id="email" placeholder="Enter your email" />
              {errors.email && <p className={s.error}>{errors.email.message}</p>}
          </div>

          <div className={s.inputGroup}>
            <label htmlFor="password">Password</label>
            <input {...register("password")} type="password" id="password" placeholder="Create a password"  />
              {errors.password && <p className={s.error}>{errors.password.message}</p>}
          </div>

          <button type="submit" className={s.btnPrimary} disabled={isSubmitting}>
            Sign Up
          </button>
        </form>

        <p className={s.switch}>
          Already have an account?{" "}
          <Link href="/sign-in" className={s.link}>
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
}

