"use client";

import React from "react";
import s from "./Features.module.scss";
import { Users, MessageCircle, Share2, Shield } from "lucide-react";
import { HomeTypes } from "@/features/home/types/home.types";


interface FeaturesProps{
  features:HomeTypes.Feature[]
}


const Features:React.FC<FeaturesProps> = ({features}) => {
  const iconMap = {
    users:<Users />,
    message: <MessageCircle />,
    discover:<Share2 />,
    shield:<Shield />
  };
  return (
    <section className={s.features}>
      <h2 className={s.heading}>Why Join Our Community?</h2>
      <div className={s.grid}>
        {features.map((feature) => (
          <div key={feature.id} className={s.card}>
            <div className={s.icon}>{feature.icon}</div>
            <h3 className={s.title}>{feature.title}</h3>
            <p className={s.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
