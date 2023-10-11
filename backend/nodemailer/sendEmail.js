import nodeMailer from "nodemailer";
import { email as fromEmail, password } from './loginCredentials.js';

export default async function sendEmail({ header, email, title, ticketType, seats, price }) {

    const html = `
    
    <body style="background-color: #181619;">
    <font color="#DDA74F">
    <header>
        <h1>${header} </h1>
        <h3> Här kommer din bokning </h3><hr/>
    </header>
    <body>
        <p>Titel: ${title}</p>
        <p>Biljetter: ${ticketType}</p>
        <p>Stolar: ${seats}</p>
        <p>Pris: ${price}</p><hr/>
    </body>
    <footer>
        Filmvisarna AB
    </footer>
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
