import nodeMailer from "nodemailer";
import { email, password } from './loginCredentials.js';


const html = `
    <h1> Filmvisarna </h1>
    <p> Här kommer din bokning </p>
`;
const text = `Filmvisarna - Här kommer din bokning`

async function main(){

    const transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth:{
            user: email,
            pass: password,
        },
      
    });

    const info = await transporter.sendMail({
        from: 'Filmvisarna <'+email+'>',
        to: 'dinEmail@gmail.com',
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

main()
.catch(e => console.log(e));