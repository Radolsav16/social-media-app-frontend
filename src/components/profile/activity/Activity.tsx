"use client";
import styles from "./Activity.module.scss";

interface ActivityItem {
  id: number;
  type: "post" | "like" | "comment" | "follow";
  text: string;
  date: string;
}

const mockActivities: ActivityItem[] = [
  {
    id: 1,
    type: "post",
    text: "You created a new post: 'Excited to start my new project 🚀'",
    date: "2 hours ago",
  },
  {
    id: 2,
    type: "like",
    text: "You liked Alice’s post",
    date: "5 hours ago",
  },
  {
    id: 3,
    type: "comment",
    text: "You commented on Bob’s photo",
    date: "1 day ago",
  },
  {
    id: 4,
    type: "follow",
    text: "You followed Charlie",
    date: "2 days ago",
  },
];

export default function Activity() {
  return (
    <section className={styles.activity}>
      <h2 className={styles.title}>Recent Activity</h2>
      <ul className={styles.list}>
        {mockActivities.map((activity) => (
          <li key={activity.id} className={`${styles.item} ${styles[activity.type]}`}>
            <span className={styles.icon}>
              {activity.type === "post" && "📝"}
              {activity.type === "like" && "❤️"}
              {activity.type === "comment" && "💬"}
              {activity.type === "follow" && "👤"}
            </span>
            <div className={styles.content}>
              <p className={styles.text}>{activity.text}</p>
              <span className={styles.date}>{activity.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
