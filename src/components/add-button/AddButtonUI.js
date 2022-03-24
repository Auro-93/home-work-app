import React from "react";
import styles from "./AddButton.module.scss";

const AddButtonUI = ({ isLarge, addToFav, style }) => {
  return (
    <button
      onClick={addToFav}
      className={`${styles.add_button} ${
        isLarge ? styles.add_button_large : styles.add_button_small
      }`}
      style={style}
    >
      ADD +
    </button>
  );
};

export default AddButtonUI;
