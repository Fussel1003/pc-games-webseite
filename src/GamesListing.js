import React from 'react';
import './GamesListing.css';

const GamesListing = ({ name, image }) => {
  return (
    <div className="game-listing">
      <img src={image} alt={name} className="game-image" />
      <h2 className="game-name">{name}</h2>
    </div>
  );
};

export default GamesListing;
