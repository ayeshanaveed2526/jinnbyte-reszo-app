import React from 'react'
import Logout from './Logout'
import { Link } from 'react-router-dom'
export default function Sidebar() {
  return (
    <div>
       <div className="flex flex-row">
        <div className="flex flex-col bg-[#131E2E] border-[1px] border-[#232931] px-6 py-4 w-[300px] h-[calc(100vh-64px)]  ">
          <div className="flex flex-col h-full">
            <div className="flex flex-col gap-6 text-white">
              <div className="flex flex-col gap-6">
                <div className="flex gap-3 active:bg-[#B04759] hover:bg-[#B04759] px-4 py-3 rounded-[12px] max-w-[250px] w-72 h-12 items-center">
                  <img src="icon1.png" alt="icon" className="w-6 h-6" />
                  <a href="Dashboard">Dashboard</a>
                    </div>
                 
    
                <div className="flex items-center gap-3 px-4 py-3 active:bg-[#B04759] hover:bg-[#B04759] rounded-[12px]">
                  <img src="icon2.png" alt="icon" className="w-6 h-6" />
                 <Link to="/CustomerMang">Customer Management</Link>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 hover:bg-[#B04759] active:bg-[#B04759] rounded-[12px] ">
                  <img src="icon3.png" alt="icon" className="w-6 h-6" />
                  <a href="Dashboard">Restaurant Management</a>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 active:bg-[#B04759] hover:bg-[#B04759] rounded-[12px]">
                  <img src="icon4.png" alt="icon" className="w-6 h-6" />
                  <a href="Dashboard">Cuisine</a>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 active:bg-[#B04759] hover:bg-[#B04759] rounded-[12px]">
                  <img src="icon5.png" alt="icon" className="w-6 h-6" />
                  <a href="Dashboard">Help and Support</a>
                </div>
              </div>
            </div>

           
          </div>
              <div>
<Logout />
</div>
        </div>
       
      </div>
   
    </div>
    );
  }