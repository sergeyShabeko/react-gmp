import React from "react";
import "./sort-control.css";

export default function SortControl({ currentSelection, onSelectionChange }) {
  return (
    <div className="sort-control">
      <label htmlFor="sort-by">SORT BY</label>
      <select
        id="sort-by"
        value={currentSelection}
        onChange={(e) => onSelectionChange(e.target.value)}
      >
        <option value="releaseDate">Release Date</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
}
