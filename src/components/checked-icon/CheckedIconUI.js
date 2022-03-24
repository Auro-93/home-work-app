import React from "react";
import checkedIcon from "../../assets/images/checked-icon.png";

const CheckedIconUI = ({ removingSkill, isInSkillsGrid, isTabletOrMobile }) => {
  /*DYNAMIC ICON STYLE */
  const iconStyle = {
    width:
      isInSkillsGrid && isTabletOrMobile
        ? "2rem"
        : isInSkillsGrid
        ? "3rem"
        : "1rem",
    height:
      isInSkillsGrid && isTabletOrMobile
        ? "2rem"
        : isInSkillsGrid
        ? "3rem"
        : "1rem",
    cursor: isInSkillsGrid ? "pointer" : "default",
    marginLeft: isInSkillsGrid ? 0 : "0.5rem",
  };

  return (
    <img
      onClick={isInSkillsGrid ? removingSkill : null}
      style={iconStyle}
      src={checkedIcon}
      alt="checked-icon"
    />
  );
};

export default CheckedIconUI;
