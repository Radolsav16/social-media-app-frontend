"use client";
import PostFeed from "./post-feed/PostFeed";
import Features from "./feature/Features";
import CallToActionBanner from "./call-to-action/CallToAction";
import Testimonials from "./testimonials/Testimonials";
import Sidebar from "../sidebar/Sidebar";
import HeroSection from "./HeroSection";
import React from "react";

interface HeroProps {
  title: string;
  subTitle: string;
  buttonsTexts: ["Get Started", "Log in"];
  features: any;
  suggestedUsers: any;
  testimonials: any;
  trendingTopics: any;
  callToAction: any;
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
      />
      {/* <PostFeed /> */}
      <Features features={features}/>
      <CallToActionBanner  callToAction={callToAction}/>
      <Testimonials testimonials={testimonials} />
    </>
  );
};
