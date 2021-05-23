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
      ],

      playlistName: 'Printer Jams',
      playlistTracks: [
        {name:"Pay your way in pain", artist:"St. Vincent", album:"Daddys Home", id:"1"},
        {name:"My future", artist:"Billie Eilish", album:"Happier than ever", id:"2"},
        {name:"Great no one", artist:"The Beths", album:"Future me hates me", id:"3"}
      ]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    
  }

  addTrack(track){
    let tracks = this.state.playlistTracks;
    // Checks for the track in the playlist before adding
    if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks})
  }

  removeTrack(track){
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(savedTrack => savedTrack.id !== track.id);
    this.setState({playlistTracks: tracks})
  }

  render() {
    return (
      <div className="App">
        <h1>play<span className="highlight">List</span>r</h1>
          <SearchBar />
          <div className="App-playlist">
            <SearchResults 
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist 
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
            />
          
        </div>
      </div>
    );
  }
}

export default App;
