import React, { useState } from "react";
import "./movie-tile.css";

export default function MovieTile({ movie, onClick }) {
  const { imageUrl, name, releaseYear, genres } = movie;
  const [showContextMenu, setShowContextMenu] = useState(false);

  function handleContextMenu(e) {
    e.stopPropagation();
    setShowContextMenu(!showContextMenu);
  }

  return (
    <div className="movie-tile" onClick={() => onClick(movie)}>
      <img src={imageUrl} alt={name} />
      <div className="movie-info">
        <div>
          <p>{name}</p>
          <p>{genres.join(", ")}</p>
        </div>
        <div className="movie-info-year">{releaseYear}</div>
        <div className="context-menu">
          <button className="context-menu-button" onClick={handleContextMenu}>
            ⋮
          </button>
          {showContextMenu && (
            <div className="context-menu-popup">
              <button
                className="context-menu-popup-close"
                onClick={handleContextMenu}
              >
                X
              </button>
              <button className="context-menu-popup-button">Edit</button>
              <button className="context-menu-popup-button">Delete</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
