import React, { useEffect, useRef } from 'react';
import './MovieScroller.css';

function MovieScroller({ movieImages }) {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const images = container.querySelectorAll('.movie-image');
        const totalImages = images.length;
        let currentIndex = 0;

        const rotateImages = () => {
            currentIndex = (currentIndex + 1) % totalImages;

            images.forEach((image, index) => {
                const rotationAngle = (index - currentIndex) * (360 / totalImages);
                image.style.transform = `rotateY(${rotationAngle}deg) translateZ(300px)`;
            });
        };

        const rotateInterval = setInterval(rotateImages, 11000); // Adjust the interval as needed

        return () => {
            clearInterval(rotateInterval);
        };
    }, []);

    return (
        <div className="movie-scroller" ref={containerRef}>
            <div className="image-list">
                {movieImages.map((image, index) => (
                    <div key={index} className="movie-image">
                        <img src={image} alt={`Movie ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieScroller;
