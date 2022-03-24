import React from "react";
import HeroUI from "./HeroUI";
import useMediaQueryHook from "../../hooks/useMediaQueryHook";

const Hero = () => {
  const { isTabletOrMobile } = useMediaQueryHook();
  return <HeroUI isTabletOrMobile={isTabletOrMobile} />;
};

export default Hero;
