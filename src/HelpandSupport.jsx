import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Support from './Support'

export default function HelpandSupport() {
  return (
    <div>
      <div  className="bg-gray-950 min-h-screen">
        <Navbar/>
          <div className="flex flex-row">
        <Sidebar />
        <div className="flex-1 ml-8 px-6 py-4">
          <div className="text-white text-2xl font-semibold mb-6">
            <h2>Help and Support</h2>
          </div>
          <Support heading={"Customer Support"} />
     <div className='mt-6'><Support heading={"Restaurant Support"} /></div>
        </div>
      </div>
    </div>
    </div>
  )
}
