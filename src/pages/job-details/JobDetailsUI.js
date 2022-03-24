import React from "react";
import TimeAgo from "timeago-react";
import DOMPurify from "dompurify";
import styles from "./JobDetails.module.scss";
import useCheckFavourites from "../../hooks/useCheckFavourites";
import { Loader, AddButton, RemoveButton, CheckedIcon } from "../../components";

const JobDetailsUI = ({ job, fetchState, isYourSkill }) => {
  const { isLoading, error } = fetchState;
  const { isInFavourites } = useCheckFavourites(job?.id);

  /*DISPLAY JOB LOCATION DEPENDING ON API RESPONSE INFO */
  const displayLocation = () => {
    const location = job.candidate_required_location;
    if (location) {
      if (location === "Worldwide") {
        return (
          <p className={styles.job_location}>
            🌍 Location: <span>{location}</span>
          </p>
        );
      } else {
        return (
          <p className={styles.job_location}>
            📍 Location: <span>{location}</span>
          </p>
        );
      }
    } else {
      return null;
    }
  };

  /*SANITIZE JOB DESCRIPTION (RESPONSE IS IN HTML FORMAT) BEFORE INJECTING IT AS INNER HTML OF A DOM ELEMENT */
  const sanitizedDesc = () => ({
    __html: DOMPurify.sanitize(job.description),
  });

  return (
    <div className={styles.job_details_page}>
      {isLoading && <Loader isDarkBg={false} />}
      {error && <div>{error}</div>}
      {job && (
        <div className={styles.job_details_container}>
          <section className={styles.details_1}>
            <div className={styles.company_logo}>
              <img src={job.company_logo} alt="company-logo" />
            </div>

            <div className={styles.job_info}>
              <h3>{job.title.toUpperCase()}</h3>
              <div className={styles.company}>
                Company: <span>{job.company_name}</span>
              </div>
              <div className={styles.category}>
                Category:
                <div>
                  {job.category}
                  {isYourSkill && <CheckedIcon isInSkillsGrid={false} />}
                </div>
              </div>
              {job.salary && (
                <p>
                  💸 Salary: <span>{job.salary}</span>
                </p>
              )}
              {displayLocation()}
              <div className={styles.job_pub_date}>
                <span>📅 Published: </span>
                <TimeAgo datetime={job.publication_date} />
              </div>
              <div className={styles.btn_group}>
                <a
                  className={styles.btn_external_link}
                  href={job.url}
                  target="_blank"
                >
                  MORE INFO
                </a>
                {isInFavourites ? (
                  <RemoveButton isLarge={true} job={job} />
                ) : (
                  <AddButton isLarge={true} favouriteJob={job} />
                )}
              </div>
            </div>
          </section>
          <section className={styles.details_2}>
            <div
              className={styles.job_desc}
              dangerouslySetInnerHTML={sanitizedDesc()}
            />
          </section>
        </div>
      )}
    </div>
  );
};

export default JobDetailsUI;
