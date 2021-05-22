import React from 'react';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <h1>play<span className="highlight">List</span>r</h1>
          <SearchBar />
          <div className="App-playlist">
            <SearchResults />
            <Playlist />
          
        </div>
      </div>
    );
  }
}

export default App;
