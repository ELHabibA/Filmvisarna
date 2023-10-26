import getBookingNumber from '../utilities/bookingNumber.js';


import { runQuery } from "../classes/dbEngineSpecific/MySQLQuery.js";
const app = global.server;


app.get("/api/ourOwnRoute", async (req, res) => {
    let result = await runQuery('SELECT * FROM movies WHERE title = :title', { title: "Barbie" });
    res.json(result);
});

app.get('/api/bookingNumber', (req, res) => {
    res.json({ bookingNumber: bookingNumber() });
});


app.post('/api/makeBooking', async (req, res) => {

    // Data from request body
    let { email, screeningId, seatIds, seatTypes } = req.body;

    // Check if email in users in DB
    let user = (await runQuery('SELECT * FROM users WHERE email = :email', { email }))[0];

    // If user not in DB add user to DB
    if (!user) {
        await runQuery('INSERT INTO users (email) VALUES(:email)', { email });
        user = (await runQuery('SELECT * FROM users WHERE email = :email', { email }))[0];
    }

    // Create booking number
    let bookingNumber = getBookingNumber();

    // Create booking 
    let result = await runQuery(`INSERT INTO bookings (bookingNumber, screeningId, userId)
                    VALUES (:bookingNumber, :screeningId, :userId)`,
        { bookingNumber, userId: user.id, screeningId });
    let bookingId = result.insertId;
    
    // Create seat data
    let seats = [], seatIdsCopy = seatIds.slice();
    for(let type in seatTypes){
        for(let i = 0; i < seatTypes[type]; i++){
            seats.push({bookingId, seatId: seatIdsCopy.shift(), ticketTypeId: +type});
        }
    }
    
    // Add the seats to th db
    for (let {bookingId, seatId, ticketTypeId} of seats){
       let result = await runQuery(`INSERT INTO ticketTypeXbookings (bookings_id, seats_id, ticketType_id)
                    VALUES (:bookingId, :seatId, :ticketTypeId)`, { bookingId, seatId, ticketTypeId });
        console.log("HMMMMMMMM",result, {bookingId, seatId, ticketTypeId} )
    }

    // Send email here!!!
    

    res.json({ bookingNumber });
});





//Delete booking
app.delete('/api/bookings', async (req, res) => {

    const { email, bookingNumber } = req.body;


    const result = await runQuery(
        'DELETE bookings FROM bookings INNER JOIN users ON bookings.userId = users.id WHERE bookings.bookingNumber = :bookingNumber AND users.email = :email',
        { email, bookingNumber }
    );

    res.json(result);


});
/*
// New API endpoint to fetch screening dates for a specific movie
app.get("/api/screenings/:movieId", async (req, res) => {
    const movieId = req.params.movieId;
    // Replace the query with one that fetches screening times for the given movieId
    let result = await runQuery('SELECT time FROM dbFilm.screenings WHERE movies_id = :movieId', { movieId: movieId });
    res.json(result);
});
*/
