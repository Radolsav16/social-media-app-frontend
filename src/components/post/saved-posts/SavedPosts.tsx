"use client";
import styles from "./SavedPosts.module.scss";

interface Post {
  id: number;
  author: string;
  content: string;
  image?: string;
}

const mockSavedPosts: Post[] = [
  {
    id: 1,
    author: "Alice",
    content: "A beautiful day at the beach 🌊",
    image: "https://source.unsplash.com/random/400x300/?beach",
  },
  {
    id: 2,
    author: "Bob",
    content: "Loving my new book 📚",
    image: "https://source.unsplash.com/random/400x300/?books",
  },
  {
    id: 3,
    author: "Charlie",
    content: "Working on my new project 💻",
    image: "https://source.unsplash.com/random/400x300/?coding",
  },
];

export default function SavedPosts() {
  return (
    <section className={styles.savedPosts}>
      <h2 className={styles.title}>Saved Posts</h2>
      <div className={styles.grid}>
        {mockSavedPosts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            {post.image && <img src={post.image} alt="Post" className={styles.postImage} />}
            <div className={styles.postContent}>
              <h3 className={styles.author}>{post.author}</h3>
              <p className={styles.text}>{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
