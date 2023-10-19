import { useState, useEffect } from "react";

export default function MovieFetch() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/movies');
        const moviesListed = await response.json();
        setMovies(moviesListed);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return movies;

};