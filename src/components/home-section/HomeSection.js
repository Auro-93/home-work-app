import React from "react";
import HomeSectionUI from "./HomeSectionUI";
import useMediaQueryHook from "../../hooks/useMediaQueryHook";

const HomeSection = ({ section }) => {
  const { isTabletOrMobile } = useMediaQueryHook();

  return (
    <HomeSectionUI section={section} isTabletOrMobile={isTabletOrMobile} />
  );
};

export default HomeSection;
