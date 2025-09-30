"use client";
import styles from "./EventsMeetups.module.scss";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
}

const mockEvents: Event[] = [
  {
    id: 1,
    title: "Frontend Dev Meetup",
    date: "Oct 10, 2025",
    location: "San Francisco, CA",
    image: "/images/events/frontend.jpg",
  },
  {
    id: 2,
    title: "AI Hackathon",
    date: "Nov 5, 2025",
    location: "Online",
    image: "/images/events/ai.jpg",
  },
  {
    id: 3,
    title: "Photography Walk",
    date: "Nov 20, 2025",
    location: "New York, NY",
    image: "/images/events/photo.jpg",
  },
];

export default function EventsMeetups() {
  return (
    <section className={styles.events}>
      <h2 className={styles.title}>Upcoming Events & Meetups</h2>
      <div className={styles.list}>
        {mockEvents.map((event) => (
          <div key={event.id} className={styles.card}>
            <img src={event.image} alt={event.title} className={styles.image} />
            <div className={styles.info}>
              <h3 className={styles.name}>{event.title}</h3>
              <p className={styles.date}>{event.date}</p>
              <p className={styles.location}>{event.location}</p>
              <button className={styles.button}>Join</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
