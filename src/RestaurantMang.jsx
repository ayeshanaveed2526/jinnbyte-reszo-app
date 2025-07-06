import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import BookingPage from "./BookingPage";

export default function RestaurantMang() {
  const data = Array.from({ length: 50 }, (_, index) => ({
     logo: <img src="icon (10).png" alt="logo" className="w-8 h-8 rounded-full" />,
    restaurant: "Liberty Bite Bistro",
    email: "Pedro.Schultz@gmail.com",
    phone: "880-360-9764",
    address: "1099 First Ave, Abuja, Nigeria",
     status: "Approved",
  }));
  
  
  // const newColumns = [
  //   { label: "Logo", accessor: "logo", width: "w-1/12" },

  //   { label: "Email", accessor: "email", width: "w-3/12" },
  //   { label: "Phone Number", accessor: "phone", width: "w-2/12" },
  //   { label: "Address", accessor: "address", width: "w-3/12" },
  // ];
  // const colums = [
  //   { label: "Restaurant Name", accessor: "restaurant", width: "w-3/12" },
  // ];

  const allcolumns = [
        { label: "Logo", accessor: "logo", width: "w-1/12" },
    { label: "Restaurant Name", accessor: "restaurant", width: "w-3/12" },
    { label: "Email", accessor: "email", width: "w-3/12" },
    { label: "Phone Number", accessor: "phone", width: "w-2/12" },
    { label: "Address", accessor: "address", width: "w-3/12" },
  ];

  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex-1 ml-8 px-6 py-4">
          <div className="text-white text-2xl font-semibold mb-6">
            <h2>Resturant Management</h2>
          </div>
          <BookingPage
            columns={allcolumns}
            data={data}
            showTabs={true}
            showSearch={true}
            itemsPerPage={8}
          />
        </div>
      </div>
    </div>
  );
}
