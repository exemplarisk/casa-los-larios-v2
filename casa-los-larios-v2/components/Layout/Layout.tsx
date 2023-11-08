import React, { ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header />
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;