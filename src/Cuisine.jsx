import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import BookingPage from './BookingPage'
import { useState } from 'react'
export default function Cuisine() {
    const [deleteId, setDeleteId] = useState(null);
    const cuisineData = [
        "BBQ/Grilled",
         "Continental",
    "Vegetarian",
    "Seafood",
    "Asian",
    "Fusion"
    ]
const [data, setData] = useState(
    Array.from({ length: 50 }, (_, index) => ({
      id: index + 1,
      Image: (
        <img
          src="icon (10).png"
          alt="logo"
          className="w-8 bg-white h-8 rounded-full"
        />
      ),
      Cusine: cuisineData[index % cuisineData.length], 
    }))
  );
  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
    setDeleteId(null);
  };
  const allcolumns = [
    { label: "No#", accessor: "id", width: "w-1/12" },
    { label: "Image", accessor: "Image", width: "w-1/12" },
    { label: "Cusine Name", accessor: "Cusine", width: "w-3/12" },
    {
      label: "Action",
      accessor: "action",
      width: "w-2/12",
      cell: (row) => (
        <div className="flex gap-2">
          <button>
            <img src="viewicon.png" alt="" />
          </button>
          <button onClick={() => setDeleteId(row.id)}>
            <img src="deleteicon.png" alt="" />
          </button>
          <button>
            <img src="editicon.png" alt="" />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className='bg-gray-950 min-h-screen'>
        <Navbar/>
        <div className='flex flex-row '>
            <Sidebar/>
             <div className="flex-1 ml-8 px-4 py-4">
          <div className="text-white text-2xl font-semibold mb-6">
            <h2>Cuisine</h2>
          </div>
          <BookingPage
          showSearch={true}
          searchPlaceholder="Search Here"
 columns={allcolumns}
            data={data}
            itemsPerPage={6}
          />
        </div>
      </div>
      </div>
        {deleteId && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-[#1B2D47] rounded-lg shadow-lg p-8 w-[440px] h-[285px] gap-[15px] flex flex-col items-center justify-center">
            <img src="deleteicon.png" alt=""  />
            <div className="text-white text-lg mb-4 font-semibold font-onset text-center ">Are you sure you want to delete this Cuisine? 
              <div className="text-gray-300 font-normal mt-2 "> 
               This action cannot be undone. The cuisine will be permanently removed from the database.
              </div>
            </div>
            <div className="flex justify-end gap-4">
              <button
                className="px-7 py-2 border border-white text-white rounded-[8px]"
                onClick={() => setDeleteId(null)}
              >
                Cancel
              </button>
              <button
                className=" bg-[#FF5655] text-white hover:bg-red-600 rounded-[8px] px-7 py-2 "
                onClick={() => handleDelete(deleteId)}
              >
                Yes, Delete it
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
