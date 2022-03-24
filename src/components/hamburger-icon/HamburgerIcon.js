import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMobileMenuOpen } from "../../reducers/mobileMenuSlice";
import HamburgerIconUI from "./HamburgerIconUI";

const HamburgerIcon = () => {
  const dispatch = useDispatch();

  /*MOBILE MENU STATE*/
  const mobileMenuOpen = useSelector(
    (state) => state.mobileMenu.mobileMenuOpen
  );

  /*TOGGLE MOBILE MENU ON HAMBURGER ICON CLICK */
  const handleMenuOpen = () => {
    if (mobileMenuOpen) {
      dispatch(setMobileMenuOpen(false));
    } else {
      dispatch(setMobileMenuOpen(true));
    }
  };

  return (
    <HamburgerIconUI open={mobileMenuOpen} handleMenuOpen={handleMenuOpen} />
  );
};

export default HamburgerIcon;
