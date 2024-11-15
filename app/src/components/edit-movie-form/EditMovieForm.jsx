import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Dialog from "../dialog/Dialog";
import MovieForm from "../movie-form/MovieForm";

export default function EditMovieForm() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie:", error));
  }, [movieId]);

  const handleSave = (updatedMovie) => {
    fetch(`http://localhost:4000/movies/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...updatedMovie, id: Number(movieId)}),
    })
      .then((response) => response.json())
      .then(() => navigate("/"))
      .catch((error) => console.error("Error updating movie:", error));
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    movie && (
      <Dialog title="Edit Movie" onCloseDialog={handleClose}>
        <MovieForm movie={movie} onSubmit={handleSave} />
      </Dialog>
    )
  );
}
