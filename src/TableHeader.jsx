import React from 'react';

const TableHeader = () => (
  <div className='bg-[#0B111A] flex flex-row justify-between p-4 font-normal text-sm text-white border-b border-gray-700 rounded-t-md'>
    <div className="w-1/12">No#</div>
    <div className="w-3/12">Restaurant Name</div>
    <div className="w-3/12">Customer Name</div>
    <div className="w-5/12">Date and Time</div>
  </div>
);

export default TableHeader;
