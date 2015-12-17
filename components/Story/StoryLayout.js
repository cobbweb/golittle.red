import React, { PropTypes } from 'react';

import Story from './Story';
import Header from '../Header';
import './Story.scss';

function StoryLayout({ children }) {
  return (
    <main className="StoryLayout WillTransition">
      <Header />
      {children}
    </main>
  );
}

StoryLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StoryLayout;
