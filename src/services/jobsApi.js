import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/*CALL API USING RTK QUERY FUNCTIONALITIES */

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({ baseUrl: " https://remotive.io/api" }),
  endpoints: (builder) => ({
    getFilteredJobs: builder.query({
      query: (params) =>
        `/remote-jobs?category=${params.category}&search=${params.searchTerm}`,
    }),
    getJobsCategories: builder.query({
      query: () => "/remote-jobs/categories",
    }),
  }),
});

export const { useGetFilteredJobsQuery, useGetJobsCategoriesQuery } = jobsApi;
