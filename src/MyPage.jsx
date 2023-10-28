import React, { useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate, useOutletContext, Link } from 'react-router-dom';
import BookingFetch from './components/BookingFetch';
import './sass/MyPageAndMoviePage.css';

async function deleteFetch(url = '') {
  const response = await fetch(url, { method: 'DELETE' });
  return response.json();
}

const MyPage = () => {
  const { setUser, user } = useOutletContext();
  
  const bookings = BookingFetch({ user });

  const formatTimestamp = (timestamp) => {
    const bookingTimestamp = new Date(timestamp);
    const year = bookingTimestamp.getFullYear();
    const month = String(bookingTimestamp.getMonth() + 1).padStart(2, '0');
    const day = String(bookingTimestamp.getDate()).padStart(2, '0');
    const hours = String(bookingTimestamp.getHours()).padStart(2, '0');
    const minutes = String(bookingTimestamp.getMinutes()).padStart(2, '0');
    const seconds = String(bookingTimestamp.getSeconds()).padStart(2, '0');
  
    return `${month}-${day}-${year} ${hours}:${minutes}`;
  };

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/login');
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      }
    })();
  }, []);

  const handleLogout = async () => {
    try {
      await deleteFetch('/api/login');
      setUser(null);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (user) {
    const now = new Date();
    const futureBookings = [];
    const pastBookings = [];

    console.log(bookings);

    bookings.forEach((booking) => {
      const bookingTime = new Date(booking.timestamp);

      if (bookingTime > now) {
        futureBookings.push(booking);
      } else {
        pastBookings.push(booking);
      }
    });

    return (
      <Container className="mt-5">
        <Card className="my-page-card">
          <Card.Header className="text-center">
            <h2>Min sida</h2>
          </Card.Header>
          <Card.Body className="text-left">
            <div className="user-info">
              <table>
                <tbody>
                  <tr>
                    <td><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Förnamn:</strong></td>
                    <td>{user.firstName}</td>
                  </tr>
                  <tr>
                    <td><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Efternamn:</strong></td>
                    <td>{user.lastName}</td>
                  </tr>
                  <tr>
                    <td><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E-post:</strong></td>
                    <td>{user.email}</td>
                  </tr>
                  <tr>
                    <td><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Telefonnummer:</strong></td>
                    <td>&nbsp;{user.phoneNumber}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card-horizontal-line"></div>
            <div className="booked-movies">
              <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dina bokningar:</h4>
              <h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;kommande:</h5>
              <ul style={{ listStyleType: 'none' }}>
                {futureBookings.length > 0 ? (
                  <div>
                    {futureBookings.map((booking) => (
                      <li key={booking.id} className="text-color">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{booking.movieTitle}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{formatTimestamp(booking.bookingTime)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{booking.name}
                      </li>
                    ))}
                  </div>
                ) : (
                  <div className="text-color">
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inga kommande bokningar</p>
                  </div>
                )}
                {pastBookings.length > 0 && (
                  <div>
                    <h5>Bokningshistorik:</h5>
                    <ul style={{ listStyleType: 'none' }}>
                      {pastBookings.map((booking) => (
                        <li key={booking.id} className="text-color-2">{booking.movieTitle}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{formatTimestamp(booking.bookingTime)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{booking.name}</li>
                      ))}
                    </ul>
                    <div>
                      <div className="card-horizontal-line"></div>
                      <p>
                        Vill du avboka en bokning? <Link to="/avbokning" className='cancel-booking-link'>Avboka här</Link>
                      </p>
                    </div>
                  </div>
                )}
              </ul>
            </div>
          </Card.Body>
          <Card.Footer className="text-center">
            <Button variant="primary" onClick={handleLogout}>
              Logga ut
            </Button>
          </Card.Footer>
        </Card>
      </Container>
    );
    
  }; 

  }

export default MyPage;