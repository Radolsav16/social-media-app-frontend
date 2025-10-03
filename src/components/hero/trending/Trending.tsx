"use client";

import { HomeTypes } from "@/features/home/types/home.types";
import s from "./Trending.module.scss";
import React from "react";

interface TrendingProps {
   trendingTopics:string[]
   suggestedUsers:HomeTypes.SuggestedUser[]
}

const  Trending:React.FC<TrendingProps> = ({trendingTopics,suggestedUsers}) =>  {
  return (
    <aside className={s.sidebar}>
      <div className={s.card}>
        <h2 className={s.title}>Trending Topics</h2>
        <ul className={s.list}>
          {trendingTopics.map((topic) => (
            <li key={topic.id} className={s.item}>
              <span className={s.category}>{topic.category}</span>
              <span className={s.topic}>{topic.title}</span>
              <span className={s.posts}>{topic.posts}</span>
            </li>
          ))}
        </ul>
        <button className={s.showMore}>Show more</button>
      </div>

      <div className={s.card}>
        <h2 className={s.title}>Suggested Users</h2>
        <ul className={s.usersList}>
          {suggestedUsers.map((user) => (
            <li key={user.id} className={s.userItem}>
              <img src={user.avatar} alt={user.name} className={s.avatar} />
              <div className={s.userInfo}>
                <span className={s.name}>{user.name}</span>
                <span className={s.username}>{user.username}</span>
              </div>
              <button className={s.followBtn}>Follow</button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Trending;
