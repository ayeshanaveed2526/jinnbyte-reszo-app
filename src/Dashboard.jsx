import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import BookingTable from "./BookingTable";
import StatCard from "./StatCard";

export default function Dashboard() {
  return (
    <>
      <div>
        <div className="bg-gray-950 min-h-screen">
          <Navbar />
          <div className="flex flex-row">
            <Sidebar />
            <div >
              <div className="ml-8 ">
         <div className="flex flex-col w-full h-screen">
          <div className="text-white text-2xl px-6 py-2 font-semibold "><h2>Dashboard</h2></div>
                <div className="flex flex-row justify-between w-full gap-3 px-6 mt-1">
      <StatCard
        title="Total Customers"
        value="1.5K+"
        graphSrc="graph1.png"
        iconSrc="Frame1.png"
      />
      <StatCard
        title="Total Restaurants"
        value="25"
        graphSrc="graph2.png"
        iconSrc="Frame2.png"
      />
      <StatCard
        title="Total Reservations"
        value="1000"
        graphSrc="graph1.png"
        iconSrc="Frame3.png"
      />
    </div>
            

            <div className="px-6 mt-6">
              <BookingTable />
            </div>
            </div>
            </div>
         </div>
          </div>
        </div>
      </div>
    </>
  );
}
