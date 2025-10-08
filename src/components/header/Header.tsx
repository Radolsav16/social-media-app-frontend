"use client";

import Link from "next/link";
import { Heart, MessageCircle, Plus, Search, User } from "lucide-react";
import s from "./Header.module.scss";
import NotificationDropdown from "../notifiactions/NotificationsDropdown";
import { useAppSelector } from "@/store/hooks";
import { authSelectors } from "@/features/auth/slice/authSlice";
export default function Header() {
   const isAuthenticated = useAppSelector(authSelectors.isAuthenticated)
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
          {isAuthenticated ? (
            <>
              <Link className={s["header-nav-right-section-button"]} href={'/likes'}>
                <Heart className={s["heart-icon"]} />
              </Link>
              <Link className={s["header-nav-right-section-button"]} href={'/messages'}>
                <MessageCircle className={s["message-icon"]} />
              </Link>
              <Link className={s["header-nav-right-section-button"]} href={'/'}>
                <Plus className={s["plus-icon"]} />
              </Link>
              <Link className={s["header-nav-right-section-button"]} href={'/profile'}>
                <User className={s["profile-icon"]} />
              </Link>
              <NotificationDropdown />
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
