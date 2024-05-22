import React from 'react';
import './App.css';
import GamesListing from './GamesListing';

const games = [
  { name: "The Witcher 3", image: "pc-games-webseite\public\Bilder\TheWitcher3.webp", price: "29,99" },
  { name: "Cyberpunk 2077", image: "pc-games-webseite\public\Bilder\CyberPunk2077.jpg", price: "59,99" },
  { name: "Red Dead Redemption 2", image: "https://example.com/images/red-dead-redemption-2.jpg", price: "49,99" },
  { name: "Assassin's Creed Valhalla", image: "https://example.com/images/assassins-creed-valhalla.jpg", price: "39,99" },
  { name: "Doom Eternal", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.playstation.com%2Fde-de%2Fgames%2Fdoom-eternal%2F&psig=AOvVaw0wbxeA4R288PbvX82cOURy&ust=1716483157658000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICvkZncoYYDFQAAAAAdAAAAABAE", price: "19,99" },
  { name: "Halo Infinite", image: "https://example.com/images/halo-infinite.jpg", price: "59,99" },
  { name: "FIFA 22", image: "https://example.com/images/fifa-22.jpg", price: "49,99" },
  { name: "Minecraft", image: "https://example.com/images/minecraft.jpg", price: "26,95" },
  { name: "Fortnite", image: "https://example.com/images/fortnite.jpg", price: "0,00" },
  { name: "Apex Legends", image: "https://example.com/images/apex-legends.jpg", price: "0,00" },
];

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
