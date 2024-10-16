import React, { useState } from "react";
import "./search-form.css";

export default function SearchForm({ initialQuery, onSearch }) {
  const [newQuery, setNewQuery] = useState(initialQuery);

  return (
    <form
      className="search-form"
      onSubmit={(e) => onSearch(newQuery, e)}
      data-testid="search-form"
    >
      <input
        type="text"
        placeholder="What do you want to watch?"
        value={newQuery}
        onChange={(e) => setNewQuery(e.target.value)}
      />
      <button>SEARCH</button>
    </form>
  );
}
