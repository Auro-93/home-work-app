import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { jobsApi } from "../services/jobsApi";
import queryParamsReducer from "../reducers/queryParamsSlice";
import paginationReducer from "../reducers/paginationSlice";
import favouriteJobsReducer from "../reducers/favouriteJobsSlice";
import skillsReducer from "../reducers/skillsSlice";
import mobileMenuReducer from "../reducers/mobileMenuSlice";
import coordinatesReducer from "../reducers/coordinatesSlice";

export const store = configureStore({
  reducer: {
    coordinates: coordinatesReducer,
    mobileMenu: mobileMenuReducer,
    queryParams: queryParamsReducer,
    [jobsApi.reducerPath]: jobsApi.reducer,
    favouriteJobs: favouriteJobsReducer,
    skills: skillsReducer,
    pagination: paginationReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobsApi.middleware),
});

setupListeners(store.dispatch);
