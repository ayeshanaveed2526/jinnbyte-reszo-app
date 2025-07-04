import React, { useState } from 'react';

const bookingsData = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  restaurant: "Liberty Bite Bistro",
  customer: "Stephan",
  date: "Mar 28, 2025, 10:00 AM - 11:00 AM"
}));

const BookingTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;


  const totalPages = Math.ceil(bookingsData.length / itemsPerPage);
  const currentData = bookingsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
     <div className='bg-[#131E2E]'>
  <div className='bg-[#131E2E] text-white border border-gray-700 rounded-md'>
    <div className='flex flex-row justify-between p-4 font-medium font-onset'>
      <h2> Upcoming Bookings ({bookingsData.length})</h2>
      <div className="px-4 py-2 rounded text-sm">28/04/2025 📅</div>
    </div>
    <div className='bg-[#0B111A] flex flex-row justify-between p-4 font-normal text-sm text-white border-b border-gray-700 rounded-t-md'>
      <div className="w-1/12">No#</div>
      <div className="w-3/12">Restaurant Name</div>
      <div className="w-3/12">Customer Name</div>
      <div className="w-5/12">Date and Time</div>
    </div>
    {currentData.map((item, idx) => (
      <div
        key={item.id}
        className={`flex flex-row justify-between p-4 font-normal text-sm text-white bg-[#131E2E] border-b border-gray-700 ${
          idx === currentData.length - 1 ? "rounded-b-md" : ""
        }`}
      >
        <div className="w-1/12">{item.id}</div>
        <div className="w-3/12">{item.restaurant}</div>
        <div className="w-3/12">{item.customer}</div>
        <div className="w-5/12">{item.date}</div>
      </div>
    ))}
  </div>
  <div className="flex justify-between items-center bg-[#131E2E] mt-2 px-4 py-4  rounded-md">
    <div className="text-sm text-gray-400">
      {`${(currentPage - 1) * itemsPerPage + 1} - ${
        Math.min(currentPage * itemsPerPage, bookingsData.length)
      } of ${bookingsData.length}`}
    </div>
    <div className="flex space-x-2">
      <button
        className="px-3 py-1 rounded bg-gray-700 text-gray-300 disabled:opacity-50"
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
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
          onClick={() => setCurrentPage(idx + 1)}
        >
          {idx + 1}
        </button>
      ))}
      <button
        className="px-3 py-1 rounded bg-gray-700 text-gray-300 disabled:opacity-50"
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  </div>
</div>
      </div>
    
    
  )
}

export default BookingTable
