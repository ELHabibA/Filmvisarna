import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BioSeats from './BioSeatsComponents/BioSeats';

const Booking = () => {
    const { screeningId } = useParams();
    const [screening, setScreening] = useState(null);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`/api/screenings/${screeningId}`);
                const screeningData = await response.json();

                const movieResponse = await fetch(`/api/movies/${screeningData.movies_id}`);
                const movieData = await movieResponse.json();
                setMovie(movieData);
                setScreening(screeningData);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [screeningId]);

    return (
        <>
            <h2>{movie ? `Boka biljetter för ${movie.title}` : 'Loading...'}</h2>
            {screening && (
                <p>
                    Vald visning: Auditorium {screening.auditorium_id}, {screening.time}
                </p>
            )}
            <BioSeats />
        </>
    );
};

export default Booking;
