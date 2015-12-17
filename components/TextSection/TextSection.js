import React from 'react';
import './TextSection.scss';

function TextSection({ children }) {
  return (
    <div className="Section TextSection">
      {children}
    </div>
  );
}

export default TextSection;
