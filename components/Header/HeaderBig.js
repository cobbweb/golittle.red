import React from 'react';
import config from '../../config.js';
import './HeaderBig.scss';
import backgroundImage from 'resize-image?sizes[]=360w&placeholder=20!./Ronald.jpg';
import BackgroundImage from '../Story/BackgroundImage';

function HeaderBig() {
  const bg = backgroundImage;
  return (
    <header role="banner" className="HeaderBig">
      <div className="HeaderBig-text">
        <h1 className="HeaderBig-title">{config.title}</h1>
        <h2 className="HeaderBig-subtitle">{config.description}</h2>
      </div>

      <BackgroundImage image={bg} alt='Ronald, our 2007 SWB Pajero' />
    </header>
  );
}

export default HeaderBig;
