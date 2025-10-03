"use client";

import Link from "next/link";
import s from "./CallToAction.module.scss";
import React from "react";


interface CallToActionBannerProps{
  heading:string,
  text:string,
  buttons:['Sign in','Sign up']
}


const  CallToActionBanner:React.FC<CallToActionBannerProps>= ({heading,text,buttons}) =>  {
  const btnMap = {
    'Sign up':  <Link href="/signup" className={s.primaryBtn}>
            Sign Up
          </Link>,
    'Sign in':   <Link href="/signin" className={s.secondaryBtn}>
            Sign In
          </Link>  
  }
  return (
    <section className={s.cta}>
      <div className={s.content}>
        <h2 className={s.heading}>{heading}</h2>
        <p className={s.text}>
          {text}
        </p>
        <div className={s.buttons}>
          {buttons.map((button)=> btnMap[button])}
        </div>
      </div>
    </section>
  );
}

export default CallToActionBanner;
