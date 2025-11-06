import React from "react";

const CommonTable = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto w-full rounded-2xl border border-gray-200 shadow-md bg-white/95 backdrop-blur-sm">
      <table className="min-w-full text-base text-gray-800 border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-gray-100 to-gray-200 text-black">
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-6 py-4 font-semibold text-left border-b border-gray-200 tracking-wide"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((row, index) => (
              <tr
                key={row.id || index}
                className="hover:bg-indigo-50 transition-colors duration-200 border-b border-gray-100"
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className="px-6 py-4 text-left text-gray-700 font-medium"
                  >
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="py-10 text-center text-gray-500 font-medium"
              >
                No data found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CommonTable;
