import React from "react";
import styles from "./JobCard.module.scss";
import { AddButton, DetailsButton, RemoveButton, CheckedIcon } from "../";
import TimeAgo from "timeago-react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const JobCardUI = ({ job, isInFavourites, isYourSkill }) => {
  /*MANAGE JOB LOCATION DISPLAY BASED ON THE INFO RETURNED BY THE API*/
  const displayLocation = () => {
    const location = job.candidate_required_location;
    const class_name =
      styles.job_card_info_container_salary_and_location_location;
    if (!location) {
      return <p className={class_name}>📍No location data</p>;
    } else {
      if (location === "Worldwide") {
        return <p className={class_name}>🌍 {location}</p>;
      } else {
        return <p className={class_name}>📍{location}</p>;
      }
    }
  };
  return (
    <AnimationOnScroll
      animateOnce={true}
      offset={500}
      animateIn="animate__fadeIn"
    >
      <div className={styles.job_card}>
        <div className={styles.job_card_img_container}>
          <img src={job.company_logo} alt="company-logo" />
        </div>
        <div className={styles.job_card_info_container}>
          <h4 className={styles.job_card_info_container_title}>{job.title}</h4>
          <div className={styles.job_card_info_container_category}>
            {job.category}
            {isYourSkill && <CheckedIcon isInSkillsGrid={false} />}
          </div>
          <div className={styles.job_card_info_container_salary_and_location}>
            <p
              className={
                styles.job_card_info_container_salary_and_location_salary
              }
            >
              💸{job.salary ? job.salary : "No salary data"}
            </p>
            {displayLocation()}
          </div>
          <div className={styles.job_card_info_container_pub_date}>
            <span>📅</span> <TimeAgo datetime={job.publication_date} />
          </div>
        </div>
        <div className={styles.job_card_btn_group}>
          <DetailsButton isLarge={false} jobId={job.id} />
          {isInFavourites ? (
            <RemoveButton isLarge={false} job={job} />
          ) : (
            <AddButton isLarge={false} favouriteJob={job} />
          )}
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default JobCardUI;
