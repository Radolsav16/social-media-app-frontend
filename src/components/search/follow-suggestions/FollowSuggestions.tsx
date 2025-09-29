"use client";

import styles from "./FollowSuggestions.module.scss";

export default function FollowSuggestions() {
  const users = [
    { id: 1, name: "Alice Johnson", username: "alicej", avatar: "/avatar-2.jpg" },
    { id: 2, name: "Bob Smith", username: "bobsmith", avatar: "/avatar-2.jpg" },
    { id: 3, name: "Charlie Brown", username: "charlieb", avatar: "/avatar-2.jpg" },
    { id: 4, name: "Emma Wilson", username: "emmaw", avatar: "/avatar-2.jpg" },
    { id: 5, name: "Lucas Miller", username: "lucasm", avatar: "/avatar-2.jpg" },
  ];

  return (
    <section className={styles.suggestions}>
      <h2>People You May Know</h2>
      <div className={styles.slider}>
        {users.map((user) => (
          <div key={user.id} className={styles.userCard}>
            <img src={user.avatar} alt={user.name} className={styles.avatar} />
            <div className={styles.info}>
              <span className={styles.name}>{user.name}</span>
              <span className={styles.username}>@{user.username}</span>
            </div>
            <button className={styles.followBtn}>Follow</button>
          </div>
        ))}
      </div>
    </section>
  );
}
