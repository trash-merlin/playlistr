import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>play<span className="highlight">List</span>r</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults />
        </div>
      </div>
    </div>
  );
}

export default App;
