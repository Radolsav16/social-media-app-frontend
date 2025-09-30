"use client";
import { useState } from "react";
import styles from "./EditProfile.module.scss";

interface Props {
    isOpen:boolean;
    onClose:()=>void;
}

export default function EditProfile({ isOpen, onClose }:Props) {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    website: "",
    profileImage: null as File | null,
    backgroundImage: null as File | null,
  });

  const [preview, setPreview] = useState({
    profileImage: "",
    backgroundImage: "",
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const file = files[0];
      setFormData({ ...formData, [name]: file });
      setPreview({ ...preview, [name]: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated Profile:", formData);
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Name
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>

          <label>
            Bio
            <textarea name="bio" value={formData.bio} onChange={handleChange}></textarea>
          </label>

          <label>
            Website
            <input type="text" name="website" value={formData.website} onChange={handleChange} />
          </label>

          <label>
            Profile Image
            <input type="file" name="profileImage"  onChange={handleFileChange} />
            {preview.profileImage && (
              <img src={preview.profileImage} alt="Profile Preview" className={styles.previewImage} />
            )}
          </label>

          <label>
            Cover Photo
            <input type="file" name="backgroundImage"  onChange={handleFileChange} />
            {preview.backgroundImage && (
              <img src={preview.backgroundImage} alt="Cover Preview" className={styles.previewImage} />
            )}
          </label>

          <div className={styles.actions}>
            <button type="button" onClick={onClose} className={styles.cancel}>
              Cancel
            </button>
            <button type="submit" className={styles.save}>
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
