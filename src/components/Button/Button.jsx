import React from 'react';

export const Button = ({ className, children, onClick, variant }) => {
  const variants = {
    primary:
      'bg-cyan-700 text-white rounded-full py-2 px-4 font-semibold tracking-wide',
    secondary: 'bg-none py-2 px-4',
  };

  return (
    <button onClick={onClick} className={`${className} ${variants[variant]}`}>
      {children}
    </button>
  );
};
