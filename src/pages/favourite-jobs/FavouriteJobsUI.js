import React from "react";
import styles from "./FavouriteJobs.module.scss";
import { FavJobCard, Message, Pagination } from "../../components";

const FavouriteJobsUI = ({ currentJobs, allJobs, jobsPerPage, favGrid }) => {
  return (
    <div className={styles.fav_jobs_page}>
      <header className={styles.fav_jobs_page_header}>
        <h1 className={styles.fav_jobs_page_header_title}>YOUR JOBS LIST ✰</h1>
        {allJobs.length > 0 && (
          <p className={styles.fav_jobs_page_header_count}>
            <span>{allJobs.length}</span>
            {` ${allJobs.length === 1 ? "item" : "items"} in list`}
          </p>
        )}
      </header>

      {allJobs.length === 0 && (
        <Message type="info" message="You don't have any favorite jobs yet" />
      )}

      <div className={styles.fav_jobs_page_grid} ref={favGrid}>
        {allJobs.length > 0 &&
          currentJobs.map((job) => <FavJobCard key={job.id} job={job} />)}
      </div>
      {allJobs.length > jobsPerPage && (
        <Pagination jobsList={allJobs} isSearchJobs={false} />
      )}
    </div>
  );
};

export default FavouriteJobsUI;
