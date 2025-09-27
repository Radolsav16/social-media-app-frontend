"use client";

import Link from "next/link";
import {
  Home,
  Search,
  Bell,
  MessageCircle,
  User,
  Settings,
  PlusCircle,
  BriefcaseBusiness,
} from "lucide-react";
import s from "./Sidebar.module.scss";
import Image from "next/image";

export default function Sidebar() {
  const isAuth = true;
  return (
    <aside className={s.sidebar}>
      <div className={s["sidebar-top"]}>
        <nav className={s["sidebar-nav"]}>
          <Link href="/" className={s["sidebar-nav-link"]}>
            <Home /> <span>Home</span>
          </Link>
          <Link href="/explore" className={s["sidebar-nav-link"]}>
            <Search /> <span>Explore</span>
          </Link>

          <Link href="/about" className={s["sidebar-nav-link"]}>
            <BriefcaseBusiness /> <span>About</span>
          </Link>

          <Link href="/notifications" className={s["sidebar-nav-link"]}>
            <Bell /> <span>Notifications</span>
          </Link>
          <Link href="/messages" className={s["sidebar-nav-link"]}>
            <MessageCircle /> <span>Messages</span>
          </Link>
          <Link href="/profile" className={s["sidebar-nav-link"]}>
            <User /> <span>Profile</span>
          </Link>
          <Link href="/settings" className={s["sidebar-nav-link"]}>
            <Settings /> <span>Settings</span>
          </Link>
        </nav>
        <button className={s["create-button"]}>
          <PlusCircle /> <span>Create Post</span>
        </button>
      </div>

      <div className={s["sidebar-bottom"]}>
        {isAuth && (
          <div className={s["user-profile"]}>
            <Image
              src="/avatar-2.jpg"
              alt="User avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className={s["user-name"]}>John Doe</p>
            <span className={s["user-handle"]}>@johndoe</span>
          </div>
        )}
      </div>
    </aside>
  );
}
