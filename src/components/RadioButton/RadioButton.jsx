import React from 'react';

export const RadioButton = ({
  label,
  error = '',
  options,
  selectedOption,
  onChange,
}) => {
  console.log(selectedOption);
  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm mb-1">{label}</label>
        <div className="flex flex-row space-x-4">
          {options.map((option) => (
            <label
              key={option.value}
              className={`inline-flex items-center mt-3 cursor-pointer `}
            >
              <input
                type="radio"
                className="h-5 w-5 accent-cyan-600"
                value={option.value}
                checked={selectedOption === option.value}
                onChange={() => onChange(option.value)}
              />
              <span className={`ml-2 text-gray-700 text-xs}`}>
                {option.label}
              </span>
            </label>
          ))}
        </div>
        {error && <label className="text-red-400 text-xs">{error}</label>}
      </div>
    </>
  );
};
