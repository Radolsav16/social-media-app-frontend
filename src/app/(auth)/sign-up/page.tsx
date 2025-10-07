"use client";

import Link from "next/link";
import s from "./SignUp.module.scss";
import z from "zod";
import { useAppDispatch } from "@/store/hooks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpUser } from "@/features/auth/slice/authSlice";
import { useRouter } from "next/navigation";
export default function SignUp() {
  const router = useRouter();
  const signUpSchema = z.object({
    name:z.string().min(1,'Please enter name!'),
    email:z.string().email('Please enter valid email!'),
    password:z.string().min(8,"Password should be at least 8 characters!")
  })

  type SignUpFormData = z.infer<typeof signUpSchema>
  const dispatch = useAppDispatch();
  const {register,handleSubmit,formState:{errors,isSubmitting},setValue} = useForm<SignUpFormData>({
    resolver:zodResolver(signUpSchema),
    mode:"onSubmit",
    reValidateMode:'onChange',
    defaultValues:{name:'',email:'',password:''}
    
  })
  const onSubmit = async (data) => {
    try {
      const result = await dispatch(signUpUser(data))
      if(result.payload){
        router.push('/')
      }
    } catch (err) {
    }
  }
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

