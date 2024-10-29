import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "./MovieDetails";

export default function MovieDetailsWrapper() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [movieId]);

  return movie ? <MovieDetails movie={movie} /> : <p>Loading...</p>;
}
