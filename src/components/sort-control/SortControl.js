import React from "react";
import "./sort-control.css";

export default function SortControl({ sortCriterion, onSelectionChange }) {
  return (
    <div className="sort-control">
      <label htmlFor="sort-by">SORT BY</label>
      <select
        id="sort-by"
        value={sortCriterion}
        onChange={(e) => onSelectionChange(e.target.value)}
      >
        <option value="release_date">Release Date</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
}
