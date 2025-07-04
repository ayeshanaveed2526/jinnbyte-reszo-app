import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
export default function CustomerMang() {
   
   
    
  return (
    <div>
      <div className='bg-slate-950 min-h-screen '>
        <Navbar/>
         <Sidebar/>
        <div className='ml-[300px] px-8 pt-8 '>
             <div> 
                <div className=' bg-slate-950 rounded-md px-8 py-4'>
<h2 className='text-white text-2xl px-6 py-2 font-semibold'>Customer Managment</h2>
         </div>
             </div>
        </div>
      </div>
    
      
    </div>
  )}

