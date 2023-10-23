import React, { useState, useEffect } from "react";

export default function MovieTitleFetch() {
  const [movieTitles, setMovieTitles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/movies'); // Replace with your API endpoint
        const moviesListed = await response.json();
        const titles = moviesListed.map(movie => movie.title);
        setMovieTitles(titles);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return movieTitles;
}
