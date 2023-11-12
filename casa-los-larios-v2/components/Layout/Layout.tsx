import React, { ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div id="root" className={styles.container}>
      <Header />
      <LanguageSwitcher />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;