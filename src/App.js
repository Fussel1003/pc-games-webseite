// src/App.js
import React from 'react';
import './App.css';
import GamesListing from './GamesListing';
import games from './gamesData';

function App() {
  return (
    <div className="App">
      <h1>PC Games Webseite</h1>
      <div className="games-list">
        {games.map((game, index) => (
          <GamesListing key={index} name={game.name} image={game.image} price={game.price} />
        ))}
      </div>
    </div>
  );
}

export default App;
