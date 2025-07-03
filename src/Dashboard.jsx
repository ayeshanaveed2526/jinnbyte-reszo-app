import React from "react";  
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
export default function Dashboard() {
  return (
   <>
     
<div>
     
        <div className="bg-gray-950 min-h-screen">
       
<Navbar />
          <div className="flex flex-row">
            <Sidebar />
        <div className="flex-1 justify-between w-[1092px] h-[31px] p-5 ">
          <div className="text-white font-onset font-semibold text-2xl  py-4">
            <h2> Dashboard</h2>
          </div>
          <div className="flex flex-row gap-4 text-white ">
            <div className="flex flex-row justify-between items-center bg-[#131E2E] p-6 h-40 w-[353.33px] rounded-xl gap-2">
              <div className="flex flex-col gap-2">
                <span>Total Customers</span>
                <div className="font-semibold font-onset text-2xl">
                  <h1>1.5K+</h1>
                </div>
                <div className="flex flex-col gap-1">
                  <img src="graph1.png" alt="" className="w-12 h-4" />
                  <div className="text-[#CCCCCC] text-xs font-normal">
                    vs last year
                  </div>
                </div>
              </div>

              <img src="Frame1.png" alt="icon" className="w-8 h-8 ml-auto" />
            </div>
            <div className="bg-[#131E2E]  p-6 h-40 w-[353.33px] rounded-xl gap-3">
              Total Resturants
            </div>
            <div className="bg-[#131E2E] p-6 h-40 w-[353.33px] rounded-xl gap-3">
              Total Reservations
            </div>
          </div>
        </div>
        </div>
      </div>
     
  </div>

   </>
   
  );
}
