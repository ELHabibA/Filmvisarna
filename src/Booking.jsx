import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BioSeats from './BioSeatsComponents/BioSeats';
import ChooseAge from '../src/components/ChooseAge';
import useFormattedDateTime from './hooks/useFormattedDateTime';

const Booking = () => {
    const { screeningId } = useParams();
    const [screening, setScreening] = useState(null);
    const [movie, setMovie] = useState(null);
    const [bookings, setBookings] = useState([]);
    const [sum, setSum] = useState(0);
    const [price, setPrice] = useState(0);
    const [ticketTypes, setticketTypes] = useState({});
    const [chosenSeats, setChosenSeats] = useState(null);
    const [auditorium, setAuditorium] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`/api/screenings/${screeningId}`);
                const screeningData = await response.json();

                const movieResponse = await fetch(`/api/movies/${screeningData.movies_id}`);
                const movieData = await movieResponse.json();

                const bookingsResponse = await fetch('/api/bookingsNice');
                const bookingsData = await bookingsResponse.json();

                const auditoriumResponse = await fetch(`/api/auditorium`);
                const auditorium = await auditoriumResponse.json();

                setMovie(movieData);
                setScreening(screeningData);
                setBookings(bookingsData);
                setAuditorium(auditorium);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [screeningId]);

    const formattedDateTime = useFormattedDateTime(screening);
    //Checks what auditorium id the screening has and fetches the name of the auditorium
    function getAuditoriumName(auditoriumId, auditoriumData) {
        if (auditoriumData) {
            const auditorium = auditoriumData.find((aud) => aud.id === auditoriumId);
            return auditorium ? auditorium.name : 'Oklar salong';
        }
    }

    return (
        <>
            <h2>{movie ? `Boka biljetter för ${movie.title}` : 'Loading...'}</h2>
            {screening ? (
                <>
                    <p>Vald visning: {getAuditoriumName(screening.auditorium_id, auditorium)}, {formattedDateTime}</p>
                    <ChooseAge onSumChange={setSum} setPrice={setPrice} setticketTypes={setticketTypes} />
                    <BioSeats
                        sum={sum}
                        bookings={bookings}
                        selectedMovieTitle={movie ? movie.title : ''}
                        selectedScreeningTime={screening ? screening.time : ''}
                        auditoriumId={screening.auditorium_id}
                        screeningDatetime={formattedDateTime}
                        price={price}
                        ticketTypes={ticketTypes}
                        setChosenSeats={setChosenSeats}
                        chosenSeats={chosenSeats}
                        screeningId={screeningId}

                    />
                </>
            ) : (
                "Loading..." // Eller du kan använda en laddningsindikator här
            )}
        </>
    );
};

export default Booking;
