import { createSlice } from "@reduxjs/toolkit";

/*REDUCER TO MANAGE THE MOBILE MENU OPENING AND CLOSING */

const initialState = {
  mobileMenuOpen: false,
};

export const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState,
  reducers: {
    setMobileMenuOpen: (state, action) => {
      state.mobileMenuOpen = action.payload;
    },
  },
});

export const { setMobileMenuOpen } = mobileMenuSlice.actions;

export default mobileMenuSlice.reducer;
