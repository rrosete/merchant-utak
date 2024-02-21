import React from 'react';

export const Table = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto rounded-tr-3xl rounded-tl-3xl mb-20 shadow-md">
      <table className="min-w-full border  text-left">
        <thead>
          <tr className="text-white bg-cyan-700">
            {columns.map((column, index) => (
              <th key={index} className=" px-4 py-4">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="even:bg-cyan-100 odd:bg-white">
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="p-4">
                    {row[column.field]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr className="bg-white">
              <td rowSpan={7} className="p-4">
                No data found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
