"use client";

import styles from "./Testimonials.module.scss";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Emily Carter",
      username: "@emily",
      avatar: "https://i.pravatar.cc/60?img=5",
      quote:
        "This platform helped me reconnect with old friends and discover amazing new communities.",
    },
    {
      id: 2,
      name: "Daniel Kim",
      username: "@daniel",
      avatar: "https://i.pravatar.cc/60?img=8",
      quote:
        "I love how simple and modern the interface is. Sharing posts has never been easier!",
    },
    {
      id: 3,
      name: "Sophia Rodriguez",
      username: "@sophia",
      avatar: "https://i.pravatar.cc/60?img=12",
      quote:
        "Privacy is a big deal for me, and I feel secure using this app. Highly recommended!",
    },
  ];

  return (
    <section className={styles.testimonials}>
      <h2 className={styles.heading}>What Our Users Say</h2>
      <div className={styles.grid}>
        {testimonials.map((t) => (
          <div key={t.id} className={styles.card}>
            <div className={styles.user}>
              <img src={t.avatar} alt={t.name} className={styles.avatar} />
              <div className={styles.userInfo}>
                <span className={styles.name}>{t.name}</span>
                <span className={styles.username}>{t.username}</span>
              </div>
            </div>
            <p className={styles.quote}>"{t.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
