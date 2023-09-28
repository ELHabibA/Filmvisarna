import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ReactDOM from 'react-dom/client'

import { Button } from 'react-bootstrap';

function Footer() {
    return (
        <div className="fixed-bottom">
            
            <div> <Button>Boka</Button></div>
            <div> <Button>Kontakta oss</Button></div>
            <div>
                <p>Made by: Grupp 3 - Elia, Habib, Hampus, Tanya, Artur, Simon & Bobby</p>
            </div>
                
        </div>
       
    );
}

export default Footer;