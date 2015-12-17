import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import './BackgroundImage.scss';

function BackgroundImage({ image, alt, isFixedPosition }) {
  const classNames = classnames('BackgroundImage', {
    'BackgroundImage__fixed': isFixedPosition
  });

  return (
    <div className={classNames}>
      <img className="BackgroundImage--img" src={image.placeholder} srcSet={image.srcset} alt={alt} key={image.srcset} />
    </div>
  );
}

BackgroundImage.propTypes = {
  image: PropTypes.shape({
    placeholder: PropTypes.string,
    srcset: PropTypes.string,
  }).isRequired,
  alt: PropTypes.string,
  isFixedPosition: PropTypes.bool,
};

export default BackgroundImage;
