import React, { useState, useEffect } from 'react';

const ScreeningButton = ({ movieId }) => {
    const [screeningDates, setScreeningDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        // Function to fetch screening dates based on movieId
        const fetchScreeningDates = async () => {
            try {
                const response = await fetch(`/api/screenings/movies_id/=/${movieId}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                // Extract all time values from your data for the specified movieId
                const dates = data
                    .filter((row) => row.movies_id === movieId)
                    .map((row) => row.time);

                setScreeningDates(dates);
            } catch (error) {
                console.error('Error fetching screening dates:', error);
            }
        };

        fetchScreeningDates();
    }, [movieId]);

    const handleDateChange = (event) => {
        const selected = event.target.value;
        setSelectedDate(selected);
        // You can perform actions based on the selected screening date here
    };

    return (
        <div>
            <select value={selectedDate} onChange={handleDateChange}>
                <option value="">Visningar</option>
                {screeningDates.map((date, index) => (
                    <option key={index} value={date}>
                        {date}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ScreeningButton;
