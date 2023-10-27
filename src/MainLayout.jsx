import React, { useState, useEffect } from 'react';
// Import Images stored in project
import movieData from './components/MainSide/movieData';
//Imports for top Section of the Mainside
// Import Schedule left and right of Movie Scroller -(Se idag 15+,Se idag 5+)-
import ScrollContainer from './components/MainSide/Funktions/ScrollContainer';
import SeIdag15Plus from './components/MainSide/SeIdag15Plus';
import KidsContainer from './components/MainSide/KidsContainer';
// Import MovieScroller  middle part - Aktuellt - 
import MovieScroller from './components/MainSide/Funktions/MovieScroller';
// Imports for Middle part of the Mainside -  Dayily and weekly Schedule
//Imports for Today Section
import idagMovies from './components/MainSide/idagMoviesData';
import IdagMovies from './components/MainSide/IdagMovies';
//Imports for Weekly Section
import weeklyKidsMovies from './components/MainSide/weeklyKidsMoviesData';
import weeklyAdultsMovies from './components/MainSide/weeklyAdultsMoviesData';
import WeeklyMovies from './components/MainSide/weeklyMovies';
//Imports Functions for Weekly Section
import { useLibraryToggle } from './components/MainSide/Funktions/libraryToggle';
import { chunkArray } from './components/MainSide/Funktions/arrayUtils';
// Imports for the last/lowest section of the Mainside
import ImageGrid from './components/MainSide/ImageGrid';
import MovieTitleFetch from './components/MainSide/Funktions/MovieTitleFetch';
import PåBioButton from './components/MainSide/PåBioButton';

function MainLayout() {
    const movieTitles = MovieTitleFetch(); // Fetch movie titles
    const { movieIds, movieImages } = movieData; // Destructure movieData object

    const handleImageClick = (index) => {
        // Handle image click here
        const movieId = movieIds[index];
        // Redirect to the detaljsidan page with the selected movie ID
    };
    // Use the useLibraryToggle hook to manage the library toggle
    const { showKidsLibrary, toggleLibrary } = useLibraryToggle(true);

    const showContainer = ScrollContainer();

    return (
        <div className="main-layout">
            <div className="content">
                <div className="movie-scroller">
                    {showContainer && <SeIdag15Plus />}
                    <MovieScroller
                        movieImages={movieImages.slice(0, 5)}
                        movieIds={movieIds}
                        handleImageClick={handleImageClick}
                    />
                    {showContainer && <KidsContainer />}

                </div>
                {/* Use the IdagMovies component and pass in the data as props */}
                <IdagMovies idagMovies={idagMovies} movieImages={movieImages} />

                {/* Use the WeeklyMovies component for the "Weekly" section */}
                <WeeklyMovies
                    data={showKidsLibrary ? chunkArray(weeklyKidsMovies, 4) : chunkArray(weeklyAdultsMovies, 4)}
                    movieImages={movieImages}
                    toggleLibrary={toggleLibrary}
                    showKidsLibrary={showKidsLibrary} // Pass showKidsLibrary as a prop
                />

                {/* Use the ImageGrid component for the "image-grid" section */}
                <ImageGrid
                    movieImages={movieImages}
                    movieIds={movieIds}
                    movieTitles={movieTitles} />
            </div>
            {/* Use the PåBioButton component */}
            <PåBioButton />
        </div>
    );
}

export default MainLayout;

