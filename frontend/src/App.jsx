// Only import your sass in App (not every component)
import "./sass/main.scss";

// Import some Bootstrap components
import Background from '../src/components/Background';
import MovieScroller from '../src/components/MovieScroller';
import MainMenu from './MainMenu';
import { Container, Row, Col, Button } from 'react-bootstrap';


const movieImages = [
  ('../src/assets/Barbie.jpg'),
  ('../src/assets/LionKing.jpg'),
  ('../src/assets/MegaTrench2.jpg'),
  ('../src/assets/Oppenheimer.jpg'),
  ('../src/assets/PastLives.jpg'),
  // Add more image URLs as needed
];

export default function App() {
  return <>
    <MainMenu />
    <Container className="mt-5">
      <Row>
        <MovieScroller movieImages={movieImages} />
      </Row>
    </Container>
    <Background />
  </>;
}