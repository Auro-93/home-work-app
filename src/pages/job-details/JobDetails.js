import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import JobDetailsUI from "./JobDetailsUI";
import { useGetFilteredJobsQuery } from "../../services/jobsApi";

const JobDetails = () => {
  /*JOB DATA */
  const [job, setJob] = useState(null);
  /*TO CHECK IF A JOB CATEGORY IS IN YOUR SKILLS*/
  const [isYourSkill, setIsYourSkill] = useState(false);

  /*GET JOB ID FROM URL PARAMS*/
  const { id } = useParams();

  /*QUERY PARAMS: SEARCH TERM AND CATEGORY */
  const queryParams = useSelector((state) => state.queryParams);
  /*LIST OF YOUR SKILLS SAVED IN STATE AND LOCAL STORAGE */
  const yourSkills = useSelector((state) => state.skills.skills);

  /*GET FILTERED JOBS (DEPENDING ON SEARCH QUERIES) FROM API USING RTK QUERY */
  const { data, error, isLoading, isSuccess } =
    useGetFilteredJobsQuery(queryParams);

  const fetchState = { error, isLoading };

  useEffect(() => {
    /*SET JOB DATA AND ISYOURSKILL BOOLEAN */
    console.log(data);
    if (isSuccess && data) {
      const jobs = data.jobs;
      if (jobs) {
        const jobObj = jobs.find((job) => job.id == id);

        const foundSkill = yourSkills.find(
          (skill) => skill.name === jobObj.category
        );

        setJob(jobObj);
        setIsYourSkill(foundSkill);
      }
    }
  }, [id, data]);

  return (
    <JobDetailsUI job={job} fetchState={fetchState} isYourSkill={isYourSkill} />
  );
};

export default JobDetails;
