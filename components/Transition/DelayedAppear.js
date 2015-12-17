import React from 'react';
import './DelayedAppear.scss';

function DelayedAppear({ children }) {
  return (
    <div className="DelayedAppear">
      {children}
    </div>
  );
}

export default DelayedAppear;
