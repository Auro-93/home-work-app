import React from "react";
import styles from "./Loader.module.scss";

const LoaderUI = ({ isDarkBg }) => {
  return (
    <div
      className={`${styles.spinners_container} ${
        isDarkBg
          ? styles.spinners_container_light
          : styles.spinners_container_dark
      }`}
    >
      <div className={styles.spinner}></div>
      <div className={styles.spinner}></div>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoaderUI;
