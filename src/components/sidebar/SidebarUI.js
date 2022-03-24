import React from "react";

import styles from "./Sidebar.module.scss";
import { HamburgerIcon, NavItems } from "../";

const SidebarUI = () => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.ham_icon_container}>
        <HamburgerIcon />
      </div>

      <NavItems isInDesktopNav={false} />
    </nav>
  );
};

export default SidebarUI;
