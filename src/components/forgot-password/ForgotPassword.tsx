"use client";
import { useState } from "react";
import styles from "./ForgotPassword.module.scss";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Hook this up to your backend (API call)
    console.log("Reset link sent to:", email);
    setSubmitted(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Forgot Password?</h2>
        {!submitted ? (
          <>
            <p className={styles.description}>
              Enter your email address and we’ll send you a link to reset your password.
            </p>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.input}
              />
              <button type="submit" className={styles.button}>
                Send Reset Link
              </button>
            </form>
          </>
        ) : (
          <p className={styles.success}>
            ✅ If this email exists, a reset link has been sent.
          </p>
        )}
      </div>
    </div>
  );
}
