import React from "react";
import "./App.css";
import MovieListPage from "./components/movie-list-page/MovieListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchForm from "./components/search-form/SearchForm";
import MovieDetailsWrapper from "./components/movie-details/MovieDetailsWrapper";
import AddMovieForm from "./components/add-movie-form/AddMovieForm";
import EditMovieForm from "./components/edit-movie-form/EditMovieForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MovieListPage />}>
        <Route path="new" element={<AddMovieForm />} />
        <Route path=":movieId" element={<MovieDetailsWrapper />} />
        <Route path=":movieId/edit" element={<EditMovieForm />} />
      </Route>
    </Routes>
  );
}

export default App;
