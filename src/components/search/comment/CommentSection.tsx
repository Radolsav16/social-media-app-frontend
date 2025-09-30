"use client";

import { useState } from "react";
import styles from "./CommentSection.module.scss";

type Comment = {
  id: number;
  author: string;
  text: string;
  likes: number;
};

export default function CommentSection({ postId }: { postId: string }) {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, author: "Jane", text: "Love this post!", likes: 3 },
    { id: 2, author: "Mark", text: "So inspiring 🔥", likes: 5 },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    const newC: Comment = {
      id: Date.now(),
      author: "You",
      text: newComment,
      likes: 0,
    };
    setComments([...comments, newC]);
    setNewComment("");
  };

  const handleLikeComment = (id: number) => {
    setComments(
      comments.map((c) =>
        c.id === id ? { ...c, likes: c.likes + 1 } : c
      )
    );
  };

  return (
    <div className={styles.commentSection}>
      <button
        className={styles.toggleBtn}
        onClick={() => setShowComments(!showComments)}
      >
        {showComments ? "Hide Comments" : `View Comments (${comments.length})`}
      </button>

      {showComments && (
        <div className={styles.commentsBox}>
          {comments.map((comment) => (
            <div key={comment.id} className={styles.comment}>
              <div className={styles.commentHeader}>
                <span className={styles.author}>{comment.author}</span>
              </div>
              <p className={styles.text}>{comment.text}</p>
              <div className={styles.actions}>
                <button onClick={() => handleLikeComment(comment.id)}>
                  ❤️ {comment.likes}
                </button>
              </div>
            </div>
          ))}

          <div className={styles.newComment}>
            <input
              type="text"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddComment()}
            />
            <button onClick={handleAddComment}>Post</button>
          </div>
        </div>
      )}
    </div>
  );
}
