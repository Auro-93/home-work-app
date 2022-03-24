import React from "react";
import uncheckedIcon from "../../assets/images/unchecked-icon.png";

const UncheckedIconUI = ({ addingSkill, isTabletOrMobile }) => {
  /*ICON STYLE BASED ON MEDIA QUERIES */
  const iconStyle = {
    width: isTabletOrMobile ? "2rem" : "3rem",

    height: isTabletOrMobile ? "2rem" : "3rem",
  };
  return (
    <img
      style={iconStyle}
      onClick={addingSkill}
      src={uncheckedIcon}
      alt="unchecked-icon"
    />
  );
};

export default UncheckedIconUI;
