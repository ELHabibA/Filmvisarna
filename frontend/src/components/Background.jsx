/*import React from 'react';*/
import backgroundImage from '../assets/Full_Pic-craiyon_105918_Cinema_background_picture.jpg';

function Background() {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1, // Place the background behind other content
    };

    return <div className="background" style={backgroundStyle}></div>;
}

export default Background;


