import nodeMailer from "nodemailer";
import { emailConfig } from "./emailConfig.js";
import htmlTemplate from "./htmlTemplate.js";
import textTemplate from "./textTemplate.js";
import { email as fromEmail } from "./loginCredentials.js";
import fetch from "node-fetch";

async function getBookingData(bookingId) {
  try {
const response = await fetch(`http://localhost:5173/api/bookingsNice/${bookingId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching booking data:", error);
    return null;
  }
}

export async function sendEmail(bookingId) {
  const bookingData = await getBookingData(bookingId);
    console.log("Vad finns i bookingId när det är i SendEmail??", bookingId );
  if (!bookingData) {
    console.error("Could not fetch booking data. Email not sent.");
    return;
  }

  const transporter = nodeMailer.createTransport(emailConfig);

  const emailContent = {
    title: bookingData.movieTitle,
    ticketType: bookingData.ticketTypes,
    seats: bookingData.seatNumbers,
    price: bookingData.totalPrice,
    date: bookingData.screeningTime,
    bookingNo: bookingData.bookingNumber,
  };

  const info = await transporter.sendMail({
    from: `Filmvisarna <${fromEmail}>`,
    to: bookingData.email, // Ändra mottagarens e-postadress här
    subject: "Tack för din bokning!",
    html: htmlTemplate(emailContent), // Skicka med emailContent till htmlTemplate
    text: textTemplate, // Använd din texttemplate här
  });

  console.log("message sent" + info.messageId);
  console.log("Accepted", info.accepted);
  console.log("Rejected", info.rejected);
}


export default sendEmail;