import React from "react";
import { useSelector } from "react-redux";
import SearchTagsUI from "./SearchTagsUI";

const SearchTags = () => {
  let queryParams = useSelector((state) => state.queryParams);

  return <SearchTagsUI queryParams={queryParams} />;
};

export default SearchTags;
