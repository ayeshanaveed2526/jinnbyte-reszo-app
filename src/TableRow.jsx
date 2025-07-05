import React from 'react';

const TableRow = ({ item, isLast }) => (
  <div
    className={`flex flex-row justify-between p-4 font-normal text-sm text-white bg-[#131E2E] border-b border-gray-700 ${
      isLast ? "rounded-b-md" : ""
    }`}
  >
    <div className="w-1/12">{item.id}</div>
    <div className="w-3/12">{item.restaurant}</div>
    <div className="w-3/12">{item.customer}</div>
    <div className="w-5/12">{item.date}</div>
  </div>
);

export default TableRow;
