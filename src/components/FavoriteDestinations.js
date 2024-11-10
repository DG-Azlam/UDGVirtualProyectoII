import React from 'react';
//import '../App.css';

function FavoriteDestinations({ destinations }) {
  return (
    <div className="favorite-destinations container">
      <h3>Destinos Favoritos</h3>
      <ul>
        {destinations.map((destination) => (
          <li key={destination.id}>{destination.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteDestinations;
