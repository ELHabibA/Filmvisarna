import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Här importerar vi alla sidor som kommer vilja använda i routingen
import App from './App.jsx';
import Home from './Home.jsx';
import Movies from './components/Filmer/Movies.jsx';
import MovieItem from './components/Filmer/MovieItem.jsx';
import MovieFilter from './components/Filmer/MovieFilter.jsx';
import ContactUs from './ContactUs.jsx';
import Booking from './Booking.jsx';
import BecomeMember from './BecomeMember.jsx';
import LogIn from './LogIn.jsx';
import MoviePage from './MoviePage.jsx';
import FinalizeBooking from './FinalizeBooking.jsx';
import BookingConfirmation from './components/bookingconfirmation.jsx'
import CancelBooking from './CancelBooking.jsx'



//Pages är det som ska routas och hur.
//label behöver vi inte men om vi lägger till det här 
//så är all denna logik samlad. Läraren gjorde detta 
//i sitt exempel och jag tycker det är neat
//den översta i pages ska vara startsidan

export const pages = [
    
  { path: '/', label: 'Hem', element: <Home /> },
  { path: '/filmer', label: 'Filmer', element: <Movies /> },
  { path: '/boka', label: 'Boka', element: <Booking /> },
  { path: '/kontakt', label: 'Kontakta oss', element: <ContactUs /> },
  { path: '/blimedlem', label: 'Bli medlem', element: <BecomeMember /> },
  { path: '/loggain', label: 'Logga in', element: <LogIn /> },
  { path: '/detaljsidan/:movieId', label: '', element: <MoviePage /> },
  { path: '/finalize-booking', label: '', element: <FinalizeBooking /> }, // Ta bort sedan, kunder/externa användare ska inte kunna se denna sida utan att ha valt film.
  { path: '/bokningsbekraftelse', label: '', element: <BookingConfirmation /> }, // Ta bort sedan, kunder/externa användare ska inte kunna se denna sida utan att ha valt film.
    
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