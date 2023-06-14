import React from 'react';

export const withEnable = (Component: React.ElementType) => {
  const WrappedComponent = ({ enable = true, ...props }) => {
    if (enable) {
      return <Component {...props} />;
    }

    return <></>;
  };

  return WrappedComponent;
};
