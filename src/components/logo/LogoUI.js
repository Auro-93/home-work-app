import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";
import logo from "../../assets/images/logo.png";

const LogoUI = () => {
  return (
    <Link to="/">
      <img className={styles.logo} src={logo} alt="logo" />
    </Link>
  );
};

export default LogoUI;
