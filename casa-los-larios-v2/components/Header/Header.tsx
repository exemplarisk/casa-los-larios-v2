// components/Header/Header.tsx
import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>C-L</h1>
        <p>Your Ideal Summer Getaway</p>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#calendar">Calendar</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;