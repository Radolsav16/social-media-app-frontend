import React from "react";
import s from "./About.module.scss";

export default function About() {
  return (
    <main className={s.container}>
      {/* Hero Section */}
      <section className={s.hero}>
        <h1>About Our Social Media App</h1>
        <p>
          Connect with friends, explore trending topics, and share your ideas with
          the world.
        </p>
      </section>

      {/* Features Section */}
      <section className={s.features}>
        <h2>Why Choose Us?</h2>
        <div className={s.cards}>
          <div className={s.card}>
            <h3>Connect Instantly</h3>
            <p>Stay in touch with friends and discover new connections every day.</p>
          </div>
          <div className={s.card}>
            <h3>Trending Topics</h3>
            <p>Explore what’s happening around the globe and join the conversation.</p>
          </div>
          <div className={s.card}>
            <h3>Safe & Secure</h3>
            <p>Your data is protected with the highest security standards.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
