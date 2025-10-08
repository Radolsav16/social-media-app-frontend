import React from "react";
import s from './TrendingCard.module.scss'
const TrendingCard = ({trendingTopics = []}) => {
    return(<div className={s.card}>
      <h2 className={s.title}>Trending Topics</h2>
      <ul className={s.list}>
        {trendingTopics.map((topic) => (
          <li key={topic.id} className={s.item}>
            <div className={s.topicInfo}>
              <span className={s.category}>{topic.name}</span>
              <p className={s.description}>{topic.description}</p>
            </div>
            <span className={s.posts}>{topic.posts} posts</span>
          </li>
        ))}
      </ul>
      <button className={s.showMore}>Show more</button>
    </div>)
}

export default TrendingCard;