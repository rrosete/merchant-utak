import React from 'react';

export const Modal = ({ isOpen, children, title, variant = 'form' }) => {
  return isOpen ? (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div
            className={`bg-white p-8 rounded-lg shadow-lg m-2 w-full ${variant === 'form' ? 'max-w-lg' : 'max-w-xs'}`}
          >
            <div className="flex justify-start">
              <p className="text-lg font-semibold">{title}</p>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  ) : null;
};

Modal.Body = ({ children }) => <div className="mt-4">{children}</div>;
Modal.Footer = ({ children }) => (
  <div className="flex items-center justify-center gap-2 mt-7">{children}</div>
);
