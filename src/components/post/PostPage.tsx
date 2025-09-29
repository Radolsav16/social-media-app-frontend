"use client";

import styles from "./PostPage.module.scss";

export default function PostPage() {
  // mock post
  const post = {
    id: 1,
    author: { name: "Alice Johnson", username: "alicej", avatar: "/avatar-2.jpg" },
    image: "/assets/mock-post1.jpg",
    content: "Had an amazing day exploring nature 🌿✨ #travel #adventure",
    likes: 120,
    comments: [
      { id: 1, user: "Bob", text: "This looks beautiful! 😍" },
      { id: 2, user: "Charlie", text: "Where is this place?" },
    ],
  };

  const recommended = [
    {
      id: 2,
      image: "/assets/mock-post2.jpg",
      author: "David",
      content: "Coffee vibes ☕✨",
    },
    {
      id: 3,
      image: "/assets/mock-post3.jpg",
      author: "Emma",
      content: "Sunset by the beach 🌅",
    },
    {
      id: 4,
      image: "/assets/mock-post4.jpg",
      author: "Lucas",
      content: "New sneakers drop 🔥👟",
    },
  ];

  return (
    <main className={styles.postPage}>
      <div className={styles.postCard}>
        {/* Author Info */}
        <div className={styles.header}>
          <img src={post.author.avatar} alt={post.author.name} className={styles.avatar} />
          <div className={styles.authorInfo}>
            <span className={styles.name}>{post.author.name}</span>
            <span className={styles.username}>@{post.author.username}</span>
          </div>
          <button className={styles.followBtn}>Follow</button>
        </div>

        {/* Post Content */}
        <p className={styles.content}>{post.content}</p>
        <img src={post.image} alt="Post" className={styles.postImage} />

        {/* Actions */}
        <div className={styles.actions}>
          <button>❤️ {post.likes}</button>
          <button>💬 {post.comments.length}</button>
          <button>🔗 Share</button>
        </div>

        {/* Comments */}
        <div className={styles.comments}>
          <h3>Comments</h3>
          {post.comments.map((c) => (
            <div key={c.id} className={styles.comment}>
              <span className={styles.commentUser}>{c.user}:</span>
              <span className={styles.commentText}>{c.text}</span>
            </div>
          ))}
          <div className={styles.addComment}>
            <input type="text" placeholder="Write a comment..." />
            <button>Post</button>
          </div>
        </div>
      </div>
            <section className={styles.suggested}>
        <h2>Posts You May Like</h2>
        <div className={styles.suggestedGrid}>
          {recommended.map((p) => (
            <div key={p.id} className={styles.suggestedCard}>
              <img src={p.image} alt={p.content} />
              <div className={styles.info}>
                <span className={styles.author}>{p.author}</span>
                <p>{p.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
