import React from "react";
import styles from "./Navbar.module.scss";
import { Logo, NavItems, HamburgerIcon } from "../";

const NavbarUI = ({ colorChange, isTabletOrMobile }) => {
  return (
    <div
      className={`${styles.navbar} ${
        colorChange ? styles.navbar_scroll : styles.navbar_initial
      }`}
    >
      <Logo />

      {isTabletOrMobile ? (
        <HamburgerIcon />
      ) : (
        <NavItems isInDesktopNav={true} />
      )}
    </div>
  );
};

export default NavbarUI;
