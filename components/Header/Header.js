import React from 'react';
import config from '../../config';

import Link from '../Link';
import Navigation from '../Navigation';

import './Header.scss';

function Header({ children }) {
  return (
    <header role="banner" className="Header">
      <hgroup className="Header-text">
        <Link href="/">
          <h1 className="Header-title">{config.title}</h1>
        </Link>
        <h2 className="Header-subtitle">{config.description}</h2>
      </hgroup>
      <Navigation />
    </header>
  );
}


export default Header;
