import React from "react";
import styles from "./NotFound.module.scss";
import notFound from "../../assets/images/notfound.png";

const NotFoundUI = () => {
  return (
    <div className={styles.not_found_page}>
      <div className={styles.not_found_page_container}>
        <img src={notFound} alt="not-found-icon" /> <h1>Page Not Found</h1>
      </div>
    </div>
  );
};

export default NotFoundUI;
