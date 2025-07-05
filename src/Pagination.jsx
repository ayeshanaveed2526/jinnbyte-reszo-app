import React from 'react';

const Pagination = ({ currentPage, totalPages, itemsPerPage, totalItems, onPageChange }) => {
  return (
    <div className="flex justify-between items-center bg-[#131E2E] mt-2 px-4 py-4 rounded-md">
      <div className="text-sm text-gray-400">
        {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
      </div>
      <div className="flex space-x-2">
        <button
          className="px-3 py-1 rounded bg-gray-700 text-gray-300 disabled:opacity-50"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, idx) => (
          <button
            key={idx + 1}
            className={`px-3 py-1 rounded ${
              currentPage === idx + 1
                ? "bg-[#D0968B] text-white"
                : "bg-gray-700 text-gray-300"
            }`}
            onClick={() => onPageChange(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
        <button
          className="px-3 py-1 rounded bg-gray-700 text-gray-300 disabled:opacity-50"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
