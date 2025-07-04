import React from 'react'

export default function EmptyTable() {
  return (
    <div>
      <div className="bg-[#131E2E] border border-gray-700 rounded-xl p-5 ">
<div className=' bg-[#1B2D47] border border-gray-600 rounded-xl px-4 py-2 text-gray-400 flex flex-row '>
    <img src="searchicon.png" alt="search" />
   <p>Search by name or email</p>
</div>
<div className='bg-[#0B111A] flex flex-row px-4 py-2 text-white gap-8'>
   <div>No#</div>
   <div>Image</div>
   <div>Full Name</div>
   <div>Email</div>
   <div>Phone Number</div>
   <div>Action</div>
</div>
      </div>
    </div>
  )
}
