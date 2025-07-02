import React from "react";

export default function Dashboard() {
  return (
    <div className="bg-gray-950">
      <div className="bg-[#131E2E] border-[1px] border-[#232931] flex flex-row justify-between px-4 py-3">
        <div className="min-w-44">
          <img src="Frame 1618875786.png" alt="Logo Reszo" />
        </div>
        <div className="flex flex-row justify-between items-center gap-6">
          <div>
            <img src="icon.png" alt="bell icon" />
          </div>
          <div>
            <img src="Frame 1618875782.png" alt="pfp pic" />
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-[#131E2E] border-[1px] border-[#232931] px-6 py-4 w-[300px] h-[1045px]">
       <div className="flex flex-col gap-6 text-white">
         <div className="flex gap-3 bg-[#B04759] px-4 py-3 rounded-[12px]  max-w-[250px] w-72 h-12">
          <div className="w-6 h-6"><img src="icon1.png" alt="icon" /></div>
         <div> <a href="Dashboard">  Dashboard</a></div>
          
        </div>
         <div className="flex items-center gap-3">
          <div className="w-6 h-6"><img src="icon2.png" alt="icon" /></div>
         <div> <a href="Dashboard">  Customer Management</a></div>
          
        </div>
         <div className="flex items-center gap-3">
          <div className="w-6 h-6"><img src="icon3.png" alt="icon" /></div>
         <div> <a href="Dashboard">  Restaurant Management</a></div>
          
        </div>
         <div className="flex items-center gap-3">
          <div className="w-6 h-6"><img src="icon4.png" alt="icon" /></div>
         <div> <a href="Dashboard">  Cuisine</a></div>
          
        </div>
         <div className="flex items-center gap-3">
          <div className="w-6 h-6"><img src="icon5.png" alt="icon" /></div>
         <div> <a href="Dashboard">  Help  and Support</a></div>
          
        </div>
        
       </div>
       
      </div>
    </div>
  );
}
