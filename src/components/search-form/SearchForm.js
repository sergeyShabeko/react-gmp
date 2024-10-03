import React, { useState } from "react";
import "./search-form.css";
import PropTypes from "prop-types";

export default function SearchForm({ initialQuery, onSearch }) {
  const [description, setDescription] = useState(initialQuery);

  return (
    <form
      className="search-form"
      onSubmit={(e) => onSearch(description, e)}
      data-testid="search-form"
    >
      <input
        type="text"
        placeholder="What do you want to watch?"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>SEARCH</button>
    </form>
  );
}

SearchForm.propTypes = {
  initialQuery: PropTypes.string,
  onSearch: PropTypes.func,
};

SearchForm.defaultProps = {
  initialQuery: "Initial Query",
};
