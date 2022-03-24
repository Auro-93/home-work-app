import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "../utilities/localStorage";

/*REDUCER TO SET FAVOURITE JOBS LIST, SAVE IT IN LOCAL STORAGE, ADD AND REMOVE FAVOURITES */

const favJobs = getLocalStorage("favJobs");

const initialState = {
  favouriteJobs: favJobs ? favJobs : [],
};

export const favouriteJobsSlice = createSlice({
  name: "favouriteJobs",
  initialState,

  reducers: {
    addFavourite: (state, action) => {
      state.favouriteJobs.push(action.payload);

      setLocalStorage("favJobs", state.favouriteJobs);
    },
    removeFavourite: (state, action) => {
      const favId = action.payload;
      state.favouriteJobs = state.favouriteJobs.filter(
        (fav) => fav.id !== favId
      );
      setLocalStorage("favJobs", state.favouriteJobs);
    },
  },
});

export const { addFavourite, removeFavourite } = favouriteJobsSlice.actions;

export default favouriteJobsSlice.reducer;
