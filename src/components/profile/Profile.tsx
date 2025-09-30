"use client";

import PostFeed from "../hero/post-feed/PostFeed";
import SavedPosts from "../post/saved-posts/SavedPosts";
import Sidebar from "../sidebar/Sidebar";
import Activity from "./activity/Activity";
import EditProfileModal from "./edit-profile/EditProfile";
import FriendList from "./friends-list/FriendsList";
import GroupsJoined from "./groups-joined/GroupsJoined";
import ProfileTabs from "./profile-tabs/ProfileTabs";
import styles from "./Profile.module.scss";

export default function Profile() {
  return (
    <div className={styles.profilePage}>
      <Sidebar />

      <main className={styles.mainContent}>
        {/* Profile Header */}
        <div className={styles.profileHeader}>
          <div className={styles.backgroundImage}>
            <img src="/assets/profile-bg.jpg" alt="Profile Background" />
          </div>
          <div className={styles.profileInfo}>
            <img
              src="/avatar-2.jpg"
              alt="User Avatar"
              className={styles.avatar}
            />
            <h2 className={styles.name}>John Doe</h2>
            <p className={styles.username}>@johndoe</p>
            <p className={styles.bio}>
              Web developer, tech enthusiast, coffee lover. Sharing thoughts and
              ideas every day.
            </p>
          </div>
        </div>
         {/* <EditProfileModal isOpen={true} onClose={() => console.log('click')} /> */}

        <ProfileTabs />

        {/* Add Post Component */}
        <div className={styles.addPost}>
          <textarea placeholder="Share something..." />
          <button>Post</button>
        </div>

        <FriendList />
        <SavedPosts />
        <Activity />
        <GroupsJoined />
          <div className={styles.feed}>
          {[1, 2, 3, 4, 5].map((post) => (
            <div key={post} className={styles.postCard}>
              <div className={styles.header}>
                <img src="/assets/profile-avatar.jpg" alt="avatar" className={styles.avatar} />
                <div className={styles.authorInfo}>
                  <span className={styles.author}>John Doe</span>
                  <span className={styles.username}>@johndoe</span>
                </div>
              </div>
              <div className={styles.content}>
                This is a sample post content. It can be long and descriptive.
              </div>
              <img
                src="/assets/mock-post.jpg"
                alt="Post Image"
                className={styles.postImage}
              />
              <div className={styles.actions}>
                <button>Like</button>
                <button>Comment</button>
                <button>Share</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
