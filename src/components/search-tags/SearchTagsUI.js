import React from "react";
import styles from "./SearchTags.module.scss";

const SearchTagsUI = ({ queryParams }) => {
  let { searchTerm, category } = queryParams;
  searchTerm = searchTerm ? `Keyword : ${searchTerm}` : `Keyword : " "`;
  category = category ? `Category : ${category}` : "Category : All";

  return (
    <div className={styles.search_tags}>
      <div className={styles.search_tags_category_tag}>{category}</div>
      <div className={styles.search_tags_keyword_tag}>{searchTerm}</div>
    </div>
  );
};

export default SearchTagsUI;
