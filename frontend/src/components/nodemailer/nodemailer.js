
const nodeMailer = require('nodemailer')

const html = `
    <h1> Filmvisarna </h1>
    <p> Här kommer din bokning </p>
`;

async function main(){

    const transporter = nodeMailer.createTransport({
        host: 'fyll i mailserver',
        port: 465,
        secure: true,
        auth:{
            user:'mailadress@gmail.com',
            pass: 'Lösenord',
        }
    });

    const info = await transporter.sendMail({
        from: 'Filmvisarna <mailadress>',
        to: 'testemailadress',
        subject: 'Tack för din bokning!',
        html: html,
    })

    console.log('message sent' + info.messageId)
}

main()
.catch(e => console.log(e));