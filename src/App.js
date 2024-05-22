import React from 'react';
import './App.css';
import GamesListing from './GamesListing';

function App() {
  return (
    <div className="App">
      <h1>PC Games Webseite</h1>
      <GamesListing name="Game Title 1" image="https://via.placeholder.com/150" />
      <GamesListing name="Game Title 2" image="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
