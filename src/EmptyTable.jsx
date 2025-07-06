import React from 'react'

const EmptyTable = () => {
  return (
    <div className="w-full">
      <div className="bg-[#131E2E] border border-gray-700 rounded-xl px-5 py-5 w-full min-w-full">
        <div className='bg-[#1B2D47] border border-gray-600 rounded-xl px-4 py-2 text-gray-400 flex flex-row h-11 w-80 mb-3'>
          <img src="searchicon.png" alt="search" />
          <input
            type="text"
            placeholder="Search by name or email"
            className='text-gray-400 text-sm font-semibold ml-2 w-full bg-transparent outline-none'
          />
        </div>
        
        <div className='rounded-xl mb-3'>
          <div className='bg-[#0B111A] flex flex-row justify-between px-4 py-2 text-white w-full border border-gray-700 rounded-t-md'>
            <div className="w-1/12">No#</div>
            <div className="w-1/12">Image</div>
            <div className="w-3/12">Full Name</div>
            <div className="w-3/12">Email</div>
            <div className="w-2/12">Phone Number</div>
            <div className="w-2/12">Action</div>
          </div>
          
          <div className='flex flex-col justify-center items-center w-full py-12 gap-8 border-l border-r border-b border-gray-700 rounded-b-md'>
            <img src="Component 5.png" alt="" />
            <div className='gap-2 text-center flex flex-col justify-center items-center'>
              <h4 className='text-lg text-white font-semibold font-onset'>No Data Available yet</h4>
              <p className='text-sm text-white'>Add a new customer to see them here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmptyTable