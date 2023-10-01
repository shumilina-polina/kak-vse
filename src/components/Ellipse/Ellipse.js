import React from 'react';

const Ellipse = ({color, size}) => {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: `${color}`,
        borderRadius: '100%',
      }}
    >

    </div>
  );
};

export default Ellipse;