import React from "react";
import styles from "./SkillCard.module.scss";
import { CheckedIcon, UncheckedIcon } from "../";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const SkillCardUI = ({ skill, isYourSkill }) => {
  /*BORDER STYLE DEPENDING ON  WHETHER A  JOB CATEGORY BELONGS TO YOUR SKILLS OR NOT */
  const borderStyle = {
    borderColor: isYourSkill ? "#6DCD01" : "#c2c2c2",
    borderWidth: isYourSkill ? "2px" : "1px",
  };

  return (
    <AnimationOnScroll
      animateOnce={true}
      offset={700}
      animateIn="animate__fadeIn"
    >
      <div className={styles.skill_card} style={borderStyle}>
        <h5 className={styles.skill_card_title}>{skill.name}</h5>
        {isYourSkill ? (
          <CheckedIcon id={skill.id} isInSkillsGrid={true} />
        ) : (
          <UncheckedIcon skill={skill} />
        )}
      </div>
    </AnimationOnScroll>
  );
};

export default SkillCardUI;
