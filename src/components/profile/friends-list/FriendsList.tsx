"use client";
import styles from "./FriendsList.module.scss";

interface Friend {
  id: number;
  name: string;
  avatar: string;
}

const mockFriends: Friend[] = [
  { id: 1, name: "Alice", avatar: "/avatar-2.jpg" },
  { id: 2, name: "Bob", avatar: "/avatar-2.jpg" },
  { id: 3, name: "Charlie", avatar: "/avatar-2.jpg" },
  { id: 4, name: "Diana", avatar: "https://i.pravatar.cc/100?img=4" },
  { id: 5, name: "Eve", avatar: "https://i.pravatar.cc/100?img=5" },
  { id: 6, name: "Frank", avatar: "https://i.pravatar.cc/100?img=6" },
];

export default function FriendList() {
  return (
    <section className={styles.friendList}>
      <h2 className={styles.title}>Friends</h2>
      <div className={styles.grid}>
        {mockFriends.map((friend) => (
          <div key={friend.id} className={styles.friendCard}>
            <img src={friend.avatar} alt={friend.name} className={styles.avatar} />
            <p className={styles.name}>{friend.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
