import React, { useState } from "react";
import "./movie-form.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const genres = ["Documentary", "Comedy", "Horror", "Crime"];

export default function MovieForm({ movie, onSubmit }) {
  const [startDate, setStartDate] = useState(
    new Date(movie.releaseYear || 1970, 1, 1)
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    console.log("Form Data:", formData);
    onSubmit(formData);
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <div className="form-comtrols">
        <div>
          <label className="form-label" htmlFor="title">
            TITLE
          </label>
          <input
            className="form-input"
            type="text"
            id="title"
            name="title"
            value={movie.name}
          />
          <label className="form-label" htmlFor="movieURL">
            MOVIE URL
          </label>
          <input
            className="form-input"
            type="text"
            id="movieURL"
            name="movieURL"
            value={movie.imageUrl}
          />
          <label className="form-label" htmlFor="genre-select">
            GENRE
          </label>
          <div>
            <div className="select-box">
              <button id="genre-select" className="select-box-button">
                Select Genre
              </button>
              <div className="select-box-options">
                {genres.map((genre, ind) => (
                  <div key={ind} className="select-box-option">
                    <input
                      type="checkbox"
                      id={genre}
                      name="genres"
                      value={genre}
                      defaultChecked={movie.genres?.includes(genre)}
                    />
                    <label htmlFor={genre}>{genre}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <label className="form-label" htmlFor="date-picker">
            RELEASE DATE
          </label>
          <DatePicker
            id="date-picker"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <label className="form-label" htmlFor="rating">
            RATING
          </label>
          <input
            className="form-second-input"
            type="text"
            id="rating"
            name="rating"
            value={movie.rating}
          />
          <label className="form-label" htmlFor="runtime">
            RUNTIME
          </label>
          <input
            className="form-second-input"
            type="text"
            id="runtime"
            name="runtime"
            value={movie.duration}
          />
        </div>
      </div>
      <div className="overview-control">
        <label htmlFor="description">OVERVIEW</label>
        <textarea
          id="description"
          className="form-overview"
          name="description"
          rows="7"
          cols="50"
        >
          {movie.description}
        </textarea>
      </div>
      <div className="submition-buttons">
        <button className="reset-button" type="reset">
          RESET
        </button>
        <button className="submit-button" type="submit">
          SUBMIT
        </button>
      </div>
    </form>
  );
}
