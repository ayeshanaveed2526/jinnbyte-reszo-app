import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

import EmptyTable from './EmptyTable'

export default function CustomerMang() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex-1 ml-8 px-6 py-4">
          <div className="text-white text-2xl font-semibold mb-6">
            <h2>Customer Management</h2>
          </div>
        <div className='w-full'>  <EmptyTable /></div>
        </div>
      </div>
    </div>
  )
}