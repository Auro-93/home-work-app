import React, { useState, useEffect } from "react";
import NavbarUI from "./NavbarUI";
import useMediaQueryHook from "../../hooks/useMediaQueryHook";

const Navbar = () => {
  const { isTabletOrMobile } = useMediaQueryHook();

  /*CHANGE NAVBAR COLOR (FROM SEMI-TRANSPARENT) ON SCROLL */
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);

    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  return (
    <NavbarUI colorChange={colorChange} isTabletOrMobile={isTabletOrMobile} />
  );
};

export default Navbar;
