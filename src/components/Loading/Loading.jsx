import React from 'react';

export const Loading = ({ openLoading = false }) => {
  return (
    openLoading && (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
        <div className="animate-spin rounded-full h-28 w-28 border-t-2 border-b-2 border-cyan-300"></div>
        <p className="text-white absolute text-sm">Loading...</p>
      </div>
    )
  );
};
