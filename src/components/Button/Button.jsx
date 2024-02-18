import React from 'react';

export const Button = ({ className, children, onClick, variant }) => {
  const variants = {
    primary: 'bg-cyan-700 text-white rounded-md',
    secondary: 'bg-none',
  };

  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 font-semibold tracking-wide ${className} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};
