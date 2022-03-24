import React from "react";
import { useDispatch } from "react-redux";
import { addSkill } from "../../reducers/skillsSlice";
import UncheckedIconUI from "./UncheckedIconUI";
import useMediaQueryHook from "../../hooks/useMediaQueryHook";

const UncheckedIcon = ({ skill }) => {
  const { isTabletOrMobile } = useMediaQueryHook();
  const dispatch = useDispatch();

  /*ADD SKILL TO YOUR SKILLS LIST */
  const addingSkill = () => {
    dispatch(addSkill(skill));
  };

  return (
    <UncheckedIconUI
      addingSkill={addingSkill}
      isTabletOrMobile={isTabletOrMobile}
    />
  );
};

export default UncheckedIcon;
