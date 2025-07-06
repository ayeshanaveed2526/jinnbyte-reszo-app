import React, { useState, useMemo } from "react";

const Table = ({
  headLeft,
  headRight,
  data = [],
  columns = [],
  searchableFields = [],
  tabs = [],
  itemsPerPage = 4,
  searchPlaceholder = "Search by name or email",
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedTab, setSelectedTab] = useState(
    tabs && tabs.length > 0 ? tabs[0] : ""
  );

  const filteredByTab =
    tabs && tabs.length > 0
      ? data.filter(
          (item) => item.status?.toLowerCase() === selectedTab.toLowerCase()
        )
      : data;

  const filteredData = useMemo(() => {
    if (!search || searchableFields.length === 0) return filteredByTab;
    return filteredByTab.filter((item) =>
      searchableFields.some((field) =>
        String(item[field]).toLowerCase().includes(search.toLowerCase())
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
      {(headLeft || headRight) && (
        <div className="flex justify-between items-center px-4 py-4 font-medium">
          <div>{headLeft}</div>
          <div>{headRight}</div>
        </div>
      )}

      {tabs && tabs.length > 0 && (
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
                  ? "text-[#DFCAB7] underline underline-offset-8 decoration-[#DFCAB7]"
                  : "text-gray-300 hover:text-[#DFCAB7] hover:underline hover:underline-offset-8 hover:decoration-[#DFCAB7]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      )}

      {/* <input
            type="text"
            
            placeholder= " Search by Name or Email"
            className=" p-2 rounded bg-[#1B2D47] text-white text-sm border border-gray-600 w-[342px]"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          /> */}
      {searchableFields && searchableFields.length > 0 && (
        <div className="px-4 mb-3 ">
          <div className=" bg-[#1B2D47] border border-gray-600 rounded-xl px-4 py-2 text-gray-400 flex flex-row h-11 w-80 mb-3 ">
            <img src="searchicon.png" alt="search" />
            <input
              type="text"
              placeholder={searchPlaceholder}
              className="text-gray-400 text-sm font-semibold ml-2 w-full bg-transparent outline-none"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>
      )}

      <div className="bg-[#0B111A] flex flex-row justify-between p-4 font-normal text-sm text-white border-b border-gray-700 rounded-t-md">
        {columns.map((col, idx) => (
          <div key={idx} className={col.width || "w-auto"}>
            {col.label}
          </div>
        ))}
      </div>

      {currentData.length > 0 ? (
        currentData.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-row justify-between p-4 text-sm border-b border-gray-700 ${
              idx === currentData.length - 1 ? "rounded-b-md" : ""
            }`}
          >
           {columns.map((col, i) => (
  <div key={i} className={col.width || "w-auto"}>
    {col.cell
      ? col.cell(item)
      : React.isValidElement(item[col.accessor])
        ? item[col.accessor]
        : String(item[col.accessor] ?? "")}
  </div>
))}
          </div>
        ))
      ) : (
        <div className="text-center text-gray-400 py-6">No data available</div>
      )}

      {filteredData.length > itemsPerPage && (
        <div className="flex justify-between items-center px-4 py-4">
          <div className="text-sm text-white">
            <span>No of items show per page</span>
            {` ${(currentPage - 1) * itemsPerPage + 1} - ${Math.min(
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
      )}
    </div>
  );
};

export default Table;
