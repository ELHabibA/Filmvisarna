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




app.get('/api/seats', async (req, res) => {
    
    // Kör en query för att hämta alla säten från 'seats' tabellen i din databas
    let result = await runQuery('SELECT * FROM seats');     
    // Skicka tillbaka resultatet som JSON till klienten
    res.json(result);
});