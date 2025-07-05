import React, { useState, useMemo } from "react";

const Table = ({
  headLeft,
  headRight,
  data = [],
  columns = [],
  searchableFields = [],
  tabs = [],
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTab, setSelectedTab] = useState(tabs?.[0] || "");
  const [search, setSearch] = useState("");

  const itemsPerPage = 5;


  const filteredByTab = selectedTab
    ? data.filter((item) => item.status?.toLowerCase() === selectedTab.toLowerCase())
    : data;

 
  const filteredData = useMemo(() => {
    return filteredByTab.filter((item) =>
      searchableFields.some((field) =>
        item[field]?.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, filteredByTab, searchableFields]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-[#131E2E] text-white border border-gray-700 rounded-md">
    
      <div className="flex justify-between items-center px-4 py-4 font-medium">
        <div>{headLeft}</div>
        <div>{headRight}</div>
      </div>

     
      {tabs.length > 0 && (
        <div className="flex space-x-4 px-4 mb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setSelectedTab(tab);
                setCurrentPage(1);
              }}
              className={`px-3 py-1 rounded ${
                selectedTab === tab
                  ? "bg-[#D0968B] text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

     
      {searchableFields.length > 0 && (
        <div className="px-4 mb-3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded bg-[#1B2D47] text-white text-sm border border-gray-600"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}

    
      <div className="bg-[#0B111A] flex flex-row justify-between p-4 font-normal text-sm text-white border-b border-gray-700 rounded-t-md">
        {columns.map((col, i) => (
          <div key={i} className={col.width || "w-auto"}>
            {col.label}
          </div>
        ))}
      </div>

    
      {currentData.map((item, idx) => (
        <div
          key={item.id}
          className={`flex flex-row justify-between p-4 text-sm border-b border-gray-700 ${
            idx === currentData.length - 1 ? "rounded-b-md" : ""
          }`}
        >
          {columns.map((col, i) => (
            <div key={i} className={col.width || "w-auto"}>
              {item[col.accessor]}
            </div>
          ))}
        </div>
      ))}

     
      <div className="flex justify-between items-center px-4 py-4">
        <div className="text-sm text-gray-400">
          {`${(currentPage - 1) * itemsPerPage + 1} - ${Math.min(
            currentPage * itemsPerPage,
            filteredData.length
          )} of ${filteredData.length}`}
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded bg-gray-700 text-gray-300 disabled:opacity-50"
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === idx + 1
                  ? "bg-[#D0968B] text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              {idx + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded bg-gray-700 text-gray-300 disabled:opacity-50"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
