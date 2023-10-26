import React, { useState } from 'react';


function MovieScroller({ movieImages, movieIds }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        const prevIndex = (currentIndex - 1 + movieImages.length) % movieImages.length;
        setCurrentIndex(prevIndex);
    };

    const handleNextClick = () => {
        const nextIndex = (currentIndex + 1) % movieImages.length;
        setCurrentIndex(nextIndex);
    };

    return (
        <div className="movie-scroller-container">
            <h2 className="scroller-title">Aktuellt</h2> {/* Add your title here */}
            <div className="movie-scroller">
                <button className="prev-button" onClick={handlePrevClick}>&lt;</button>
                <div className="image-container">
                    <img
                        className="left-side-image"
                        src={movieImages[currentIndex === 0 ? movieImages.length - 1 : currentIndex - 1]}
                        alt={`Movie ${currentIndex - 1}`}
                    />
                    <a href={`/detaljsidan/${movieIds[currentIndex]}`} className="center-image-link">
                        <img
                            className="center-image"
                            src={movieImages[currentIndex]}
                            alt={`Movie ${currentIndex}`}
                        />
                    </a>
                    <img
                        className="right-side-image"
                        src={movieImages[currentIndex === movieImages.length - 1 ? 0 : currentIndex + 1]}
                        alt={`Movie ${currentIndex + 1}`}
                    />
                </div>
                <button className="next-button" onClick={handleNextClick}>&gt;</button>
            </div>
        </div>
    );
}

export default MovieScroller;
