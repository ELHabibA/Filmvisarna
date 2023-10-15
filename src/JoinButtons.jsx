import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function JoinButtons() {
  return (
    <div className="d-flex justify-content-end">
      <Link to="/blimedlem">
        <Button variant="primary" className="mr-2">Bli medlem</Button>
      </Link>
      <Link to="/loggain">
        <Button variant="success">Logga in</Button>
      </Link>
    </div>
  );
}

export default JoinButtons;