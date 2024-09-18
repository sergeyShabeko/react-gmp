import "./App.css";
import Counter from "./components/Counter";
import SearchForm from "./components/SearchForm";
import GenreSelect from "./components/GenreSelect";

function App() {
  function onSearch(description, e) {
    e.preventDefault();
    console.log(description);
  }

  function onSelect(genreName) {
    console.log(genreName);
  }

  return (
    <div className="App">
      <Counter initialValue={0} />
      <SearchForm initialQuery="Initial Query" onSearch={onSearch} />
      <GenreSelect
        onSelect={onSelect}
        genres={["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"]}
        selectedGenre="COMEDY"
      />
    </div>
  );
}

export default App;
