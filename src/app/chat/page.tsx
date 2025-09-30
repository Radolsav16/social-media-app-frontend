"use client";
import { useState } from "react";
import styles from "./ChatPage.module.scss";

interface Message {
  id: number;
  sender: string;
  text: string;
  time: string;
}

interface User {
  id: number;
  name: string;
}

const mockUsers: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "John" },
  { id: 3, name: "Mia" },
];

const mockMessages: Message[] = [
  { id: 1, sender: "Alice", text: "Hey, how are you?", time: "10:00 AM" },
  { id: 2, sender: "You", text: "I'm good, how about you?", time: "10:02 AM" },
];

export default function ChatPage() {
  const [activeUser, setActiveUser] = useState<User | null>(mockUsers[0]);
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage: Message = {
      id: Date.now(),
      sender: "You",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <main className={styles.chatPage}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <h2 className={styles.title}>Chats</h2>
        <ul className={styles.userList}>
          {mockUsers.map((user) => (
            <li
              key={user.id}
              className={`${styles.userItem} ${activeUser?.id === user.id ? styles.active : ""}`}
              onClick={() => setActiveUser(user)}
            >
              {user.name}
            </li>
          ))}
        </ul>
        <button className={styles.addUser}>+ Add User</button>
      </aside>

      {/* Chat Area */}
      <section className={styles.chatArea}>
        {activeUser ? (
          <>
            <header className={styles.chatHeader}>
              <h3>{activeUser.name}</h3>
            </header>

            <div className={styles.messages}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`${styles.message} ${msg.sender === "You" ? styles.outgoing : styles.incoming}`}
                >
                  <p>{msg.text}</p>
                  <span>{msg.time}</span>
                </div>
              ))}
            </div>

            <footer className={styles.inputArea}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
              />
              <button onClick={sendMessage}>Send</button>
            </footer>
          </>
        ) : (
          <div className={styles.emptyState}>Select a user to start chatting</div>
        )}
      </section>
    </main>
  );
}
