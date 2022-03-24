import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import FavouriteJobsUI from "./FavouriteJobsUI";
import { setCurrentJobs } from "../../reducers/paginationSlice";
import { setCurrentPage } from "../../reducers/paginationSlice";
import { setCoords } from "../../reducers/coordinatesSlice";

const FavouriteJobs = () => {
  /*FAVOURITES GRID DIV REF */
  const favGrid = useRef(0);

  const dispatch = useDispatch();

  /*LIST OF FAVOURITE JOBS SAVED IN STATE AND LOCAL STORAGE */
  const favJobs = useSelector((state) => state.favouriteJobs.favouriteJobs);

  /*FAVOURITE JOB OFFERS PER PAGE*/
  const jobsPerPage = useSelector(
    (state) => state.pagination.favJobs.jobsPerPage
  );

  /*CURRENT FAVOURITE JOB OFFERS DISPLAYED ON PAGE*/
  const currentJobs = useSelector(
    (state) => state.pagination.favJobs.currentJobs
  );

  useEffect(() => {
    /*MANAGE FAVOURITE JOBS PAGINATION */
    if (favJobs) {
      if (favJobs.length <= jobsPerPage) {
        dispatch(setCurrentPage({ currentPage: 1, isSearchJobs: false }));
      }
      let jobsList = favJobs.length > 0 ? favJobs : [];
      dispatch(setCurrentJobs({ jobsList: jobsList, isSearchJobs: false }));
    }
  }, [favJobs]);

  useEffect(() => {
    /*SET FAVOURITE JOBS GRID DIV COORDINATE FROM THE TOP OF THE WINDOW*/
    if (favGrid.current) {
      let distanceToTop = favGrid.current.getBoundingClientRect().top;
      dispatch(setCoords({ coords: distanceToTop, isSearchCoords: false }));
    }
  }, [favGrid.current]);

  return (
    <FavouriteJobsUI
      currentJobs={currentJobs}
      jobsPerPage={jobsPerPage}
      allJobs={favJobs}
      favGrid={favGrid}
    />
  );
};

export default FavouriteJobs;
