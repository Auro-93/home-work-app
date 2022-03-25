import React from "react";
import Pagination from "react-js-pagination";
import styles from "./Pagination.module.scss";

const PaginationUI = ({
  isTabletOrMobile,
  currentPage,
  jobsPerPage,
  handlePageChange,
  jobsList,
}) => {
  return (
    <div className={styles.pagination_container}>
      <Pagination
        innerClass={styles.pagination}
        activeClass={styles.active}
        disabledClass={styles.disabled}
        activePage={currentPage}
        itemsCountPerPage={jobsPerPage}
        totalItemsCount={jobsList.length}
        pageRangeDisplayed={isTabletOrMobile ? 3 : 10}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default PaginationUI;
