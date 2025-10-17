import Link from "next/link";
import s from "./Hero.module.scss";
import Trending from "./trending/Trending";
import React from "react";
import { HomeTypes } from "@/features/home-ui/types/homeUi.types";
import { useAppSelector } from "@/store/hooks";
import { authSelectors } from "@/features/auth/slice/authSlice";

interface HeroSectionProps {
  title: string;
  subTitle: string;
  buttonsTexts: ["Get Started", "Log in"];
  trendingTopics: string[];
  suggestedUsers: HomeTypes.SuggestedUser[];
}

const btnMap = {
  "Get Started": (
    <Link href="/sign-up" className={s.btnPrimary} key={"sign-up"}>
      Get Started
    </Link>
  ),
  "Log in": (
    <Link href="/sign-in" className={s.btnSecondary} key={"sign-in"}>
      Sign In
    </Link>
  ),
};

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subTitle,
  buttonsTexts,
  trendingTopics,
  suggestedUsers,
}) => {
  const user = useAppSelector(authSelectors.user);
  return (
    <main className={s.home}>
      <section className={s.hero}>
        <div className={s["hero-content"]}>
          {user ? (
            <h1>Welcome, {user.name || user.email} 👋</h1>
          ) : (
            <>
              <h1>{title}</h1>
              <p>{subTitle}</p>
            </>
          )}
          {!user && (
            <div className={s["hero-buttons"]}>
              {buttonsTexts.map((text) => btnMap[text])}
            </div>
          )}
        </div>
        <Trending
          trendingTopics={trendingTopics}
          suggestedUsers={suggestedUsers}
          user={!!user}
        />
      </section>
    </main>
  );
};

export default HeroSection;
