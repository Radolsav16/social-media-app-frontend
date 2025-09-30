"use client";
import styles from "./GroupsJoined.module.scss";

interface Group {
  id: number;
  name: string;
  members: number;
  image: string;
}

const mockGroups: Group[] = [
  {
    id: 1,
    name: "Web Developers",
    members: 15432,
    image: "/images/groups/webdev.jpg",
  },
  {
    id: 2,
    name: "AI Enthusiasts",
    members: 9812,
    image: "/images/groups/ai.jpg",
  },
  {
    id: 3,
    name: "Photography Lovers",
    members: 12450,
    image: "/images/groups/photography.jpg",
  },
];

export default function GroupsJoined() {
  return (
    <section className={styles.groups}>
      <h2 className={styles.title}>Groups You Joined</h2>
      <div className={styles.list}>
        {mockGroups.map((group) => (
          <div key={group.id} className={styles.card}>
            <img src={group.image} alt={group.name} className={styles.image} />
            <div className={styles.info}>
              <h3 className={styles.name}>{group.name}</h3>
              <p className={styles.members}>{group.members.toLocaleString()} members</p>
            </div>
            <button className={styles.button}>View</button>
          </div>
        ))}
      </div>
    </section>
  );
}
