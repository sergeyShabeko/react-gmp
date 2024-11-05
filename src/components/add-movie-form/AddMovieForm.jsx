import React from "react";
import { useNavigate } from "react-router-dom";
import Dialog from "../dialog/Dialog"
import MovieForm from "../movie-form/MovieForm";

export default function AddMovieForm() {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    
    try {
      const response = await fetch("http://localhost:4000/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      
      navigate(`/${result.id}`);
    } catch (error) {
      console.error("Error adding movie:", error);
    }
  };

  const onClose = () => {
    navigate(`/`);
  }

  return (
    <Dialog title="Add Movie" onCloseDialog={onClose}>
      <MovieForm movie={{}} onSubmit={handleSubmit} />
    </Dialog>
  );
}