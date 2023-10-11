import nodeMailer from "nodemailer";
import { email as fromEmail, password } from './loginCredentials.js';

export default async function sendEmail({ header, email, title, ticketType, seats, price }) {

    const html = `
    <h1>${header} </h1>
    <p> Här kommer din bokning </p><hr/>
    <p>Titel: ${title}</p><hr/>
    <p>Biljetter: ${ticketType}</p><hr/> 
    <p>Stolar: ${seats}</p><hr/>
    <p>Pris: ${price}</p>
`;
    const text = `Filmvisarna - Här kommer din bokning`;

    const transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: fromEmail,
            pass: password,
        },

    });

    const info = await transporter.sendMail({
        from: 'Filmvisarna <' + email + '>',
        to: email,
        subject: 'Tack för din bokning!',
        html,
        text,
        //attachments: [{
        //    filename: 'random.jpg',
        //     path: './random.jpg',
        //    cid: 'filmvisarna@mailserver.com'
        // }]
    })

    console.log('message sent' + info.messageId)
    console.log(info.accepted)
    console.log(info.rejected)

}
