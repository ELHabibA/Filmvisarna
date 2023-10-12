// Add the chunkArray function before your MainLayout component
function chunkArray(array, chunkSize) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunkedArray.push(array.slice(i, i + chunkSize));
    }
    return chunkedArray;
}

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
    const idagMovies = [
        {
            id: 1,
            text: ['Sal A', 'Tid: 10:00', 'Sal B', 'Tid: 13:00', 'Ålder: 5+'],
        },
        {
            id: 12,
            text: ['Sal B', 'Tid: 10:00', 'Sal A', 'Tid: 13:00', 'Ålder: 5+'],
        },
        {
            id: 7,
            text: ['Sal A', 'Tid: 16:00', 'Sal B', 'Tid: 20:00', 'Ålder: 15+'],
        },
        {
            id: 10,
            text: ['Sal B', 'Tid: 16:00', 'Sal A', 'Tid: 20:00', 'Ålder: 15+'],
        },
    ];
    // Define movie data for the "Weekly" section.
    const weeklyKidsMovies = [
        {
            id: 1,
            text: ['Mån-Ons', 'Sal A', 'Tid: 10:00', 'Sal B', 'Tid: 13:00', 'Ålder: 5+'],
        },
        {
            id: 12,
            text: ['Mån-Ons', 'Sal B', 'Tid: 10:00', 'Sal A', 'Tid: 13:00', 'Ålder: 5+'],
        },
        {
            id: 8,
            text: ['Tors-Fre', 'Sal A', 'Tid: 10:00', 'Sal B', 'Tid: 13:00', 'Ålder: 5+'],
        },
        {
            id: 9,
            text: ['Tors-Fre', 'Sal B', 'Tid: 10:00', 'Sal A', 'Tid: 13:00', 'Ålder: 5+'],
        },
        // Add more kids' movie data as needed
    ];

    const weeklyAdultsMovies = [
        {
            id: 10,
            text: ['Mån-Ons', 'Sal B', 'Tid: 16:00', 'Sal A', 'Tid: 20:00', 'Ålder: 15+'],
        },
        {
            id: 7,
            text: ['Mån-Ons', 'Sal A', 'Tid: 16:00', 'Sal B', 'Tid: 20:00', 'Ålder: 15+'],
        },
        {
            id: 2,
            text: ['Tors-Fre', 'Sal B', 'Tid: 16:00', 'Sal A', 'Tid: 20:00', 'Ålder: 15+'],
        },
        {
            id: 4,
            text: ['Tors-Fre', 'Sal A', 'Tid: 16:00', 'Sal B', 'Tid: 20:00', 'Ålder: 15+'],
        },
        {
            id: 5,
            text: ['Lör-Sön', 'Sal B', 'Tid: 16:00', 'Sal A', 'Tid: 20:00', 'Ålder: 15+'],
        },
        {
            id: 15,
            text: ['Lör-Sön', 'Sal A', 'Tid: 16:00', 'Sal B', 'Tid: 20:00', 'Ålder: 15+'],
        },

        // Add more adults' movie data as needed
    ];


    const [showKidsLibrary, setShowKidsLibrary] = useState(true);

    // Function to toggle between kids and adults libraries
    const toggleLibrary = () => {
        setShowKidsLibrary(!showKidsLibrary);
    };

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
                            <h2 className="content-title">Idag För Barn 5+</h2>
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
                {/* Idag section with specific images and text based on IDs */}
                <div className="idag-container">
                    <h2 className="content-title">Idag på Bio</h2>
                    <div className="movie-info">
                        {idagMovies.map((movie, index) => (
                            <Link to={`/detaljsidan/${movie.id}`} key={index}>
                                <div className="movie">
                                    <img src={movieImages[movie.id - 1]} alt={`Movie ${movie.id}`} />
                                    {movie.text.map((line, i) => (
                                        <div key={i} className="image-text">{line}</div>
                                    ))}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                {/* Weekly section */}
                <div className="idag-container">
                    <h2 className="content-title">Veckans på Bio</h2>
                    <button onClick={toggleLibrary}>
                        {showKidsLibrary ? 'Barn 5+' : 'Vuxna 15+'}
                    </button>
                    <div className="movie-info">
                        {showKidsLibrary
                            ? chunkArray(weeklyKidsMovies, 4).map((row, rowIndex) => (
                                <div key={rowIndex} className="movie-info">
                                    {row.map((movie, index) => (
                                        <Link to={`/detaljsidan/${movie.id}`} key={index}>
                                            <div className="movie">
                                                <img src={movieImages[movie.id - 1]} alt={`Movie ${movie.id}`} />
                                                {movie.text.map((line, i) => (
                                                    <div key={i} className="image-text">{line}</div>
                                                ))}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ))
                            : chunkArray(weeklyAdultsMovies, 4).map((row, rowIndex) => (
                                <div key={rowIndex} className="movie-row">
                                    {row.map((movie, index) => (
                                        <Link to={`/detaljsidan/${movie.id}`} key={index}>
                                            <div className="movie">
                                                <img src={movieImages[movie.id - 1]} alt={`Movie ${movie.id}`} />
                                                {movie.text.map((line, i) => (
                                                    <div key={i} className="image-text">{line}</div>
                                                ))}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
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

