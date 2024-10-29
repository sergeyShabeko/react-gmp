import React from "react";
import "./App.css";
import MovieListPage from "./components/movie-list-page/MovieListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchForm from "./components/search-form/SearchForm";
import MovieDetailsWrapper from "./components/movie-details/MovieDetailsWrapper";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieListPage />}>
          <Route index element={<SearchForm />} />
          <Route path=":movieId" element={<MovieDetailsWrapper />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
