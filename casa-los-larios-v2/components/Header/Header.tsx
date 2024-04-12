import React, { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "next-i18next";

const Header: React.FC = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const { t } = useTranslation("common");
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <h1>C-L</h1>
        </Link>
      </div>
      <div className={styles.headerCenter}>
        <LanguageSwitcher />
        <button onClick={toggleNav} className={styles.navToggle}>
          {isNavVisible ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <nav
        className={`${styles.navigation} ${isNavVisible ? styles.visible : ""}`}
      >
        <ul>
          <li>
            <Link href="/">{t("home")}</Link>
          </li>
          <li>
            <Link href="/about">{t("about")}</Link>
          </li>

          <li>
            <Link href="/gallery">{t("gallery")}</Link>
          </li>
          <li>
            <Link href="/booking">{t("booking")}</Link>
          </li>
          <li>
            <Link href="/contact">{t("contact")}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;