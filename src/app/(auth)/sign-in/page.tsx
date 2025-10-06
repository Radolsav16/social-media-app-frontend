"use client";

import Link from "next/link";
import s from "./SignIn.module.scss";
import z from "zod";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hooks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInUser } from "@/features/auth/slice/authSlice";

export default function SignIn() {
   const router = useRouter();
   const signInSchema = z.object({
    email:z.string().email('Please enter valid email!'),
    password:z.string().min(8,'Password should be at least 8 characters')
   })
   type SignInFormData = z.infer<typeof signInSchema>
   const dispatch = useAppDispatch();
   const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm<SignInFormData>({
    resolver:zodResolver(signInSchema)
   })
   const onSubmit = (data:SignInFormData) => {
    dispatch(signInUser(data));
    router.push('/')
   }
  return (
         <main className={s.signinPage}>
      <div className={s.card}>
        <h1 className={s.title}>Sign In</h1>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.inputGroup}>
            <label htmlFor="email">Email</label>
            <input {...register('email')} type="email" id="email" placeholder="Enter your email" />
            {errors.email && <p className={s.error}>{errors.email.message}</p>}
          </div>

          <div className={s.inputGroup}>
            <label htmlFor="password">Password</label>
            <input {...register('password')} type="password" id="password" placeholder="Enter your password" />
            {errors.password && <p className={s.error}>{errors.password.message}</p>}
          </div>
          <button type="submit" className={s.btnPrimary} disabled={isSubmitting}>
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