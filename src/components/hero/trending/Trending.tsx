"use client";

import styles from "./Trending.module.scss";

export default function Trending() {
  const topics = [
    { id: 1, category: "Technology", title: "#NextJS", posts: "12.5K posts" },
    { id: 2, category: "Sports", title: "#ChampionsLeague", posts: "89.3K posts" },
    { id: 3, category: "Music", title: "#NewAlbum", posts: "45.1K posts" },
  ];

  const users = [
    { id: 1, name: "Jane Doe", username: "@jane", avatar: "https://i.pravatar.cc/40?img=1" },
    { id: 2, name: "Mark Smith", username: "@mark", avatar: "https://i.pravatar.cc/40?img=2" },
    { id: 3, name: "Alice Johnson", username: "@alice", avatar: "https://i.pravatar.cc/40?img=3" },
  ];

  return (
    <aside className={styles.sidebar}>
      {/* Trending Topics */}
      <div className={styles.card}>
        <h2 className={styles.title}>Trending Topics</h2>
        <ul className={styles.list}>
          {topics.map((topic) => (
            <li key={topic.id} className={styles.item}>
              <span className={styles.category}>{topic.category}</span>
              <span className={styles.topic}>{topic.title}</span>
              <span className={styles.posts}>{topic.posts}</span>
            </li>
          ))}
        </ul>
        <button className={styles.showMore}>Show more</button>
      </div>

      {/* Suggested Users */}
      <div className={styles.card}>
        <h2 className={styles.title}>Suggested Users</h2>
        <ul className={styles.usersList}>
          {users.map((user) => (
            <li key={user.id} className={styles.userItem}>
              <img src={user.avatar} alt={user.name} className={styles.avatar} />
              <div className={styles.userInfo}>
                <span className={styles.name}>{user.name}</span>
                <span className={styles.username}>{user.username}</span>
              </div>
              <button className={styles.followBtn}>Follow</button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
