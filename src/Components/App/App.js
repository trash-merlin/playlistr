import React from 'react';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import './App.css';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      searchResults: [
        {name:"Pay your way in pain", artist:"St. Vincent", album:"Daddys Home", id:"1"},
        {name:"My future", artist:"Billie Eilish", album:"Happier than ever", id:"2"},
        {name:"Great no one", artist:"The Beths", album:"Future me hates me", id:"3"}
      ]
    }

    
    }

  render() {
    return (
      <div className="App">
        <h1>play<span className="highlight">List</span>r</h1>
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist />
          
        </div>
      </div>
    );
  }
}

export default App;
