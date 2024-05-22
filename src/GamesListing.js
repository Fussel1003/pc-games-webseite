import React from 'react';
import './GamesListing.css';

const GamesListing = ({ name, image, price }) => {
  return (
    <div className="game-listing">
      <img src={image} alt={name} className="game-image" />
      <h2 className="game-name">{name}</h2>
      <p className="game-price">{price} €</p>
      <button className="buy-button">In den Warenkorb</button>
    </div>
  );
};

export default GamesListing;
