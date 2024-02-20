import React from 'react';

export const Table = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto rounded-tr-3xl rounded-tl-3xl mb-20">
      <table className="min-w-full border bg-cyan-700 text-left">
        <thead>
          <tr className="text-white">
            {columns.map((column, index) => (
              <th key={index} className=" px-4 py-4">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="even:bg-cyan-100 odd:bg-white">
              {columns.map((column, colIndex) => (
                <td key={colIndex} className=" px-4 py-4">
                  {row[column.field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
