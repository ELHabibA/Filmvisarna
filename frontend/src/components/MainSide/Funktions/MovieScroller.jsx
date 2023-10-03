import React, { useState } from 'react';
import './MovieScroller.css';

function MovieScroller({ movieImages }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        // Handle clicking the "previous" button
        const prevIndex = (currentIndex - 1 + movieImages.length) % movieImages.length;
        setCurrentIndex(prevIndex);
    };

    const handleNextClick = () => {
        // Handle clicking the "next" button
        const nextIndex = (currentIndex + 1) % movieImages.length;
        setCurrentIndex(nextIndex);
    };

    return (
        <div className="movie-scroller">
            <button className="prev-button" onClick={handlePrevClick}>&lt;</button>
            <div className="image-container">
                <img className="left-side-image" src={movieImages[currentIndex === 0 ? movieImages.length - 1 : currentIndex - 1]} alt={`Movie ${currentIndex - 1}`} />
                <img className="center-image" src={movieImages[currentIndex]} alt={`Movie ${currentIndex}`} />
                <img className="right-side-image" src={movieImages[currentIndex === movieImages.length - 1 ? 0 : currentIndex + 1]} alt={`Movie ${currentIndex + 1}`} />
            </div>
            <button className="next-button" onClick={handleNextClick}>&gt;</button>
        </div>
    );
}

export default MovieScroller;
