"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.scss";
import Trending from "./trending/Trending";
import PostFeed from "./post-feed/PostFeed";
import Features from "./feature/Features";
import CallToActionBanner from "./call-to-action/CallToAction";
import Testimonials from "./testimonials/Testimonials";
import Sidebar from "../sidebar/Sidebar";

export default function Hero() {
  return (
    <>
   
    <main className={styles.home}>

      <section className={styles.hero}>
        <div className={styles["hero-content"]}>
          <h1>Welcome to Social</h1>
          <p>Connect with friends, share moments, and explore communities.</p>
          <div className={styles["hero-buttons"]}>
            <Link href="/signup" className={styles.btnPrimary}>
              Get Started
            </Link>
            <Link href="/login" className={styles.btnSecondary}>
              Log In
            </Link>
          </div>
        </div>
           <Trending />
      </section>
     
      
      
       
    </main>
    <PostFeed />
    <Features />
    <CallToActionBanner />
    <Testimonials />
    </>
  );
}
