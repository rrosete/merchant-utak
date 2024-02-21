import React, { forwardRef } from 'react';

export const Input = forwardRef((props, ref) => {
  const { icon, label, error = '' } = props;
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm mb-1">{label}</label>

      <div className="relative">
        {icon && (
          <span
            className={`absolute inset-y-0 left-0 px-2 flex items-center border-r-[1px] ${error ? 'border-r-red-400' : ''} text-gray-500`}
          >
            {icon}
          </span>
        )}
        <input
          className={`appearance-none border text-sm rounded w-full py-2 ${icon ? 'pr-3 pl-10' : 'px-3'} ${error ? 'border-red-400' : ''} text-gray-700 leading-tight focus:outline-none focus:shadow-outline outline-gray-50`}
          type="text"
          {...props}
        />
      </div>
      {error && <label className="text-red-400 text-xs">{error}</label>}
    </div>
  );
});
