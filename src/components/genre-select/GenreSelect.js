import React, { useState } from "react";
import "./genre-select.css";
import PropTypes from "prop-types";

export default function GenreSelect({ genres, selectedGenre, onSelect }) {
  const [currentGenre, setCurrentGenre] = useState(selectedGenre);
  return (
    <div className="genre-menu" data-testid="genre-select">
      {genres.map((genre, ind) => (
        <button
          key={ind}
          onClick={() => {
            setCurrentGenre(genre);
            onSelect(genre);
          }}
          className={genre === currentGenre ? "active" : ""}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

GenreSelect.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string),
  selectedGenre: PropTypes.string,
  onSelect: PropTypes.func,
};

GenreSelect.defaultProps = {
  selectedGenre: "ALL",
};
