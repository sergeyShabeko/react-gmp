import React, { useEffect, useState } from "react";
import SearchForm from "../search-form/SearchForm";
import GenreSelect from "../genre-select/GenreSelect";
import MovieTile from "../movie-tile/MovieTile";
import MovieDetails from "../movie-details/MovieDetails";
import SortControl from "../sort-control/SortControl";
import Dialog from "../dialog/Dialog";
import MovieForm from "../movie-form/MovieForm";
import "./MovieListPage.css";

const deleteMessage = (
  <div className="delete-message">
    <p>Are you sure you want to delete this movie?</p>
    <button>CONFIRM</button>
  </div>
);

export default function MovieListPage() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sortCriterion, setSortCriterion] = useState("release_date");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeGenre, setActiveGenre] = useState("ALL");
  const [movieList, setMovieList] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editedMovie, setEditedMovie] = useState({});
  const [dialogTitle, setDialogTitle] = useState("");

  const url = `http://localhost:4000/movies?limit=100&search=${searchQuery}&filter=${
    activeGenre === "ALL" ? "" : activeGenre
  }&searchBy=title&sortBy=${sortCriterion}&sortOrder=asc`;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(url, { signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch.");
        }
        return response.json();
      })
      .then((data) => {
        setMovieList(data.data);
      })
      .catch((error) => {
        console.error(error);
      });

    return () => {
      controller.abort();
    };
  }, [sortCriterion, searchQuery, activeGenre]);

  const onSearch = (newQuery, e) => {
    e.preventDefault();
    setSearchQuery(newQuery);
  };

  const onSelectGenre = (genreName) => {
    setActiveGenre(genreName);
  };

  const onMovieTileClicked = (movieName) => {
    setSelectedMovie(movieName);
  };

  const onSortingChange = (value) => {
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

  const closeDetailPage = () => {
    setSelectedMovie(null);
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
        {!selectedMovie && <button onClick={addMovie}>+ Add movie</button>}
        {selectedMovie && (
          <button className="lupa" onClick={closeDetailPage}>
            🔍
          </button>
        )}
      </div>
      {!selectedMovie && <h2>FIND YOUR MOVIE</h2>}
      {!selectedMovie && (
        <SearchForm initialQuery={searchQuery} onSearch={onSearch} />
      )}
      {selectedMovie && <MovieDetails movie={selectedMovie} />}
      <div className="nav-container">
        <GenreSelect
          onSelect={onSelectGenre}
          genres={["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"]}
          selectedGenre={activeGenre}
        />
        <SortControl
          searchQuery={searchQuery}
          sortCriterion={sortCriterion}
          onSelectionChange={onSortingChange}
        />
      </div>
      <p className="films-count">
        <span>
          <strong>{movieList.length}&nbsp;</strong>
        </span>
        movies found
      </p>
      <div className="movie-container">
        {movieList.map((movie) => (
          <MovieTile
            key={movie.id}
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
