"use client";
import PostFeed from "./post-feed/PostFeed";
import Features from "./feature/Features";
import CallToActionBanner from "./call-to-action/CallToAction";
import Testimonials from "./testimonials/Testimonials";
import Sidebar from "../sidebar/Sidebar";
import HeroSection from "./HeroSection";
import React from "react";
import { HomeTypes } from "@/features/home/types/home.types";

interface HeroProps {
  title: string;
  subTitle: string;
  buttonsTexts: ["Get Started", "Log in"];
  features: HomeTypes.Feature[];
  suggestedUsers: any;
  testimonials: HomeTypes.Testimonial[];
  trendingTopics: string[];
  callToAction: HomeTypes.CallToAction;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subTitle,
  buttonsTexts,
  features,
  suggestedUsers,
  testimonials,
  trendingTopics,
  callToAction,
}) => {
  return (
    <>
      <HeroSection
        title={title}
        subTitle={subTitle}
        buttonsTexts={buttonsTexts}
        trendingTopics={trendingTopics}
        suggestedUsers={suggestedUsers}
      />
      {/* <PostFeed /> */}
      <Features features={features}/>
      <CallToActionBanner {...callToAction}/>
      <Testimonials testimonials={testimonials} />
    </>
  );
};


export default Hero;