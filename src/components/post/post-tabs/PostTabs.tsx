"use client";
import { useState } from "react";
import styles from "./PostTabs.module.scss";

const filters = ["All", "Photos", "Videos",];

interface PostsFilterProps {
  onFilterChange: (filter: string) => void;
}

export default function PostsTabs({ onFilterChange }: PostsFilterProps) {
  const [active, setActive] = useState("All");

  const handleClick = (filter: string) => {
    setActive(filter);
    onFilterChange(filter);
  };

  return (
    <div className={styles.postsFilter}>
      {filters.map((filter) => (
        <button
          key={filter}
          className={`${styles.tab} ${active === filter ? styles.active : ""}`}
          onClick={() => handleClick(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
