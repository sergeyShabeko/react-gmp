import React from "react";
import "./App.css";
import MovieListPage from "./components/movie-list-page/MovieListPage";

function App() {
  return (
    <div className="App" data-testid="app-component">
      <MovieListPage />
    </div>
  );
}

export default App;
