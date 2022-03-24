import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentJobs } from "../../reducers/paginationSlice";
import { setCoords } from "../../reducers/coordinatesSlice";
import SearchJobsUI from "./SearchJobsUI";
import { useGetFilteredJobsQuery } from "../../services/jobsApi";

const SearchJobs = () => {
  /*SEARCH JOBS GRID DIV REF */
  const searchGrid = useRef(0);

  const dispatch = useDispatch();

  /*QUERY PARAMS: SEARCH TERM AND CATEGORY */
  const queryParams = useSelector((state) => state.queryParams);

  /*GET FILTERED JOBS (DEPENDING ON SEARCH QUERIES) FROM API USING RTK QUERY */
  const { data, error, isLoading, isSuccess, isFetching } =
    useGetFilteredJobsQuery(queryParams);
  const fetchState = { error, isLoading, isSuccess, data, isFetching };

  /*CURRENT SEARCH JOB OFFERS DISPLAYED ON PAGE*/
  const currentJobs = useSelector(
    (state) => state.pagination.searchJobs.currentJobs
  );

  /*SEARCH JOB OFFERS PER PAGE*/
  const jobsPerPage = useSelector(
    (state) => state.pagination.searchJobs.jobsPerPage
  );

  useEffect(() => {
    /*MANAGE SEARCH JOBS PAGINATION */
    if (isSuccess && data) {
      let jobsList = data.jobs.length > 0 ? data.jobs : [];
      dispatch(setCurrentJobs({ jobsList: jobsList, isSearchJobs: true }));
    }
  }, [data, isSuccess, dispatch]);

  useEffect(() => {
    /*SET SEARCH JOBS GRID DIV COORDINATE FROM THE TOP OF THE WINDOW*/
    if (searchGrid.current) {
      let distanceToTop = searchGrid.current.getBoundingClientRect().top;
      dispatch(setCoords({ coords: distanceToTop, isSearchCoords: true }));
    }
  }, [searchGrid.current]);

  return (
    <SearchJobsUI
      fetchState={fetchState}
      currentJobs={currentJobs}
      jobsPerPage={jobsPerPage}
      searchGrid={searchGrid}
    />
  );
};

export default SearchJobs;
