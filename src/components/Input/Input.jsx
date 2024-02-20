import React from 'react';

export const Input = ({ label, icon = null, error = '', ...props }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm mb-1">{label}</label>

      <div className="relative">
        {icon && (
          <span className="absolute inset-y-0 left-0 px-2 flex items-center border-r-2 text-gray-500">
            {icon}
          </span>
        )}
        <input
          className={`appearance-none border text-sm rounded w-full py-2 ${icon ? 'pr-3 pl-10' : 'px-3'} text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          type="text"
          {...props}
        />
      </div>
    </div>
  );
};
