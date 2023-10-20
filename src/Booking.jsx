import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BioSeats from './BioSeatsComponents/BioSeats';
import ChooseAge from '../src/components/ChooseAge';


const Booking = () => {
    const { screeningId } = useParams();
    const [screening, setScreening] = useState(null);
    const [movie, setMovie] = useState(null);
    const [bookings, setBookings] = useState([]);
    const [sum, setSum] = useState(0);
    const formattedDateTime = screening ? new Date(screening.time).toLocaleString('sv-SE').slice(0, -3) : '';

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`/api/screenings/${screeningId}`);
                const screeningData = await response.json();

                const movieResponse = await fetch(`/api/movies/${screeningData.movies_id}`);
                const movieData = await movieResponse.json();

                const bookingsResponse = await fetch('/api/bookingsNice');
                const bookingsData = await bookingsResponse.json();

                setMovie(movieData);
                setScreening(screeningData);
                setBookings(bookingsData);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [screeningId]);



    return (
        <>
            <h2>{movie ? `Boka biljetter för ${movie.title}` : 'Loading...'}</h2>
            {screening ? (
                <>
                    <p>
                        Vald visning: Sal {screening.auditorium_id}, {formattedDateTime}
                    </p>
                    <ChooseAge onSumChange={setSum} />
                    <BioSeats
                        sum={sum}
                        bookings={bookings}
                        selectedMovieTitle={movie ? movie.title : ''}
                        selectedScreeningTime={screening ? screening.time : ''}
                        auditoriumId={screening.auditorium_id}
                    />
                </>
            ) : (
                "Loading..." // Eller du kan använda en laddningsindikator här
            )}
        </>
    );
};

export default Booking;
