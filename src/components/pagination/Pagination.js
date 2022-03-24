import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage, setCurrentJobs } from "../../reducers/paginationSlice";
import useMediaQueryHook from "../../hooks/useMediaQueryHook";

import PaginationUI from "./PaginationUI";

const Pagination = ({ jobsList, isSearchJobs }) => {
  const { isTabletOrMobile } = useMediaQueryHook();

  const dispatch = useDispatch();

  /*SEARCH JOBS VIEW CURRENT PAGE */

  const currentPageSearchJobs = useSelector(
    (state) => state.pagination.searchJobs.currentPage
  );

  /*FAVOURITE JOBS VIEW CURRENT PAGE */
  const currentPageFavJobs = useSelector(
    (state) => state.pagination.favJobs.currentPage
  );

  /*SEARCH JOBS VIEW JOB OFFERS PER PAGE */
  const jobsPerPageSearchJobs = useSelector(
    (state) => state.pagination.searchJobs.jobsPerPage
  );

  /*FAVOURITE JOBS VIEW JOB OFFERS PER PAGE */
  const jobsPerPageFavJobs = useSelector(
    (state) => state.pagination.favJobs.jobsPerPage
  );

  const currentPage = isSearchJobs ? currentPageSearchJobs : currentPageFavJobs;
  const jobsPerPage = isSearchJobs ? jobsPerPageSearchJobs : jobsPerPageFavJobs;

  /*MANAGE PAGINATION*/
  const handlePageChange = (pageNumber) => {
    dispatch(
      setCurrentPage({
        currentPage: pageNumber,
        isSearchJobs: isSearchJobs,
      })
    );
    dispatch(
      setCurrentJobs({
        jobsList: jobsList,
        isSearchJobs: isSearchJobs,
      })
    );
  };

  return (
    <PaginationUI
      isTabletOrMobile={isTabletOrMobile}
      currentPage={currentPage}
      jobsPerPage={jobsPerPage}
      handlePageChange={handlePageChange}
      jobsList={jobsList}
    />
  );
};

export default Pagination;
