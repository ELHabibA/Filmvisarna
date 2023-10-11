import sendEmail from './sendEmail.js';

sendEmail({
    header: 'Tack för din störtsköna bokning!',
    email: 'hakansson.hampus@gmail.com',
    title: 'Exempel the movie',
    ticketType: '1 barn, 2 vuxen, 1 pensionär',
    seats: ['1A', '2A', '3A', '4A'],
    price: 450 + ' kr'
});