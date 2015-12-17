import React from 'react';

import TextOverImageSectionTitle from './TextOverImageSectionTitle';
import './TextOverImageSection.scss';

function TextOverImageSection({ children }) {
  return (
    <div className="Section TextOverImageSection">
      {children}
    </div>
  );
}


export {
  TextOverImageSectionTitle,
};

export default TextOverImageSection;
