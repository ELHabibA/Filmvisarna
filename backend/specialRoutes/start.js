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
    let dataFromUser = req.body;

    let bookingNumber = getBookingNumber();

    let { email, screeningId } = req.body;

    // Check if email in users in DB
    let user = (await runQuery('SELECT * FROM users WHERE email = :email', { email }))[0];

    // If user not in DB add user to DB
    if (!user) {
        await runQuery('INSERT INTO users (email) VALUES(:email)', { email });
        user = (await runQuery('SELECT * FROM users WHERE email = :email', { email }))[0];
    }

    // Create booking (obs! ej stolarna/korstabell, bara huvubokningen)
    let result = await runQuery(`INSERT INTO bookings (bookingNumber, screeningId, userId)
                    VALUES (:bookingNumber, :screeningId, :userId)`,
        { bookingNumber, userId: user.id, screeningId });

    res.json({ makeBooking: "ROUTEN FINNS", "data you sent": dataFromUser, bookingNumber, user, result });
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
