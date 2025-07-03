import React from "react";

export default function Dashboard() {
  return (
    <div className="bg-gray-950 min-h-screen">
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

      <div className="flex flex-row">
        <div className="flex flex-col bg-[#131E2E] border-[1px] border-[#232931] px-6 py-4 w-[300px] h-[calc(100vh-64px)]">
          <div className="flex flex-col h-full">
            <div className="flex flex-col gap-6 text-white">
              <div className="flex flex-col gap-6">
                <div className="flex gap-3 bg-[#B04759] px-4 py-3 rounded-[12px] max-w-[250px] w-72 h-12 items-center">
                  <img src="icon1.png" alt="icon" className="w-6 h-6" />
                  <a href="Dashboard">Dashboard</a>
                </div>
                <div className="flex items-center gap-3 px-4 py-3">
                  <img src="icon2.png" alt="icon" className="w-6 h-6" />
                  <a href="Dashboard">Customer Management</a>
                </div>
                <div className="flex items-center gap-3 px-4 py-3">
                  <img src="icon3.png" alt="icon" className="w-6 h-6" />
                  <a href="Dashboard">Restaurant Management</a>
                </div>
                <div className="flex items-center gap-3 px-4 py-3">
                  <img src="icon4.png" alt="icon" className="w-6 h-6" />
                  <a href="Dashboard">Cuisine</a>
                </div>
                <div className="flex items-center gap-3 px-4 py-3">
                  <img src="icon5.png" alt="icon" className="w-6 h-6" />
                  <a href="Dashboard">Help and Support</a>
                </div>
              </div>
            </div>

            <div className="flex flex-row  gap-3 px-4 py-3 mt-auto text-white">
              <img src="icon (6).png" alt="icon" className="w-6 h-6" />
              <a href="Dashboard">Logout</a>
            </div>
          </div>
        </div>
        <div className="flex-1 justify-between w-[1092px] h-[31px] p-5 ">
          <div className="text-white font-onset font-semibold text-2xl">
            <h2> Dashboard</h2>
          </div>
          <div className="flex flex-row gap-4 text-white ">
            <div
              className="bg-[#131E2E] p-6 h-40 w-[353.33px] rounded-xl gap-2"
            >
              <div className=" flex flex-row text-white font-onset  text-base font-medium">
                Total Customer
                <div className="flex flex-row  gap-2 mt-2">
                   <img src="icon (9).png" alt="" />
                </div>
                <div className="text-3xl font-semibold ">1.5K</div>
              </div>
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
  );
}
