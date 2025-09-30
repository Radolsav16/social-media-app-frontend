"use client";
import { useState } from "react";
import styles from "./ChatSidebar.module.scss";
import { MessageCircle } from "lucide-react";

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
  { id: 2, sender: "You", text: "I'm good, you?", time: "10:02 AM" },
];

export default function ChatSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeUser, setActiveUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim() || !activeUser) return;
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
    <>
      {/* Floating Button */}
      <button className={styles.chatToggle} onClick={() => setIsOpen(!isOpen)}>
        <MessageCircle size={24} />
      </button>

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        {!activeUser ? (
          <>
            <header className={styles.header}>
              <h3>Chats</h3>
              <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
                ✕
              </button>
            </header>

            <ul className={styles.userList}>
              {mockUsers.map((user) => (
                <li
                  key={user.id}
                  className={styles.userItem}
                  onClick={() => setActiveUser(user)}
                >
                  <span className={styles.avatar}>{user.name.charAt(0)}</span>
                  <span>{user.name}</span>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <header className={styles.header}>
              <button onClick={() => setActiveUser(null)} className={styles.backBtn}>
                ←
              </button>
              <h3>{activeUser.name}</h3>
              <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
                ✕
              </button>
            </header>

            <div className={styles.messages}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`${styles.message} ${
                    msg.sender === "You" ? styles.outgoing : styles.incoming
                  }`}
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
        )}
      </aside>

      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)} />}
    </>
  );
}
