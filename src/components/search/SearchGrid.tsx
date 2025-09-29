"use client";

import styles from "./SearchGrid.module.scss";

export default function SearchGrid() {
  const posts = [
    { id: 1, image: "/assets/mock-post1.jpg", author: "Alice" },
    { id: 2, image: "/assets/mock-post2.jpg", author: "Bob" },
    { id: 3, image: "/assets/mock-post3.jpg", author: "Charlie" },
    { id: 4, image: "/assets/mock-post4.jpg", author: "Diana" },
    { id: 5, image: "/assets/mock-post5.jpg", author: "Eve" },
    { id: 6, image: "/assets/mock-post6.jpg", author: "Frank" },
  ];

  return (
    <main className={styles.searchPage}>
      <h1 className={styles.title}>Explore Posts</h1>
      <div className={styles.grid}>
        {posts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <img src={post.image} alt={`Post by ${post.author}`} />
            <div className={styles.overlay}>
              <p>@{post.author}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
