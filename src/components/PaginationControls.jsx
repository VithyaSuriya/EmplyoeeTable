import React from "react";
import CommonButton from "./common/CommonButton";
import CommonSelect from "./common/CommonSelect";

const PaginationControls = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const perPageOptions = [
    { value: 5, label: "5" },
    { value: 10, label: "10" },
    { value: 25, label: "25" },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-8 px-8 py-5 bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex items-center gap-3 text-gray-700 text-base">
        <span className="font-semibold text-gray-700">Show</span>
        <CommonSelect
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          options={perPageOptions}
          className="w-24 border-gray-300 text-base font-medium"
        />
        <span className="font-semibold text-gray-700">entries per page</span>
      </div>

      <div className="flex items-center gap-3 text-gray-700 text-base">
        <CommonButton
          label="← Prev"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 font-medium hover:bg-indigo-50 disabled:opacity-50 transition-all duration-200"
        />

        <span className="text-gray-700 font-semibold">
          Page <strong className="text-indigo-600">{currentPage}</strong> of{" "}
          <strong>{totalPages || 1}</strong>
        </span>

        <CommonButton
          label="Next →"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 font-medium hover:bg-indigo-50 disabled:opacity-50 transition-all duration-200"
        />
      </div>
    </div>
  );
};

export default PaginationControls;
