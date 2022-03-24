import React from "react";
import SkillCardUI from "./SkillCardUI";
import { useSelector } from "react-redux";

const SkillCard = ({ skill }) => {
  /*LIST OF YOUR SKILLS SAVED IN STATE AND LOCAL STORAGE */
  const yourSkills = useSelector((state) => state.skills.skills);

  /*FIND IF A JOB CATEGORY IS IN YOUR SKILLS LIST */
  const isYourSkill = yourSkills.find((yourSkill) => yourSkill.id === skill.id);

  return <SkillCardUI skill={skill} isYourSkill={isYourSkill} />;
};

export default SkillCard;
