"use client";

import s from "./Testimonials.module.scss";

export default function Testimonials({testimonials}) {
  return (
    <section className={s.testimonials}>
      <h2 className={s.heading}>What Our Users Say</h2>
      <div className={s.grid}>
        {testimonials.map((t) => (
          <div key={t.id} className={s.card}>
            <div className={s.user}>
              <img src={t.avatar} alt={t.name} className={s.avatar} />
              <div className={s.userInfo}>
                <span className={s.name}>{t.name}</span>
                <span className={s.username}>{t.username}</span>
              </div>
            </div>
            <p className={s.quote}>"{t.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
