import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import EmptyTable from './EmptyTable'
export default function CustomerMang() {
   
   
    
  return (
    <div>
       <div className="bg-gray-950 min-h-screen">
               <Navbar />
               <div className="flex flex-row">
                 <Sidebar />
                 <div >
                   <div className="ml-6 ">
              <div className="flex flex-col w-full h-screen">
               <div className="text-white text-2xl px-6 py-4 font-semibold "><h2>Customer Management</h2></div>
                 <EmptyTable    />
         </div>
       
             </div>
             
        </div>
      </div>
    </div>
      
    </div>
  )}

