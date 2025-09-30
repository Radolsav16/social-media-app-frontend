"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./NotificationsDropdown.module.scss";

interface Notification {
  id: number;
  type: "like" | "comment" | "follow";
  message: string;
  time: string;
}

const mockNotifications: Notification[] = [
  { id: 1, type: "like", message: "Anna liked your post", time: "2m ago" },
  { id: 2, type: "comment", message: "John commented on your photo", time: "10m ago" },
  { id: 3, type: "follow", message: "Mia started following you", time: "1h ago" },
];

export default function NotificationDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.wrapper} ref={dropdownRef}>
      <button className={styles.iconButton} onClick={() => setOpen(!open)}>
        🔔
      </button>

      {open && (
        <div className={styles.dropdown}>
          <h4 className={styles.title}>Notifications</h4>
          <ul className={styles.list}>
            {mockNotifications.map((n) => (
              <li key={n.id} className={styles.item}>
                <span className={`${styles.badge} ${styles[n.type]}`}></span>
                <div className={styles.content}>
                  <p className={styles.message}>{n.message}</p>
                  <span className={styles.time}>{n.time}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.footer}>
            <button className={styles.viewAll}>View all</button>
          </div>
        </div>
      )}
    </div>
  );
}
