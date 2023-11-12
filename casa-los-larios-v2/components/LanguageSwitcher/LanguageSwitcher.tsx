import { useRouter } from "next/router";
import styles from "./LanguageSwitcher.module.css";
import { US, SE } from "country-flag-icons/react/3x2";

const LanguageSwitcher = () => {
  const router = useRouter();

  const changeLanguage = (language: string) => {
    router.push(router.pathname, router.asPath, { locale: language });
  };

  return (
    <div className={styles.languageSwitcher}>
      <button
        onClick={() => changeLanguage("en")}
        className={`${styles.button} ${
          router.locale === "en" ? styles.active : ""
        }`}
        title="English"
      >
        <US className={styles.flagIcon} />
      </button>
      <button
        onClick={() => changeLanguage("sv")}
        className={`${styles.button} ${
          router.locale === "sv" ? styles.active : ""
        }`}
        title="Svenska"
      >
        <SE className={styles.flagIcon} />
      </button>
    </div>
  );
};

export default LanguageSwitcher;