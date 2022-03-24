import React from "react";
import styles from "./SearchForm.module.scss";
import Select from "react-select";

const SearchFormUI = ({
  selectOptions,
  handleChangeSearch,
  handleChangeCategory,
  handleSubmit,
  inputValues,
  isDesktopOrLaptop,
}) => {
  const { category, searchTerm } = inputValues;

  return (
    <header className={styles.search_form_container}>
      <div className={styles.search_form_layer}>
        <form>
          <Select
            className={styles.select}
            options={selectOptions}
            placeholder="Category..."
            name="category"
            value={category}
            onChange={handleChangeCategory}
          />

          <input
            type="search"
            placeholder="Job keyword..."
            className={styles.search}
            name="searchTerm"
            value={searchTerm}
            onChange={handleChangeSearch}
          />

          <button
            style={{ display: isDesktopOrLaptop ? "block" : "none" }}
            className={styles.btn_submit}
            type="submit"
            onClick={handleSubmit}
          >
            SEARCH
          </button>
        </form>
      </div>
    </header>
  );
};

export default SearchFormUI;
