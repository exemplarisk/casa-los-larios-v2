import React, { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>C-L</h1>
        <p>Your Ideal Summer Getaway</p>
      </div>
      <button onClick={toggleNav} className={styles.navToggle}>
        {isNavVisible ? <FaTimes /> : <FaBars />}
      </button>
      <nav
        className={`${styles.navigation} ${isNavVisible ? styles.visible : ""}`}
      >
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/booking">Booking</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;