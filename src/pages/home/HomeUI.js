import React from "react";
import styles from "./Home.module.scss";
import { Hero, HomeSection } from "../../components";
import { homeSectionsData } from "../../utilities/homeSectionsData";

const HomeUI = () => {
  return (
    <div className={styles.home_page}>
      <Hero />
      {homeSectionsData.map((section) => (
        <HomeSection key={section.id} section={section} />
      ))}
    </div>
  );
};

export default HomeUI;
