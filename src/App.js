import React, { useState } from "react";
import "./App.css";
//import Counter from "./components/counter/Counter";
import SearchForm from "./components/search-form/SearchForm";
import GenreSelect from "./components/genre-select/GenreSelect";
import MovieTile from "./components/movie-tile/MovieTile";
import MovieDetails from "./components/movie-details/MovieDetails";
import SortControl from "./components/sort-control/SortControl";

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

function App() {
  const [selectedMovie, setSelectedMovie] = useState(false);
  const [currentSelection, setCurrentSelection] = useState(false);

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

  return (
    <div className="App" data-testid="app-component">
      {/* <Counter initialValue={0} /> */}
      <SearchForm initialQuery="Initial Query" onSearch={onSearch} />
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
          <MovieTile key={ind} movie={movie} onClick={onMovieTileClicked} />
        ))}
      </div>
    </div>
  );
}

export default App;
