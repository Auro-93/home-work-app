import React from "react";
import styles from "./HamburgerIcon.module.scss";

const HamburgerIconUI = ({ open, handleMenuOpen }) => {
  return (
    <div
      onClick={handleMenuOpen}
      className={`${styles.hamburger_icon} ${open ? styles.open : ""}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default HamburgerIconUI;
