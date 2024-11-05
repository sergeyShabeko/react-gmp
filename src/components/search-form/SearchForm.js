import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./search-form.css";

export default function SearchForm({ initialQuery, onSearch }) {
  const [newQuery, setNewQuery] = useState(initialQuery);

  return (
    <>
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          onSearch(newQuery, e);
        }}
        data-testid="search-form"
      >
        <input
          type="text"
          placeholder="What do you want to watch?"
          value={newQuery}
          onChange={(e) => setNewQuery(e.target.value)}
        />
        <button type="submit">SEARCH</button>
      </form>
      <Outlet />
    </>
  );
}
