import React from "react";
import styles from "./PrivacyContent.module.css";
import privacyPolicySections from "./privacyPolicyData";

export const PrivacyContent: React.FC = () => {
  return (
    <div className={styles.privacyContainer}>
      <h1 className={styles.title}>Privacy Policy</h1>
      {privacyPolicySections.map((section, index) => (
        <section key={index}>
          <h2 className={styles.subtitle}>{section.title}</h2>
          <p
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </section>
      ))}
    </div>
  );
};

export default PrivacyContent;