"use client";

import { useState } from "react";
import styles from "./ProfileTabs.module.scss";

const TABS = ["Posts", "About", "Friends", "Photos", "Groups", "Activity", "Saved"];

export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("Posts");

  return (
    <div className={styles.profileTabs}>
      <div className={styles.tabList}>
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.active : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
