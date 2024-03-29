import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const GlobalWrapper = ({ children }) => {
  const location = useLocation();

  /* SEARCH JOBS GRID COORDINATE FROM TOP */
  const searchGridCoords = useSelector(
    (state) => state.coordinates.searchJobsGridCoords
  );

  /* FAVOURITE JOBS GRID COORDINATE FROM TOP */
  const favGridCoords = useSelector(
    (state) => state.coordinates.favJobsGridCoords
  );

  /* SEARCH JOBS VIEW CURRENT PAGE */
  const searchCurrentPage = useSelector(
    (state) => state.pagination.searchJobs.currentPage
  );

  /* FAVOURITE JOBS VIEW CURRENT PAGE */
  const favCurrentPage = useSelector(
    (state) => state.pagination.favJobs.currentPage
  );

  /*SCROLL TO THE WINDOW TOP WHEN ROUTE IS CHANGED*/
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  /*SCROLL TO THE SEARCH JOBS GRID TOP WHEN SEARCH JOBS CURRENT PAGE IS CHANGED*/
  useEffect(() => {
    window.scrollTo({ top: searchGridCoords + 10, behavior: "smooth" });
  }, [searchCurrentPage]);

  /*SCROLL TO THE FAVOURITE JOBS GRID TOP WHEN SEARCH JOBS CURRENT PAGE IS CHANGED*/
  useEffect(() => {
    window.scrollTo({ top: favGridCoords, behavior: "smooth" });
  }, [favCurrentPage]);

  return children;
};

export default GlobalWrapper;
