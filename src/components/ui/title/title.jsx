import React from 'react';

const Title = ({ children, size = 'medium' }) => {
  const sizeClass = size ? `title--${size}` : '';
  return (
    <h1 className={`title ${sizeClass}`.trim()}>
      {children}
    </h1>
  );
};

export const TitleSize = {
  EXTRA_SMALL: 'extra-small',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

export default Title;