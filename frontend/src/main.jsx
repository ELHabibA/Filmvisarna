import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Här importerar vi alla sidor som kommer vilja använda i routingen
import App from './App.jsx';
import ContactUs from './ContactUs.jsx';
import Booking from './Booking.jsx';
import BecomeMember from './BecomeMember.jsx';
  
  
//Pages är det som ska routas och hur.
//label behöver vi inte men om vi lägger till det här 
//så är all denna logik samlad. Läraren gjorde detta 
//i sitt exempel och jag tycker det är neat
//den översta i pages ska vara startsidan

export const pages = [
 // {path: '/', label: 'Startsida', element: <Main /> },
  {    path: '/kontakt', label: 'Kontakta oss', element: <ContactUs /> },
  {    path: '/boka', label: 'Boka', element: <Booking /> },
  {   path: '/blimedlem', label: 'Bli Medlem', element: <BecomeMember />}
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: pages
  }
]);

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
