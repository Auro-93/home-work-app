import React from "react";
import SkillsUI from "./SkillsUI";
import { useGetJobsCategoriesQuery } from "../../services/jobsApi";

const Skills = () => {
  /*GET JOB CATEGORIES LIST FROM API USING RTK QUERY */
  const { data, isLoading, error, isSuccess } = useGetJobsCategoriesQuery();

  const fetchState = { data, isLoading, error, isSuccess };

  return <SkillsUI fetchState={fetchState} />;
};

export default Skills;
