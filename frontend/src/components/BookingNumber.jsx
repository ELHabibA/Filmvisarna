//Kommentar till testarna. Hejhej
//
//Komponenten testas i Footer


function generateRandomLetters() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomNumber = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomNumber];
}

//GEnererar tre random nummer mellan 100 och 999
function generateRandomDigit() {   
    const randomNumber = Math.floor(Math.random() * 899 + 100);
    return randomNumber;
}

//lägger ihop bokstäver och siffror
export default function BookingNumber() {
    let randomCode = '';
    for (let i = 0; i < 3; i++) {
        randomCode += generateRandomLetters();
    }
    randomCode += generateRandomDigit();
   
    return randomCode;
}