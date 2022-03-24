import { createSlice } from "@reduxjs/toolkit";

/*REDUCER TO SET QUERY PARAMS FOR API CALLS */

const initialState = {
  category: "",
  searchTerm: "",
};

export const queryParamsSlice = createSlice({
  name: "queryParams",
  initialState,
  reducers: {
    changeQueryParams: (state, action) => {
      state.category = action.payload.category.value;
      state.searchTerm = action.payload.searchTerm;
    },
  },
});

export const { changeQueryParams } = queryParamsSlice.actions;

export default queryParamsSlice.reducer;
