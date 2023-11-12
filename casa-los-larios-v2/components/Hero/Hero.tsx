import React from "react";
import styles from "./Hero.module.css";
import { useTranslation } from "next-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation("common");
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h2>{t("welcome")}</h2>
        <p>{t("retreat")}</p>
        <a href="/booking" className={styles.ctaButton}>
          {t("bookNow")}
        </a>
      </div>
    </section>
  );
};

export default Hero;