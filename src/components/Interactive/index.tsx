// import React from "react";

import styles from "./Interactive.module.css";

const Interactive = () => {
  return (
    <div className={styles.interactive}>
      <img className={styles.first} src="/images/First.svg" alt="Loading..." />
      <img
        className={styles.second}
        src="/images/Second.svg"
        alt="Loading..."
      />
      <img className={styles.third} src="/images/Third.svg" alt="Loading..." />
    </div>
  );
};

export default Interactive;
