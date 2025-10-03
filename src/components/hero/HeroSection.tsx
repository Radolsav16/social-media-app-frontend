import Link from "next/link";
import s from "./Hero.module.scss";
import Trending from "./trending/Trending";
import React from "react";


interface HeroSectionProps {
    title:string,
    subTitle:string,
    buttonsTexts:["Get Started","Log in"];
}

const HeroSection:React.FC<HeroSectionProps> = ({title,subTitle,buttonsTexts}) => {

      const btnMap = {
        "Get Started": (
          <Link href="/signup" className={s.btnPrimary}>
            Get Started
          </Link>
        ),
        "Log in": (
          <Link href="/login" className={s.btnSecondary}>
            Log In
          </Link>
        ),
      };

    return(
    <main className={s.home}>
            <section className={s.hero}>
              <div className={s["hero-content"]}>
                <h1>{title}</h1>
                <p>{subTitle}</p>
                <div className={s["hero-buttons"]}>
                  {buttonsTexts.map((text) => btnMap[text])}
                </div>
              </div>
              <Trending />
            </section>
          </main>)
}


export default HeroSection;