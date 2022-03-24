import React from "react";
import styles from "./Skills.module.scss";
import skillIcon from "../../assets/images/skill-icon.png";
import { CheckedIcon, Loader, Message, SkillCard } from "../../components";

const SkillsUI = ({ fetchState }) => {
  const { data, error, isLoading, isSuccess } = fetchState;
  const catList = isSuccess && data.jobs ? data.jobs : [];

  return (
    <div className={styles.skills_page}>
      <header className={styles.skills_page_header}>
        <h1 className={styles.skills_page_header_title}>
          YOUR SKILLS
          <img
            className={styles.skills_page_header_title_icon}
            src={skillIcon}
            alt="skills-icon"
          />
        </h1>
        <div className={styles.skills_page_header_desc}>
          <p>Job offers that match your skills will be marked with the icon</p>
          <CheckedIcon isInSkillsGrid={false} />
        </div>
      </header>

      {isLoading && <Loader isDarkBg={false} />}

      {error && (
        <Message type="error" message={`${error.status}: ${error.error}`} />
      )}

      {isSuccess && catList.length === 0 && (
        <Message type="info" message="Sorry: categories list not found" />
      )}

      {catList.length > 0 && (
        <div className={styles.skills_page_grid}>
          {catList.map((cat) => {
            if (cat.name !== "All others")
              return <SkillCard key={cat.id} skill={cat} />;
          })}
        </div>
      )}
    </div>
  );
};

export default SkillsUI;
