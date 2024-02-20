import React, { forwardRef } from 'react';

export const Select = forwardRef(({ label, options, error = '', ...props }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm mb-1">{label}</label>
      <select
        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error ? 'border-red-400 border' : ''}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <label className="text-red-400 text-xs">{error}</label>}
    </div>
  );
});
