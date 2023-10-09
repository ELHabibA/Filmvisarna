import React, { useState } from 'react';
import MovieScroller from './components/MainSide/Funktions/MovieScroller';
import { Link } from 'react-router-dom';
import '../src/sass/MainLayout.css';

function MainLayout() {
    const movieIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; // Adjust the IDs as needed

    const movieImages = [
        '../public/movies/Barbie.jpg',
        '../public/movies/GrandTourismo.jpg',
        '../public/movies/Oppenheimer.jpg',
        '../public/movies/MissionImpossible.jpg',
        '../public/movies/DieHard2.jpg',
        '../public/movies/MansomheterOve.jpg',
        '../public/movies/SawX.jpg',
        '../public/movies/RubyGill.jpg',
        '../public/movies/SuperMarioFilm.jpg',
        '../public/movies/Nun2.jpg',
        '../public/movies/Equalizer3.jpg',
        '../public/movies/MamaMu.jpg',
        '../public/movies/PastLives.jpg',
        '../public/movies/AfterEverything.jpg',
        '../public/movies/JesusRevolution.jpg',
        // Add more image URLs as needed
    ];

    const handleImageClick = (index) => {
        // Handle image click here
        const movieId = movieIds[index];
        // Redirect to the detaljsidan page with the selected movie ID
        // You can use the Link component for this purpose
    };

    return (
        <div className="main-layout">
            <div className="content">
                <div className="movie-scroller">
                    <MovieScroller
                        movieImages={movieImages.slice(0, 3)}
                        movieIds={movieIds}
                        handleImageClick={handleImageClick}
                    />
                </div>
                <div className="image-grid">
                    {movieImages.map((image, index) => (
                        <Link to={`/detaljsidan/${movieIds[index]}`} key={index}>
                            <div className={`image-item ${index < 2 ? 'movie-image' : ''}`}>
                                <img src={image} alt={`Movie ${index + 1}`} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MainLayout;
