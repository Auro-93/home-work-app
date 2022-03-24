import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavItems.module.scss";
import { navItemsList } from "../../utilities/NavItemsList";

const NavItemsUI = ({ favJobs, isInDesktopNav, handleMenuClose }) => {
  return (
    <ul
      className={`${styles.nav_items} ${
        isInDesktopNav ? styles.nav_items_desktop : styles.nav_items_mobile
      }`}
    >
      {navItemsList.map((navItem) => (
        <li key={navItem.id} className={styles.nav_item}>
          <Link
            onClick={handleMenuClose}
            to={navItem.link}
            className={`${styles.link} ${
              navItem.label === "YOUR LIST" ? styles.your_list_item : ""
            }`}
          >
            {navItem.label}
            {navItem.label === "YOUR LIST" && favJobs.length > 0 && (
              <span className={styles.fav_jobs_num}>{favJobs.length}</span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItemsUI;
