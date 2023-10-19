import { email, password } from './loginCredentials.js';

export const emailConfig = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: password,
  },
}

