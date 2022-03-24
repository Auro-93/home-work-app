import React from "react";
import SidebarUI from "./SidebarUI";
import { useSelector } from "react-redux";
import useMediaQueryHook from "../../hooks/useMediaQueryHook";

const Sidebar = () => {
  const { isTabletOrMobile } = useMediaQueryHook();

  /*MOBILE MENU STATE */
  const mobileMenuOpen = useSelector(
    (state) => state.mobileMenu.mobileMenuOpen
  );

  if (isTabletOrMobile && mobileMenuOpen) {
    return <SidebarUI />;
  } else {
    return null;
  }
};

export default Sidebar;
