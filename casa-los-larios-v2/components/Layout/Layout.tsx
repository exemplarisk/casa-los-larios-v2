import React, { ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "../../styles/Home.module.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;