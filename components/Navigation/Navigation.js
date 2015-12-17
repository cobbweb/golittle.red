/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React from 'react';
import './Navigation.scss';
import Link from '../Link';
import hamburger from './hamburger.png';

function Navigation() {
  return (
    <div className="Navigation">
      <button className="Navigation-hamburger">
        <img src={hamburger} />
      </button>

      <ul className="Navigation-menu" role="menu">
        <li className="Navigation-item">
          <a className="Navigation-link" href="/" onClick={Link.handleClick}>Home</a>
        </li>
        <li className="Navigation-item">
          <a className="Navigation-link" href="/about" onClick={Link.handleClick}>About</a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
