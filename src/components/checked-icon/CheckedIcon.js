import React from "react";
import { useDispatch } from "react-redux";
import { removeSkill } from "../../reducers/skillsSlice";
import CheckedIconUI from "./CheckedIconUI";
import useMediaQueryHook from "../../hooks/useMediaQueryHook";

const CheckedIcon = ({ id, isInSkillsGrid }) => {
  const { isTabletOrMobile } = useMediaQueryHook();

  const dispatch = useDispatch();

  /*REMOVE SKILL FROM YOUR SKILLS*/
  const removingSkill = () => {
    dispatch(removeSkill(id));
  };

  return (
    <CheckedIconUI
      removingSkill={removingSkill}
      isInSkillsGrid={isInSkillsGrid}
      isTabletOrMobile={isTabletOrMobile}
    />
  );
};

export default CheckedIcon;
