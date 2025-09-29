"use client";

import { useState } from "react";
import styles from "./CreatePost.module.scss";

export default function CreatePost() {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [tags, setTags] = useState("");
  const [location, setLocation] = useState("");
  const [privacy, setPrivacy] = useState("Public");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ content, image, tags, location, privacy });
    setContent("");
    setImage(null);
    setTags("");
    setLocation("");
    setPrivacy("Public");
  };

  return (
    <main className={styles.createPost}>
      <div className={styles.card}>
        <h1>Create a Post</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Post Text */}
          <textarea
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={styles.textarea}
          />

          {/* Image Preview */}
          {image && (
            <div className={styles.preview}>
              <img src={image} alt="Preview" />
            </div>
          )}

          {/* Extra Components */}
          <input
            type="text"
            placeholder="Tag friends..."
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className={styles.input}
          />

          <input
            type="text"
            placeholder="Add location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className={styles.input}
          />

          <select
            value={privacy}
            onChange={(e) => setPrivacy(e.target.value)}
            className={styles.select}
          >
            <option value="Public">🌍 Public</option>
            <option value="Friends">👥 Friends</option>
            <option value="Only Me">🔒 Only Me</option>
          </select>

          {/* Upload + Submit */}
          <div className={styles.actions}>
            <label className={styles.uploadBtn}>
              📷 Upload Image
              <input type="file" accept="image/*" hidden onChange={handleImageUpload} />
            </label>

            <button type="submit" className={styles.postBtn}>
              Post
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
