import React from 'react';
import { Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import './../../sass/movies.css';


const MovieFilter = ({
    uniqueAges,
    uniqueGenres,
    selectedAge,
    selectedGenre,
    handleAgeSelection,
    handleGenreSelection,
}) => {
    return (
        <div>
            <Col xs={12} sm={6} md={4} lg={3} className="age-filter">
                <Dropdown className="mx-auto">
                    <Dropdown.Toggle variant="age-filter" id="ageDropdown">
                        {selectedAge === 'Alla åldrar' ? 'Välj ålder' : selectedAge}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {uniqueAges.map((ageCategory) => (
                            <Dropdown.Item
                                key={ageCategory}
                                onClick={() => handleAgeSelection(ageCategory)}
                            >
                                {ageCategory}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </Col>

            <Col xs={12} sm={6} md={4} lg={3} className="genre-filter">
                <Dropdown className="mx-auto">
                    <Dropdown.Toggle variant="genre-filter" id="genreDropdown">
                        {selectedGenre === 'Alla genrer' ? 'Välj genre' : selectedGenre}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item key="Alla genrer" onClick={() => handleGenreSelection('Alla genrer')}>
                            Alla genrer
                        </Dropdown.Item>
                        {uniqueGenres.map((genre) => (
                            <Dropdown.Item key={genre} onClick={() => handleGenreSelection(genre)}>
                                {genre}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
        </div>
    );
};

export default MovieFilter;