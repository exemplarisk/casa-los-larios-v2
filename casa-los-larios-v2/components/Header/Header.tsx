import React from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Welcome to Casa Los Larios</h1>
      <p className={styles.subtitle}>
        Your dream vacation awaits in Torrevieja, Spain.
      </p>
    </header>
  );
};

export default Header;