import React from "react";
import styles from "./FavJobCard.module.scss";
import { AddButton, DetailsButton, RemoveButton, CheckedIcon } from "../";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const FavJobCardUI = ({ job, isInFavourites, isTabletOrMobile }) => {
  /*DYNAMIC BUTTONS STYLES*/

  const favBtnStyle = {
    borderRadius: "0 0 16px 0",
    padding: isTabletOrMobile ? "1rem 0.5rem" : "1rem 0.8rem",
    width: "100%",
  };

  const viewBtnStyle = {
    borderRadius: "0 16px 0 0",
    padding: isTabletOrMobile ? "1rem 0.5rem" : "0.8rem",
    width: "100%",
  };

  return (
    <AnimationOnScroll
      className={styles.animated_div}
      animateOnce={true}
      offset={700}
      animateIn="animate__fadeIn"
    >
      <div className={styles.fav_job_card}>
        <img
          src={job.company_logo}
          alt="company-logo"
          className={styles.fav_job_card_logo}
        />
        <div className={styles.fav_job_card_info}>
          <h5 className={styles.fav_job_card_info_title}>{job.title}</h5>

          <div className={styles.fav_job_card_info_company}>
            {job.company_name}
          </div>
        </div>
        <div className={styles.fav_job_card_btn_group}>
          <DetailsButton isLarge={false} jobId={job.id} style={viewBtnStyle} />
          {isInFavourites ? (
            <RemoveButton isLarge={false} job={job} style={favBtnStyle} />
          ) : (
            <AddButton isLarge={false} favouriteJob={job} style={favBtnStyle} />
          )}
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default FavJobCardUI;
