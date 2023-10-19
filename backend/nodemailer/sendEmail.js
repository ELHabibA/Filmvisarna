import nodeMailer from "nodemailer";
import { emailConfig } from "./emailConfig.js";
import htmlTemplate from "./htmlTemplate.js";
import textTemplate from "./textTemplate.js";
import { email as fromEmail } from "./loginCredentials.js";



async function sendEmail() {

    const transporter = nodeMailer.createTransport(emailConfig);

    const info = await transporter.sendMail({
        from: `Filmvisarna <${fromEmail}>`,
        to: 'hakansson.hampus@gmail.com',
        subject: 'Tack för din bokning!',
        html: htmlTemplate,
        text: textTemplate
    })


    console.log('message sent' + info.messageId)
    console.log('Accepted', info.accepted)
    console.log('Rejected', info.rejected)


}
sendEmail();
