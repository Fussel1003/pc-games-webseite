// src/GamesListing.js
import React, { useState, useEffect } from 'react';
import './GamesListing.css';

const GamesListing = ({ name, image, price }) => {
  const [timer, setTimer] = useState(Math.floor(Math.random() * 31) + 30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="game-listing">
      <img src={image} alt={name} className="game-image" style={{width:"100%",hight:"auto"}} />
      <h2 className="game-name">{name}</h2>
      <p className="game-price">{price} €</p>
      <p className="game-timer">Verfügbar für: {timer} Sekunden</p>
      <button className="buy-button">In den Warenkorb</button>
    </div>
  );
};

export default GamesListing;
