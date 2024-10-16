import React from "react";
import "./movie-detail.css";

export default function MovieDetails(props) {
  const {
    poster_path,
    title,
    release_date,
    genres,
    overview,
    vote_average,
    runtime,
  } = props.movie;

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return (
    <div className="detail-container">
      <img src={poster_path} alt={title} />
      <div className="description-details">
        <div className="title-rating">
          <h2>{title}</h2>
          <div>{vote_average}</div>
        </div>
        <p className="genres">{genres.join(" & ")}</p>
        <div>
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{`${hours}h ${minutes}min`}</span>
        </div>
        <p className="description">{overview}</p>
      </div>
    </div>
  );
}
