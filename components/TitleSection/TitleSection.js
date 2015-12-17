import React from 'react';
import PublishedOn from './PublishedOn';
import Subtitle from './Subtitle';
import Title from './Title';
import TitleText from './TitleText';
import Details from './Details';
import Author from './Author';

import css from './TitleSection.scss';

function TitleSection({ children }) {
  return <div className="TitleSection">{children}</div>;
}

export default TitleSection;

export {
  PublishedOn,
  Subtitle,
  Title,
  TitleText,
  Details,
  Author
};
