import { createSlice } from "@reduxjs/toolkit";

/*REDUCER TO MANAGE PAGINATION: CURRENT PAGE, CURRENT JOBS DISPLAYED AND NUMBER OF JOBS PER PAGE */

const initialState = {
  searchJobs: { currentPage: 1, jobsPerPage: 6, currentJobs: [] },
  favJobs: { currentPage: 1, jobsPerPage: 3, currentJobs: [] },
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      const { currentPage, isSearchJobs } = action.payload;
      if (isSearchJobs) {
        state.searchJobs.currentPage = currentPage;
      } else {
        state.favJobs.currentPage = currentPage;
      }
    },
    setCurrentJobs: (state, action) => {
      const { jobsList, isSearchJobs } = action.payload;
      const currentPage = isSearchJobs
        ? state.searchJobs.currentPage
        : state.favJobs.currentPage;
      const jobsPerPage = isSearchJobs
        ? state.searchJobs.jobsPerPage
        : state.favJobs.jobsPerPage;
      const indexOfLastJob = currentPage * jobsPerPage;
      const indexOfFirstJob = indexOfLastJob - jobsPerPage;
      const currentJobs = jobsList.slice(indexOfFirstJob, indexOfLastJob);

      if (isSearchJobs) {
        state.searchJobs.currentJobs = currentJobs;
      } else {
        state.favJobs.currentJobs = currentJobs;
      }
    },
  },
});

export const { setCurrentPage, setCurrentJobs } = paginationSlice.actions;

export default paginationSlice.reducer;
