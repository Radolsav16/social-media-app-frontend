"use client";

import Link from "next/link";
import {Github,Mail} from 'lucide-react'
import styles from "./Footer.module.scss";
import { getFullYear } from "@/app/utils/utils";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-top"]}>
        <div className={styles.links}>
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/terms" className={styles.link}>Terms</Link>
          <Link href="/privacy" className={styles.link}>Privacy</Link>
          <Link href="/help" className={styles.link}>Help</Link>
        </div>
        <div className={styles["social-icons"]}>
          <a href="#"><Mail /></a>
          <a href="#"><Github /></a>
        </div>
      </div>

      <div className={styles["footer-bottom"]}>
        <p>© {getFullYear()} Social. All rights reserved.</p>
      </div>
    </footer>
  );
}
