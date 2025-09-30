
import CommentSection from '../comment/CommentSection';
import styles from './PostExplore.module.scss'
export default function PostExplore(){
 const posts = [
    {
      id: 1,
      author: "Jane Doe",
      username: "@jane",
      image: "https://i68.servimg.com/u/f68/13/38/65/98/image_10.jpg",
      content: "Exploring the beauty of the mountains 🌄",
      likes: 120,
      comments: 15,
    },
    {
      id: 2,
      author: "Mark Smith",
      username: "@mark",
      image: "https://i68.servimg.com/u/f68/13/38/65/98/image_10.jpg",
      content: "New city, new adventures ✨",
      likes: 98,
      comments: 22,
    },
    {
      id: 3,
      author: "Sofia Lee",
      username: "@sofia",
      image: "https://i68.servimg.com/u/f68/13/38/65/98/image_10.jpg",
      content: "Chilling with some coffee ☕",
      likes: 210,
      comments: 45,
    },
  ];

  return (
    <main className={styles.explore}>
      <h1>Explore</h1>
      <p className={styles.subtitle}>
        Discover trending posts and new communities
      </p>

      <div className={styles.grid}>
        {posts.map((post) => (
          <div key={post.id} className={styles.card}>
            <img src={post.image} alt={post.content} className={styles.postImage} />
            <div className={styles.content}>
              <h3>{post.author}</h3>
              <span className={styles.username}>{post.username}</span>
              <p>{post.content}</p>
              <div className={styles.actions}>
                <button>❤️ {post.likes}</button>
                <button>💬 {post.comments}</button>
                <button>↗️ Share</button>
              </div>
              <CommentSection />
            </div>
          </div>
        ))}
      </div>

      
    </main>
  );
}