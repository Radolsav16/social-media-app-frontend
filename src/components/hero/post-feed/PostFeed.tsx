"use client";

import styles from "./PostFeed.module.scss";

export default function PostFeed() {
  const posts = [
    {
      id: 1,
      author: "Jane Doe",
      username: "@jane",
      avatar: "https://i.pravatar.cc/40?img=1",
      time: "2h ago",
      content: "Just launched my new project with Next.js 🚀 Loving the ecosystem!",
      image: "https://source.unsplash.com/random/600x400?tech",
      likes: 120,
      comments: 32,
    },
    {
      id: 2,
      author: "Mark Smith",
      username: "@mark",
      avatar: "https://i.pravatar.cc/40?img=2",
      time: "5h ago",
      content: "Game night with friends 🎮 Anyone else hyped for the new Valorant update?",
      image: "https://source.unsplash.com/random/600x400?gaming",
      likes: 89,
      comments: 14,
    },
    {
      id: 3,
      author: "Alice Johnson",
      username: "@alice",
      avatar: "https://i.pravatar.cc/40?img=3",
      time: "1d ago",
      content: "Exploring the beauty of nature 🌲🍃",
      image: "https://source.unsplash.com/random/600x400?nature",
      likes: 230,
      comments: 48,
    },
  ];

  return (
    <section className={styles.feed}>
      {posts.map((post) => (
        <article key={post.id} className={styles.postCard}>
          {/* Header */}
          <div className={styles.header}>
            <img src={post.avatar} alt={post.author} className={styles.avatar} />
            <div className={styles.authorInfo}>
              <span className={styles.author}>{post.author}</span>
              <span className={styles.username}>{post.username} • {post.time}</span>
            </div>
          </div>

          {/* Content */}
          <p className={styles.content}>{post.content}</p>
          {post.image && <img src={post.image} alt="post" className={styles.postImage} />}

          {/* Footer actions */}
          <div className={styles.actions}>
            <button>❤️ {post.likes}</button>
            <button>💬 {post.comments}</button>
            <button>↗️ Share</button>
          </div>
        </article>
      ))}
    </section>
  );
}
