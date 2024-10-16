import React, { useState } from "react";
import SearchForm from "../search-form/SearchForm";
import GenreSelect from "../genre-select/GenreSelect";
import MovieTile from "../movie-tile/MovieTile";
import MovieDetails from "../movie-details/MovieDetails";
import SortControl from "../sort-control/SortControl";
import Dialog from "../dialog/Dialog";
import MovieForm from "../movie-form/MovieForm";
import "./MovieListPage.css";

const movies = [
  {
    imageUrl:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/84934543-5991-4c93-97eb-beb6186a3ad7/600x900",
    name: "Joker",
    releaseYear: 2019,
    genres: ["Horror", "Crime"],
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    rating: "8.9",
    duration: "2h 15min",
  },
  {
    imageUrl:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/c11652e8-653b-47c1-8e72-1552399a775b/600x900",
    name: "The Godfather",
    releaseYear: 1972,
    genres: ["Crime"],
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    rating: "9.2",
    duration: "1h 55min",
  },
];

const deleteMessage = (
  <div className="delete-message">
    <p>Are you sure you want to delete this movie?</p>
    <button>CONFIRM</button>
  </div>
);

export default function MovieListPage() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sortCriterion, setSortCriterion] = useState(false);
  const [searchQuery, setSearchQuery] = useState(null);
  const [activeGenre, setActiveGenre] = useState(null);
  const [movieList, setMovieList] = useState([]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editedMovie, setEditedMovie] = useState({});
  const [dialogTitle, setDialogTitle] = useState("");

  const onSearch = (description, e) => {
    e.preventDefault();
    console.log(description);
  };

  const onSelect = (genreName) => {
    console.log(genreName);
  };

  const onMovieTileClicked = (movieName) => {
    setSelectedMovie(movieName);
  };

  const onSelectionChange = (value) => {
    setSortCriterion(value);
  };

  const addMovie = () => {
    setIsDialogOpen(true);
    setDialogTitle("ADD MOVIE");
    setEditedMovie({});
  };

  const onCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const editMovie = (movie) => {
    setIsDialogOpen(true);
    setDialogTitle("EDIT MOVIE");
    setEditedMovie(movie);
  };

  const deleteMovie = (movie) => {
    setIsDialogOpen(true);
    setDialogTitle("DELETE MOVIE");
    setEditedMovie();
  };

  const onSaveMovie = (movie) => {};
  return (
    <>
      <div className="header-container">
        <p>
          <span>
            <strong>netflix</strong>
          </span>
          roulette
        </p>
        <button onClick={addMovie}>+ Add movie</button>
      </div>
      <h2>FIND YOUR MOVIE</h2>
      <SearchForm initialQuery="Initial Query" onSearch={onSearch} />
      <div className="nav-container">
        <GenreSelect
          onSelect={onSelect}
          genres={["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"]}
          selectedGenre="COMEDY"
        />
        <SortControl
          sortCriterion={sortCriterion}
          onSelectionChange={onSelectionChange}
        />
      </div>
      <p className="films-count">
        <span>
          <strong>39&nbsp;</strong>
        </span>
        movies found
      </p>
      {selectedMovie && <MovieDetails movie={selectedMovie} />}
      <div className="movie-container">
        {movies.map((movie, ind) => (
          <MovieTile
            key={ind}
            movie={movie}
            onClick={onMovieTileClicked}
            editMovie={editMovie}
            deleteMovie={deleteMovie}
          />
        ))}
      </div>
      <footer>
        <p>
          <span>
            <strong>netflix</strong>
          </span>
          roulette
        </p>
      </footer>
      {isDialogOpen &&
        (editedMovie ? (
          <Dialog
            title={dialogTitle}
            children={<MovieForm movie={editedMovie} onSubmit={onSaveMovie} />}
            onCloseDialog={onCloseDialog}
          />
        ) : (
          <Dialog
            title={dialogTitle}
            children={deleteMessage}
            onCloseDialog={onCloseDialog}
          />
        ))}
    </>
  );
}
