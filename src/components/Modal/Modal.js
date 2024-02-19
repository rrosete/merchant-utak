// Modal.js
import React from 'react';
import { useModalStore } from '../../store';

export const Modal = () => {
  const { isOpen, option } = useModalStore();

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96 m-2">
            <div className="flex justify-start">
              <p className="text-lg font-semibold">{option.title}</p>
            </div>
            <div className="mt-4">{option.body}</div>
            <div className="flex items-center justify-center gap-3 mt-7">
              {option.footer}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
