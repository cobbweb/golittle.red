import React, { PropTypes } from 'react';
import classnames from 'classnames';

function TextOverImageSectionTitle({ color, xAlign, yAlign, children }) {
  const style = { color: color };
  const className = classnames({
    TextOverImageSectionTitle: true,
    [`TextOverImageSectionTitle__xAlign-${xAlign}`]: true,
    [`TextOverImageSectionTitle__yAlign-${yAlign}`]: true,
  });

  return (
    <div className={className} style={style}>
      <div className="TextOverImageSectionTitle--text">
        {children}
      </div>
    </div>
  );
}

TextOverImageSectionTitle.propTypes = {
  color: PropTypes.string,
  xAlign: PropTypes.oneOf(['left', 'center', 'right']).isRequired,
  yAlign: PropTypes.oneOf(['top', 'center', 'bottom']).isRequired,
};


export default TextOverImageSectionTitle;
