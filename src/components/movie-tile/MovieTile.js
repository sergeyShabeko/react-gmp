import React, { useState } from "react";
import "./movie-tile.css";

export default function MovieTile({ movie, onClick, editMovie, deleteMovie }) {
  const { poster_path, title, release_date, genres } = movie;
  const [showContextMenu, setShowContextMenu] = useState(false);

  function handleContextMenu(e) {
    e.stopPropagation();
    setShowContextMenu(!showContextMenu);
  }

  function onEditClicked(e) {
    e.stopPropagation();
    editMovie(movie);
    setShowContextMenu(false);
  }

  function onDeleteClicked(e) {
    e.stopPropagation();
    deleteMovie();
    setShowContextMenu(false);
  }

  return (
    <div className="movie-tile" onClick={() => onClick(movie)}>
      <img src={poster_path} alt={title} />
      <div className="movie-info">
        <div>
          <p>{title}</p>
          <p className="genres-tile">{genres.join(", ")}</p>
        </div>
        <div className="movie-info-year">
          {new Date(release_date).getFullYear()}
        </div>
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
              <button
                className="context-menu-popup-button"
                onClick={(e) => onEditClicked(e)}
              >
                Edit
              </button>
              <button
                className="context-menu-popup-button"
                onClick={(e) => onDeleteClicked(e)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
