import React from "react";
import s from "./Terms.module.scss";

export default function Terms() {
  return (
    <main className={s.container}>
      <h1 className={s.heading}>Terms of Service</h1>

      <section className={s.section}>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using our social media platform, you agree to comply with
          and be bound by these Terms of Service. If you do not agree, please do
          not use our platform.
        </p>
      </section>

      <section className={s.section}>
        <h2>2. User Responsibilities</h2>
        <p>
          Users are responsible for maintaining the confidentiality of their
          accounts and passwords, and for all activities that occur under their
          account.
        </p>
      </section>

      <section className={s.section}>
        <h2>3. Content Guidelines</h2>
        <p>
          Users are prohibited from posting content that is unlawful, harmful,
          defamatory, or infringes on the rights of others. We reserve the right to
          remove such content.
        </p>
      </section>

      <section className={s.section}>
        <h2>4. Changes to Terms</h2>
        <p>
          We may update these Terms of Service from time to time. Continued use of
          the platform constitutes acceptance of the updated terms.
        </p>
      </section>
    </main>
  );
}
