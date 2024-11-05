import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./movie-form.css";

const genres = ["Documentary", "Comedy", "Horror", "Crime"];

export default function MovieForm({ movie, onSubmit }) {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const [startDate, setStartDate] = useState(
    new Date(movie.release_date || "1970, 1, 1")
  );

  const selectedGenres = useWatch({
    control,
    name: "genres",
    defaultValue: movie.genres || []
  });

  const onSubmitForm = (data) => {
    const selectedGenresArray = genres.filter((genre, index) => selectedGenres[index]);
    onSubmit({ ...data, genres: selectedGenresArray, release_date: startDate});
  };

  const handleGenreButtonClick = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div className="form-controls">
        <div>
          <label className="form-label" htmlFor="title">TITLE</label>
          <input
            className="form-input"
            type="text"
            id="title"
            name="title"
            defaultValue={movie.title}
            {...register("title", { required: true })}
          />
          {errors.title && <span>This field is required</span>}
          <label className="form-label" htmlFor="poster_path">MOVIE URL</label>
          <input
            className="form-input"
            type="text"
            id="poster_path"
            name="poster_path"
            defaultValue={movie.poster_path}
            {...register("poster_path", { required: true, pattern: {
              value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
              message: "Invalid URL"
            } })}
          />
          {errors.poster_path && <span>This field is required</span>}
          <label className="form-label" htmlFor="genre-select">GENRE</label>
          <div>
            <div className="select-box">
              <button id="genre-select" className="select-box-button" onClick={handleGenreButtonClick}>Select Genre</button>
              <div className="select-box-options">
              {genres.map((genre, ind) => (
                  <div key={ind} className="select-box-option">
                    <input
                      type="checkbox"
                      id={genre}
                      name={`genres[${ind}]`}
                      value={genre}
                      defaultChecked={movie.genres?.includes(genre)}
                      {...register(`genres[${ind}]`)}
                    />
                    <label htmlFor={genre}>{genre}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <label className="form-label" htmlFor="date-picker">RELEASE DATE</label>
          <DatePicker
            id="date-picker"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <label className="form-label" htmlFor="vote_average">RATING</label>
          <input
            className="form-second-input"
            type="number"
            id="vote_average"
            name="vote_average"
            defaultValue={movie.vote_average}
            {...register("vote_average", { required: true, valueAsNumber: true  })}
          />
          {errors.vote_average && <span>This field is required</span>}
          <label className="form-label" htmlFor="runtime">RUNTIME</label>
          <input
            className="form-second-input"
            type="number"
            id="runtime"
            name="runtime"
            defaultValue={movie.runtime}
            {...register("runtime", { required: true, valueAsNumber: true  })}
          />
          {errors.runtime && <span>This field is required</span>}
        </div>
      </div>
      <div className="overview-control">
        <label htmlFor="overview">OVERVIEW</label>
        <textarea
          id="overview"
          className="form-overview"
          name="overview"
          rows="7"
          cols="50"
          defaultValue={movie.overview}
          {...register("overview", { required: true })}
        />
        {errors.overview && <span>This field is required</span>}
      </div>
      <div className="submission-buttons">
        <button className="reset-button" type="reset">RESET</button>
        <button className="submit-button" type="submit">SUBMIT</button>
      </div>
    </form>
  );
}
