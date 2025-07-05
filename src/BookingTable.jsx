// import React, { useState } from 'react';
// import TableHeader from './TableHeader';
// import TableRow from './TableRow';
// import Pagination from './Pagination';

// const bookingsData = Array.from({ length: 20 }, (_, index) => ({
//   id: index + 1,
//   restaurant: "Liberty Bite Bistro",
//   customer: "Stephan",
//   date: "Mar 28, 2025, 10:00 AM - 11:00 AM"
// }));

// const BookingTable = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   const totalPages = Math.ceil(bookingsData.length / itemsPerPage);
//   const currentData = bookingsData.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   return (
//     <div className='bg-[#131E2E]'>
//       <div className='bg-[#131E2E] text-white border border-gray-700 rounded-md'>
//         <div className='flex flex-row justify-between p-4 font-medium font-onset'>
//           <h2> Upcoming Bookings ({bookingsData.length})</h2>
//           <div className="px-4 py-2 rounded text-sm">28/04/2025 📅</div>
//         </div>

//         <TableHeader />
//         {currentData.map((item, idx) => (
//           <TableRow
//             key={item.id}
//             item={item}
//             isLast={idx === currentData.length - 1}
//           />
//         ))}
//       </div>

//       <Pagination
//         currentPage={currentPage}
//         totalPages={totalPages}
//         itemsPerPage={itemsPerPage}
//         totalItems={bookingsData.length}
//         onPageChange={setCurrentPage}
//       />
//     </div>
//   );
// };

// export default BookingTable;
