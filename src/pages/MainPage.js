// pages/MainPage.js
import React from 'react';
import { SPD, SSD } from './data'; 
//import '../App.css'; 

function MainPage() {
    return (
        <div className="main-page">
            <h2>Destinos Patrocinados</h2>
            <div className="carousel">
                {SPD.map((destination, index) => (
                    <div key={index} className="carousel-item">
                        <img src={destination.imageUrl} alt={destination.name} />
                        <p>{destination.name}</p>
                    </div>
                ))}
            </div>

            <h2>Destinos de Temporada</h2>
            <div className="carousel">
                {SSD.map((destination, index) => (
                    <div key={index} className="carousel-item">
                        <img src={destination.imageUrl} alt={destination.name} />
                        <p>{destination.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MainPage;
