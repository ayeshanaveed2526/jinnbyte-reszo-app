import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import StatCard from "./StatCard";
import BookingPage from "./BookingPage";

export default function Dashboard() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex-1 flex flex-col items-center px-2 sm:px-4 md:px-8 py-4">
          <div className="w-full max-w-6xl">
            <div className="text-white text-2xl font-semibold py-2">
              <h2>Dashboard</h2>
            </div>
            <div className="flex flex-row flex-wrap justify-between gap-3 mt-1">
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
            <div className="mt-5">
              <BookingPage showHeadLeft={true} showHeadRight={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}