import React from 'react';
import MovieScroller from './components/MainSide/Funktions/MovieScroller';
import '../src/components/MainSide/MainLayout.css';

function MainLayout() {
    const movieImages = [
        '../public/movies/Barbie.jpg',
        '../public/movies/LionKing.jpg',
        '../public/movies/MegaTrench2.jpg',
        '../public/movies/Oppenheimer.jpg',
        '../public/movies/PastLives.jpg',
        // Add more image URLs as needed
    ];

    return (
        <div className="main-layout">
            <div className="content">
                <div className="movie-scroller-container">
                    <MovieScroller movieImages={movieImages.slice(0, 3)} />
                </div>
                <div className="image-grid">
                    {movieImages.map((image, index) => (
                        <div key={index} className={`image-item ${index < 2 ? 'movie-image' : ''}`}>
                            <img src={image} alt={`Movie ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

}

export default MainLayout;
