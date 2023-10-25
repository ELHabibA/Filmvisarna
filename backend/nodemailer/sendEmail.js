import nodeMailer from "nodemailer";
import { emailConfig } from "./emailConfig.js";
import htmlTemplate from "./htmlTemplate.js";
import textTemplate from "./textTemplate.js";
import { email as fromEmail } from "./loginCredentials.js";
import rawBooking from "./rawEmailBookingConfirmation.js"
import rawCancellation from "./rawEmailCancelBookingConfirmation.js";


async function sendEmail() {

    const transporter = nodeMailer.createTransport(emailConfig);

    const info = await transporter.sendMail({
        from: `Filmvisarna <${fromEmail}>`,
        to: 'unik2k11@gmail.com',
        subject: 'Tack för din bokning!',
        html: htmlTemplate,
        text: rawBooking
    })


    console.log('message sent' + info.messageId)
    console.log('Accepted', info.accepted)
    console.log('Rejected', info.rejected)


}
sendEmail();
