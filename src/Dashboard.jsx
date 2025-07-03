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
        <div className="flex-1 justify-between  p-5 ">
          <div className="text-white font-onset font-semibold text-2xl  py-4">
            <h2> Dashboard</h2>
          </div>
          <div className="flex flex-row gap-4 text-white px-6 ">
            <div className="flex flex-row justify-between items-start bg-[#131E2E] p-6 h-40 w-[353.33px] rounded-xl gap-2">
              <div className="flex flex-col gap-2">
              Total Customers
                <div className="font-semibold font-onset text-2xl">
                  <h1>1.5K+</h1>
                </div>
               <div className="flex flex-row items-center gap-2">
  <img src="graph1.png" alt="" className="w-12 h-4" />
  <span className="text-[#CCCCCC] text-xs font-normal">vs last year</span>
</div>
              </div>

              <img src="Frame1.png" alt="icon" className="w-8 h-8 mt-1 ml-auto" />
            </div>
           
            <div className="flex flex-row justify-between items-start bg-[#131E2E] p-6 h-40 w-[353.33px] rounded-xl gap-2">
              <div className="flex flex-col gap-2">
              Total Restaurants
                <div className="font-semibold font-onset text-2xl">
                  <h1>25</h1>
                </div>
               <div className="flex flex-row items-center gap-2">
  <img src="graph2.png" alt="" className="w-12 h-4" />
  <span className="text-[#CCCCCC] text-xs font-normal">vs last year</span>
</div>
              </div>

              <img src="Frame2.png" alt="icon" className="w-8 h-8 mt-1 ml-auto" />
            </div>
           
            <div className="flex flex-row justify-between items-start bg-[#131E2E] p-6 h-40 w-[353.33px] rounded-xl gap-2">
              <div className="flex flex-col gap-2">
              Total Reservations
                <div className="font-semibold font-onset text-2xl">
                  <h1>1000</h1>
                </div>
               <div className="flex flex-row items-center gap-2">
  <img src="graph1.png" alt="" className="w-12 h-4" />
  <span className="text-[#CCCCCC] text-xs font-normal">vs last year</span>
</div>
              </div>

              <img src="Frame3.png" alt="icon" className="w-8 h-8 mt-1 ml-auto" />
            </div>
           
          </div>
        </div>
        </div>
      </div>
     
  </div>

   </>
   
  );
}
