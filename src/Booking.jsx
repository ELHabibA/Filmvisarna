import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BioSeats from './BioSeatsComponents/BioSeats';

const Booking = () => {
    const { selectedDate, movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                // Fetch movie details based on movieId
                const response = await fetch(`/api/movies/${movieId}`);
                const movieData = await response.json();
                setMovie(movieData);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [movieId]);

    return (
        <>
            <h2>{movie ? `Boka biljetter för ${movie.title}` : 'Loading...'}</h2>
            <p>Valt datum: {selectedDate}</p>
            <BioSeats />
        </>
    );
};

export default Booking;
