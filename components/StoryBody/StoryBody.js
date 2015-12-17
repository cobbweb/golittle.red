import React from 'react';
import DelayedAppear from '../Transition/DelayedAppear';
import './StoryBody.scss';

function StoryBody({ children }) {
  return (
    <DelayedAppear>
      <div className="StoryBody">
        {children}
      </div>
    </DelayedAppear>
  );
}

export default StoryBody;
