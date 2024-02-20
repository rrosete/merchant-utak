import React from 'react';

export const RadioButton = ({
  label,
  error,
  options,
  selectedOption,
  onChange,
  title,
  ...props
}) => {
  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm mb-1">{title}</label>
        <div className="flex flex-row space-x-4">
          {options.map((option) => (
            <label
              key={option.id}
              className="inline-flex items-center mt-3 cursor-pointer"
            >
              <input
                type="radio"
                className="form-radio h-5 w-5 text-cyan-600"
                name="radioGroup"
                value={option.id}
                checked={selectedOption === option.id}
                onChange={() => onChange(option.id)}
              />
              <span className="ml-2 text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
};
