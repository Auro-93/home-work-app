import React from "react";
import { useSelector } from "react-redux";
import useCheckFavourites from "../../hooks/useCheckFavourites";
import JobCardUI from "./JobCardUI";

const JobCard = ({ job }) => {
  /*LIST OF YOUR SKILLS SAVED IN STATE AND LOCAL STORAGE */
  const yourSkills = useSelector((state) => state.skills.skills);

  /*FIND IF A JOB OFFER CATEGORY MATCHES ONE OF YOUR SKILL */
  const isYourSkill = yourSkills.find(
    (yourSkill) => yourSkill.name === job.category
  );

  /*CHECK IF A JOB OFFER IS IN YOUR FAVOURITE LIST */
  const { isInFavourites } = useCheckFavourites(job.id);

  return (
    <JobCardUI
      job={job}
      isInFavourites={isInFavourites}
      isYourSkill={isYourSkill}
    />
  );
};

export default JobCard;
