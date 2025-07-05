import React, { useState } from "react";
import Table from "./Table";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const data = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    restaurant: "Liberty Bite Bistro",
    customer: "Stephan",
    date: "Mar 28, 2025, 10:00 AM - 11:00 AM",
    status: i % 3 === 0 ? "Approved" : i % 3 === 1 ? "Pending" : "Rejected",
  }));

  return (
    <div className="p-6 bg-[#0B111A] min-h-screen">
      <Table
        headLeft={<div className="text-sm">Upcoming Bookings ({data.length})</div>}
        headRight={
          <div className="flex items-center ">
       
            <DatePicker
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              placeholderText="Select date"
              className="bg-[#0B111A] text-white px-1 py-1 rounded"
            />
                <span><img src="Group.png" alt="" /></span>
          </div>
        }
        data={data}
        columns={[
          { label: "No#", accessor: "id", width: "w-1/12" },
          { label: "Restaurant", accessor: "restaurant", width: "w-3/12" },
          { label: "Customer", accessor: "customer", width: "w-3/12" },
          { label: "Date", accessor: "date", width: "w-5/12" },
        ]}
        searchableFields={["restaurant", "customer"]}
        tabs={["Approved", "Pending", "Rejected"]}
      />
    </div>
  );
};

export default BookingPage;