import React, { PropTypes } from 'react';

function Story({ name, children }) {
  const className = `Story ${name}`;
  return (
    <article className={className}>
      {children}
    </article>
  );
}

Story.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Story;
