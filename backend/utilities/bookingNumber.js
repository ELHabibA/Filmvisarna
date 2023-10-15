import crypto from 'crypto';

export default function generateBookingNumber(length = 7) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        // Generate a random index in a secure way
        const randomIndex = crypto.randomBytes(1)[0] % characters.length;
        result += characters.charAt(randomIndex);
    }
    return result;
}
