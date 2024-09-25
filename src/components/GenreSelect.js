import React, { useState } from "react";

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
