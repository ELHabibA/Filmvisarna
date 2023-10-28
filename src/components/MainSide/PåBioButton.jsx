// PåBioButton.js
import React from 'react';
import { Link } from 'react-router-dom';

function PåBioButton() {
  return (
    <Link to="/filmer">
      <button className="btn btn-primary mb-4" style={{ marginTop: '25px' }}>
        På Bio
      </button>
    </Link>
  );
}

export default PåBioButton;
