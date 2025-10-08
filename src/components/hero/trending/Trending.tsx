"use client";

import SuggestedUsersCard from "@/features/home-ui/components/suggested/SuggestedUsersCard";
import s from "./Trending.module.scss";
import React from "react";
import TrendingCard from "@/features/home-ui/components/trending/TrendingCard";

interface TrendingProps {
   trendingTopics:any
   suggestedUsers:any
   user:any
}

const  Trending:React.FC<TrendingProps> = ({trendingTopics,suggestedUsers,user}) =>  {
  return (
    <aside className={s.sidebar}>

      {user ? <SuggestedUsersCard suggestedUsers={suggestedUsers}/> :  <TrendingCard trendingTopics={trendingTopics} /> }
    </aside>
  );
}

export default Trending;
