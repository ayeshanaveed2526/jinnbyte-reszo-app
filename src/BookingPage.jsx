// pages/BookingPage.jsx
import React from "react";
import Table from "./Table";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";


const BookingPage = ({
  showHeadLeft = false,
  showHeadRight = false,
  showSearch = false,
  showTabs = false,
  columns,
  data,
  itemsPerPage,
  searchPlaceholder = "Search by name or email",
}) => {
     const [selectedDate, setSelectedDate] = useState();
  const mainData = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    restaurant: "Liberty Bite Bistro",
    customer: "Stephan",
    date: "Mar 28, 2025, 10:00 AM - 11:00 AM",
    status: i % 3 === 0 ? "Approved" : i % 3 === 1 ? "Pending" : "Rejected",
  }));
 const  mainColumns=[
          { label: "No#", accessor: "id", width: "w-1/12" },
          { label: "Restaurant", accessor: "restaurant", width: "w-3/12" },
          { label: "Customer", accessor: "customer", width: "w-3/12" },
          { label: "Date", accessor: "date", width: "w-5/12" },
        ];
        const tableData = data || mainData;
  const tableColumns = columns || mainColumns;
  return (
    <div className="p-6 bg-[#131E2E]">
      <Table
        data={tableData}
       columns={tableColumns}
       itemsPerPage={itemsPerPage}
        
        headLeft={
       showHeadLeft && <div className="text-sm font-medium">Upcoming Bookings ({tableData.length})</div>
        }
        headRight={
          showHeadRight &&  <div className="flex items-center gap-2">
        
            <DatePicker
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              placeholderText="Select date"
              className="bg-[#0B111A] text-white px-2 py-1 "
            />
              <img src="Group.png" alt="" />
          </div>
        }
        searchableFields={showSearch ? ["restaurant", "customer"] : []}
        searchPlaceholder={searchPlaceholder}
        tabs={showTabs ? ["Approved", "Pending", "Rejected"] : []}
      />
    </div>
  );
};

export default BookingPage;
