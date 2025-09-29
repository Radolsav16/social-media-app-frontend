"use client";

import styles from "./SuggestedCommunities.module.scss";

const communities = [
  {
    id: 1,
    name: "Web Developers",
    description: "Talk about React, Next.js, and modern web dev.",
    image: "/assets/community-dev.png",
  },
  {
    id: 2,
    name: "Photography",
    description: "Share and learn photography tips.",
    image: "/assets/community-photo.png",
  },
  {
    id: 3,
    name: "Fitness & Health",
    description: "Stay motivated and healthy together.",
    image: "/assets/community-fitness.png",
  },
];

export default function SuggestedCommunities() {
  return (
    <section className={styles.suggestedCommunities}>
      <h2>Suggested Communities</h2>
      <div className={styles.list}>
        {communities.map((community) => (
          <div key={community.id} className={styles.card}>
            <img src={community.image} alt={community.name} />
            <div className={styles.info}>
              <h3>{community.name}</h3>
              <p>{community.description}</p>
            </div>
            <button className={styles.joinBtn}>Join</button>
          </div>
        ))}
      </div>
    </section>
  );
}
