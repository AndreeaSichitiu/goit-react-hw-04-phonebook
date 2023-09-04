import React from 'react';
import style from "./Filter.module.css"
import PropTypes from 'prop-types';

export default function Filter({ filter, handleChange }) {
  return (
    <div className={style.filterWrapper}>
      <label className={style.filterLabel}>Find contacts by name</label>
      <input
      className={style.filterInput}
        type="text"
        name="filter"
        placeholder="Enter contact to search"
        value={filter}
        onChange={handleChange}
      ></input>
    </div>
  );
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
  };