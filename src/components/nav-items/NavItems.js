import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NavItemsUI from "./NavItemsUI";
import { setMobileMenuOpen } from "../../reducers/mobileMenuSlice";

const NavItems = ({ isInDesktopNav }) => {
  const dispatch = useDispatch();

  /*LIST OF FAVOURITE JOB OFFERS */
  const favJobs = useSelector((state) => state.favouriteJobs.favouriteJobs);

  /*CLOSE MOBILE MENU WHEN USER CLICKS ON NAV ITEMS LINKS */
  const handleMenuClose = () => {
    dispatch(setMobileMenuOpen(false));
  };

  return (
    <NavItemsUI
      favJobs={favJobs}
      isInDesktopNav={isInDesktopNav}
      handleMenuClose={handleMenuClose}
    />
  );
};

export default NavItems;
