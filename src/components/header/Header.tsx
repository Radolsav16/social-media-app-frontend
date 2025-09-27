"use client";

import Link from "next/link";
import { Heart, MessageCircle, Plus, Search, User } from "lucide-react";
import s from "./Header.module.scss";
export default function Header() {
  const isAuth = false; // Mock !!
  return (
    <header className={s["header"]}>
      <nav className={s["header-nav"]}>
        <div className={s["header-nav-left-section"]}>
          <Link href={"/"} className={s["header-nav-left-section-link"]}>
            Social
          </Link>
        </div>

        <div className={s["header-nav-middle-section"]}>
          <Search />
          <input
            type="text"
            placeholder="Search..."
            className={s["header-nav-middle-section-input"]}
            name="search"
          />
        </div>

        <div className={s["header-nav-right-section"]}>
          {isAuth ? (
            <>
              <button className={s["header-nav-right-section-button"]}>
                <Heart className={s["heart-icon"]} />
              </button>
              <button className={s["header-nav-right-section-button"]}>
                <MessageCircle className={s["message-icon"]} />
              </button>
              <button className={s["header-nav-right-section-button"]}>
                <Plus className={s["plus-icon"]} />
              </button>
              <button className={s["header-nav-right-section-button"]}>
                <User className={s["profile-icon"]} />
              </button>
            </>
          ) : (
            <>
              <Link
                className={s["header-nav-right-section-button-auth-in"]}
                href={"/sign-in"}
              >
                Sign In
              </Link>
              <Link
                className={s["header-nav-right-section-button-auth-up"]}
                href={"/sign-up"}
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
