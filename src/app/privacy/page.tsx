import React from "react";
import s from "./Privacy.module.scss";

export default function Privacy() {
  return (
    <main className={s.container}>
      <h1>Privacy Policy</h1>

      <section className={s.section}>
        <h2 className={s.subTittle}>1. Information Collection</h2>
        <p>
          We collect information you provide directly when creating an account,
          posting content, or interacting with other users.
        </p>
      </section>

      <section className={s.section}>
        <h2 className={s.subTittle}>2. Use of Information</h2>
        <p>
          Collected data is used to improve our services, personalize your experience,
          and communicate important updates.
        </p>
      </section>

      <section className={s.section}>
        <h2 className={s.subTittle}>3. Sharing of Information</h2>
        <p>
          We do not sell your personal information. We may share data with service
          providers to help operate the platform.
        </p>
      </section>

      <section className={s.section}>
        <h2 className={s.subTittle}>4. Security</h2>
        <p>
          We implement reasonable technical measures to protect your information
          from unauthorized access or disclosure.
        </p>
      </section>

      <section className={s.section}>
        <h2 className={s.subTittle}>5. Changes to Privacy Policy</h2>
        <p>
          We may update this Privacy Policy periodically. Continued use of the
          platform constitutes acceptance of the updated policy.
        </p>
      </section>
    </main>
  );
}
