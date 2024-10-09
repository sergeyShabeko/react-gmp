import React from "react";
import "./movie-detail.css";

export default function MovieDetails(props) {
  const { imageUrl, name, releaseYear, genres, description, rating, duration } =
    props.movie;

  return (
    <div className="detail-container">
      <img src={imageUrl} alt={name} />
      <div className="description-details">
        <div className="title-rating">
          <h2>{name}</h2>
          <div>{rating}</div>
        </div>
        <p className="genres">{genres.join(" & ")}</p>
        <div>
          <span>{releaseYear}</span>
          <span>{duration}</span>
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}
