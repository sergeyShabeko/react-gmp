import React, { useState } from "react";
import "./App.css";
//import Counter from "./components/counter/Counter";
import SearchForm from "./components/search-form/SearchForm";
import GenreSelect from "./components/genre-select/GenreSelect";
import MovieTile from "./components/movie-tile/MovieTile";
import MovieDetails from "./components/movie-details/MovieDetails";
import SortControl from "./components/sort-control/SortControl";
import Dialog from "./components/dialog/Dialog";
import MovieForm from "./components/movie-form/MovieForm";

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

function App() {
  const [selectedMovie, setSelectedMovie] = useState(false);
  const [currentSelection, setCurrentSelection] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editedMovie, setEditedMovie] = useState({});
  const [dialogTitle, setDialogTitle] = useState("");

  function onSearch(description, e) {
    e.preventDefault();
    console.log(description);
  }

  function onSelect(genreName) {
    console.log(genreName);
  }

  function onMovieTileClicked(movieName) {
    setSelectedMovie(movieName);
  }

  function onSelectionChange(value) {
    setCurrentSelection(value);
  }

  function addMovie() {
    setIsDialogOpen(true);
    setDialogTitle("ADD MOVIE");
    setEditedMovie({});
  }

  function onCloseDialog() {
    setIsDialogOpen(false);
  }

  function editMovie(movie) {
    setIsDialogOpen(true);
    setDialogTitle("EDIT MOVIE");
    setEditedMovie(movie);
  }

  function deleteMovie(movie) {
    setIsDialogOpen(true);
    setDialogTitle("DELETE MOVIE");
    setEditedMovie();
  }

  function onSaveMovie(movie) {}

  return (
    <div className="App" data-testid="app-component">
      {/* <Counter initialValue={0} /> */}
      <SearchForm initialQuery="Initial Query" onSearch={onSearch} />
      <button onClick={addMovie}>Add movie</button>
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
      <div className="nav-container">
        <GenreSelect
          onSelect={onSelect}
          genres={["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"]}
          selectedGenre="COMEDY"
        />
        <SortControl
          currentSelection={currentSelection}
          onSelectionChange={onSelectionChange}
        />
      </div>
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
    </div>
  );
}

export default App;
