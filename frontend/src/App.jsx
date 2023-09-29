// Only import your sass in App (not every component)
import "./sass/main.scss";

// Import some Bootstrap components
import Background from './components/MainSide/Background';
import MovieScroller from './components/MainSide/Funktions/MovieScroller';
import MainMenu from './MainMenu';
import { Container, Row, Col, Button } from 'react-bootstrap';


const movieImages = [
  ('../src/assets/movies/Barbie.jpg'),
  ('../src/assets/movies/LionKing.jpg'),
  ('../src/assets/movies/MegaTrench2.jpg'),
  ('../src/assets/movies/Oppenheimer.jpg'),
  ('../src/assets/movies/PastLives.jpg'),
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