import React, { useState, useEffect } from 'react';
import MovieScroller from './components/MainSide/Funktions/MovieScroller';
import { Link } from 'react-router-dom';
import '../src/sass/MainLayout.css';
import '../src/sass/kids-container.css';
import '../src/sass/Seidag.css';
import '../src/sass/idag-container.css';


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
    // Specific IDs for "Idag" section
    const idagMovieIds = [1, 12, 7, 10];

    const [showKidsContainer, setShowKidsContainer] = useState(true);
    const [showSeIdagContainer, setShowSeIdagContainer] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        // Function to handle scroll events
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            if (currentScrollPos > prevScrollPos) {
                // Scrolling down, hide both containers
                setShowKidsContainer(false);
                setShowSeIdagContainer(false);
            } else {
                // Scrolling up, show both containers
                setShowKidsContainer(true);
                setShowSeIdagContainer(true);
            }

            // Set the previous scroll position
            setPrevScrollPos(currentScrollPos);
        };

        // Add a scroll event listener
        window.addEventListener('scroll', handleScroll);

        return () => {
            // Remove the scroll event listener on unmount
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <div className="main-layout">
            <div className="content">
                <div className="movie-scroller">
                    {showSeIdagContainer && (
                        <div className="se-idag-container">
                            <h2 className="content-title">Se Idag 15+</h2>
                            <div className="movie-info">
                                {/* Movie title and showtime for each movie */}
                                <div className="movie">
                                    <p className="showtime">Visning: 16:00</p>
                                    <h3 className="movie-title">Saw X , Sal A</h3>
                                    <h3 className="movie-title">Nun 2 , Sal B</h3>
                                </div>
                                <div className="movie">
                                    <p className="showtime">Visning: 20:00</p>
                                    <h3 className="movie-title">Saw X , Sal B</h3>
                                    <h3 className="movie-title">Nun 2 , Sal A</h3>
                                </div>
                                {/* Add more movie entries as needed */}
                            </div>
                        </div>
                    )}

                    <MovieScroller
                        movieImages={movieImages.slice(0, 5)}
                        movieIds={movieIds}
                        handleImageClick={handleImageClick}
                    />
                    {showKidsContainer && (
                        <div className="kids-container">
                            <h2 className="content-title">Idag För Barn 7+</h2>
                            <div className="movie-info">
                                {/* Movie title and showtime for kids' content */}
                                <div className="movie">
                                    <p className="showtime">Visning: 10:00</p>
                                    <h3 className="movie-title">MamaMu , Sal A</h3>
                                    <h3 className="movie-title">Barbie , Sal B</h3>
                                </div>
                                {/* Add more kids' movie entries as needed */}
                                <div className="movie">
                                    <p className="showtime">Visning: 13:00</p>
                                    <h3 className="movie-title">MammaMu , Sal B</h3>
                                    <h3 className="movie-title">Barbie , Sal A</h3>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* Idag section with specific images based on IDs */}
                <div className="idag-container">
                    <h2 className="content-title">Idag på Bio</h2>
                    <div className="movie-info">
                        {idagMovieIds.map((id, index) => (
                            <Link to={`/detaljsidan/${id}`} key={index}>
                                <div className="movie">
                                    <img src={movieImages[id - 1]} alt={`Movie ${id}`} />
                                </div>
                            </Link>
                        ))}
                    </div>
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
