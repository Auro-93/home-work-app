import { createSlice } from "@reduxjs/toolkit";

/*REDUCER TO SET THE DISTANCE OF THE TOP OF SEARCH JOBS GRID AND FAVOURITE JOBS GRID FROM THE TOP OF THE WINDOW */
/* USEFUL FOR RESETTING SCROLL TO THE TOP OF THE DIV GRID WHEN CHANGING CURRENT PAGE*/

const initialState = {
  searchJobsGridCoords: 0,
  favJobsGridCoords: 0,
};

export const coordinatesSlice = createSlice({
  name: "coordinates",
  initialState,
  reducers: {
    setCoords: (state, action) => {
      const { coords, isSearchCoords } = action.payload;
      if (isSearchCoords) {
        state.searchJobsGridCoords = coords;
      } else {
        state.favJobsGridCoords = coords;
      }
    },
  },
});

export const { setCoords } = coordinatesSlice.actions;

export default coordinatesSlice.reducer;
