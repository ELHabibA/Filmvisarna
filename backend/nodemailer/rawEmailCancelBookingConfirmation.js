import emailContent from "./emailContent.js";

const rawCancellation = `
Avokningsbekräftelse

Här kommer din avbokningsbekräftelse

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

export default rawCancellation;
