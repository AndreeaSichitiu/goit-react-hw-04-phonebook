import React from 'react';
import style from "./Filter.module.css"
import PropTypes from 'prop-types';

export default function Filter({ value, onChange }) {
  return (
    <div className={style.filterWrapper}>
      <label className={style.filterLabel}>Find contacts by name</label>
      <input
      className={style.filterInput}
        type="text"
        name="filter"
        placeholder="Enter contact to search"
        value={value}
        onChange={event => onChange(event.target.value)}
      ></input>
    </div>
  );
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };