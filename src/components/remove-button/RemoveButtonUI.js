import React from "react";
import styles from "./RemoveButton.module.scss";

const RemoveButtonUI = ({ isLarge, removeFav, style }) => {
  return (
    <button
      onClick={removeFav}
      className={`${styles.remove_button} ${
        isLarge ? styles.remove_button_large : styles.remove_button_small
      }`}
      style={style}
    >
      REMOVE <span>X</span>
    </button>
  );
};

export default RemoveButtonUI;
