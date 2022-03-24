import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeQueryParams } from "../../reducers/queryParamsSlice";
import { setCurrentPage } from "../../reducers/paginationSlice";
import SearchFormUI from "./SearchFormUI";
import { useGetJobsCategoriesQuery } from "../../services/jobsApi";
import useMediaQueryHook from "../../hooks/useMediaQueryHook";

const SearchForm = () => {
  const { isDesktopOrLaptop } = useMediaQueryHook();
  const dispatch = useDispatch();

  /*SELECT OPTIONS LIST */
  const [selectOptions, setSelectOptions] = useState([]);
  /*INPUT VALUES : SEARCH TERM AND CATEGORY */
  const [inputValues, setInputValues] = useState({
    searchTerm: "",
    category: "",
  });

  /*MANAGE SEARCH TERM CHANGING */
  const handleChangeSearch = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  /*MANAGE SELECT OPTIONS (CATEGORIES) CHANGING */
  const handleChangeCategory = (selectedOption) => {
    setInputValues({ ...inputValues, category: selectedOption });
  };

  /*ON SUBMIT: SET CURRENT SEARCH PARAMS TO QUERY THE API / RESET CURRENT PAGE TO 1 */
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeQueryParams(inputValues));
    dispatch(setCurrentPage({ currentPage: 1, isSearchJobs: true }));
  };

  /*GET JOB CATEGORIES FROM THE API USING RTK QUERY */
  const { isSuccess, data } = useGetJobsCategoriesQuery();

  useEffect(() => {
    if (isSuccess && data.jobs.length > 0) {
      const categories = data.jobs.map((cat) => {
        return { value: cat.slug, label: cat.name };
      });

      categories.unshift({ value: "", label: "All" });
      setSelectOptions(categories);
    }
  }, [isSuccess, data]);

  return (
    <SearchFormUI
      selectOptions={selectOptions}
      handleChangeSearch={handleChangeSearch}
      handleChangeCategory={handleChangeCategory}
      handleSubmit={handleSubmit}
      inputValues={inputValues}
      isDesktopOrLaptop={isDesktopOrLaptop}
    />
  );
};

export default SearchForm;
