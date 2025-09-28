"use client";

import styles from "./Features.module.scss";
import { Users, MessageCircle, Share2, Shield } from "lucide-react";

export default function Features() {
  const features = [
    {
      id: 1,
      icon: <Users />,
      title: "Connect with Friends",
      description: "Stay in touch and build meaningful connections.",
    },
    {
      id: 2,
      icon: <MessageCircle />,
      title: "Share Your Thoughts",
      description: "Post updates, photos, and ideas with your community.",
    },
    {
      id: 3,
      icon: <Share2 />,
      title: "Discover Content",
      description: "Explore trending topics, communities, and new people.",
    },
    {
      id: 4,
      icon: <Shield />,
      title: "Secure & Private",
      description: "Your data is safe with us, built with privacy in mind.",
    },
  ];

  return (
    <section className={styles.features}>
      <h2 className={styles.heading}>Why Join Our Community?</h2>
      <div className={styles.grid}>
        {features.map((feature) => (
          <div key={feature.id} className={styles.card}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.description}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
