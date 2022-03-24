import React from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./SearchJobs.module.scss";

import {
  Pagination,
  JobCard,
  SearchForm,
  Loader,
  Message,
  SearchTags,
} from "../../components";

const SearchJobsUI = ({ fetchState, currentJobs, jobsPerPage, searchGrid }) => {
  const { error, isLoading, isSuccess, data, isFetching } = fetchState;

  const jobsList = isSuccess && data.jobs ? data.jobs : [];

  return (
    <div className={styles.search_jobs_page}>
      <SearchForm />
      {(isLoading || isFetching) && <Loader isDarkBg={false} />}

      {isLoading === false && isFetching === false && <SearchTags />}

      {isSuccess && jobsList.length === 0 && isFetching === false && (
        <Message type="info" message="Sorry: job offers not found" />
      )}

      {error && isFetching === false && (
        <Message type="error" message={`${error.status}: ${error.error}`} />
      )}

      {jobsList.length > 0 && isFetching === false && (
        <div className={styles.success_container}>
          <div className={styles.jobs_grid} ref={searchGrid}>
            {currentJobs?.map((job) => (
              <JobCard key={uuidv4()} job={job} />
            ))}
          </div>
          {jobsList.length > jobsPerPage && (
            <Pagination jobsList={jobsList} isSearchJobs={true} />
          )}
        </div>
      )}
    </div>
  );
};

export default SearchJobsUI;
