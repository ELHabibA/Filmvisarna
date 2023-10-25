import emailContent from "./emailContent.js";

const rawBooking = `
Bokningsbekräftelse

Tack för din bokning!

Här kommer din bokningsbekräftelse

Bokningsinformation:
Titel: ${emailContent.title}
Datum: ${emailContent.date}
Biljetter: ${emailContent.ticketType}
Stolar: ${emailContent.seats}
Pris: ${emailContent.price}
Boknings nummer: ${emailContent.bookingNo}


Med vänliga hälsningar,
Filmvisarna AB
`;

export default rawBooking;
