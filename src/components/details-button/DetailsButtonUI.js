import React from "react";
import styles from "./DetailsButton.module.scss";
import { Link } from "react-router-dom";

const DetailsButtonUI = ({ jobId, isLarge, style }) => {
  return (
    <Link
      to={`/job/${jobId}`}
      className={`${styles.details_button} ${
        isLarge ? styles.details_button_large : styles.details_button_small
      }`}
      style={style}
    >
      VIEW
    </Link>
  );
};

export default DetailsButtonUI;
