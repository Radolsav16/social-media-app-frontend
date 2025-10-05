"use client";

import Link from "next/link";
import styles from "./SignUp.module.scss";
import z from "zod";
import { useAppDispatch } from "@/store/hooks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";


export default function SignUp() {
  const signUpSchema = z.object({
    name:z.string().min(1,'Please enter name!'),
    email:z.string().email('Please enter valid email!'),
    password:z.string().min(8,"Password should be at least 8 characters!")
  })

  type SignUpFormData = z.infer<typeof signUpSchema>
  const dispatch = useAppDispatch();
  const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm<SignUpFormData>({
    resolver:zodResolver(signUpSchema)
  })

  const onSubmit = (data) => {
    // await dispatch(signUpUser(data))
    console.log(data)
  }
  return (
    <main className={styles.signupPage}>
      <div className={styles.card}>
        <h1 className={styles.title}>Create Account</h1>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <input {...register("name")} type="text" id="name" placeholder="Enter your name" />
              {errors.name && <p className={styles.error}>{errors.name.message}</p>}
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input 
              {...register("email")}
            type="email" id="email" placeholder="Enter your email" />
              {errors.email && <p className={styles.error}>{errors.email.message}</p>}
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input {...register("password")} type="password" id="password" placeholder="Create a password"  />
              {errors.password && <p className={styles.error}>{errors.password.message}</p>}
          </div>

          <button type="submit" className={styles.btnPrimary} disabled={isSubmitting}>
            Sign Up
          </button>
        </form>

        <p className={styles.switch}>
          Already have an account?{" "}
          <Link href="/sign-in" className={styles.link}>
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
}

