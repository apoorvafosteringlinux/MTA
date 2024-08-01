import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { Search } from "lucide-react";

const Maker = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginationRef = useRef(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_MAKER_URL);
        setData(response.data);
        console.log("DATA: ",response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (paginationRef.current) {
        paginationRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    handleScroll();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split("-");
    const date = new Date(`${year}-${month}-${day}`);
    return date;
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;


  const filteredData = data.filter((d) => {
    const itemDate = parseDate(d.created_ON);
    if (startDate && endDate) {
      const startDateTime = new Date(startDate);
      const endDateTime = new Date(endDate);
      endDateTime.setHours(23, 59, 59, 999); // Set end of day
      return itemDate >= startDateTime && itemDate <= endDateTime;
    } else if (startDate) {
      const startDateTime = new Date(startDate);
      return itemDate >= startDateTime;
    } else if (endDate) {
      const endDateTime = new Date(endDate);
      endDateTime.setHours(23, 59, 59, 999); // Set end of day
      return itemDate <= endDateTime;
    } else {
      return true; // No date range filter applied
    }
  });
  


  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const renderPagination = () => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(filteredData.length / itemsPerPage); i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`px-3 py-2 border cursor-pointer ${
            currentPage === i ? 'bg-blue-500 text-white' : 'bg-white text-black'
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return (
      <div ref={paginationRef} className="flex justify-center mt-4">
        <nav aria-label="Pagination">
          <ul className="flex">
            {currentPage > 1 && (
              <button
                className="px-3 py-2 border cursor-pointer bg-white text-black mr-2"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                &lt;
              </button>
            )}
            {pageNumbers}
            {currentPage < Math.ceil(filteredData.length / itemsPerPage) && (
              <button
                className="px-3 py-2 border cursor-pointer bg-white text-black ml-2"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                &gt;
              </button>
            )}
          </ul>
        </nav>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="table-container mt-4">
          <div className="flex justify-between ">
            <div className="ml-16">
              <label htmlFor="activity">Activity ID :</label>
              <input
                type="text"
                id="activity"
                className="rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <button>
                <Search />
              </button>
            </div>

            <div>
              <span>
                <label htmlFor="startDate">From Date: </label>
                <input
                  type="date"
                  id="startDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </span>

              <span className="ml-4">
                <label htmlFor="endDate">To Date: </label>
                <input
                  type="date"
                  id="endDate"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </span>

              <button
                className="bg-sky-400 rounded-lg py-1.5 px-4 ml-2"
                onClick={() => setCurrentPage(1)}
              >
                Submit
              </button>
            </div>
          </div>

          <div className="container mx-auto p-10">
            <h1 className="text-2xl font-bold mb-4">
              Number of Activities in Maker Checker Queue - {filteredData.length}
            </h1>
            <div className="bg-black h-1"></div>
            <div className="overflow-x-auto mt-16">
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 bg-[#dfd3e0]">Activity ID</th>
                    <th className="px-4 py-2 bg-[#dfd3e0]">Activity Description</th>
                    <th className="px-4 py-2 bg-[#dfd3e0]">Customer ID</th>
                    <th className="px-4 py-2 bg-[#dfd3e0]">Customer Name</th>
                    <th className="px-4 py-2 bg-[#dfd3e0]">Account No.</th>
                    <th className="px-4 py-2 bg-[#dfd3e0]">Status</th>
                    <th className="px-4 py-2 bg-[#dfd3e0]">Maker ID</th>
                    <th className="px-4 py-2 bg-[#dfd3e0]">Created On</th>
                    {/* <th className="px-4 py-2 bg-[#dfd3e0]">Checker ID</th>
                    <th className="px-4 py-2 bg-[#dfd3e0]">Authorized/Returned On</th>
                    <th className="px-4 py-2 bg-[#dfd3e0]">Verifier ID</th>
                    <th className="px-4 py-2 bg-[#dfd3e0]">Verified/Declined On</th>
                    <th className="px-4 py-2 bg-[#dfd3e0]">Closer ID</th> */}
                  </tr>
                </thead>
                <tbody>
                  {currentItems.length > 0 ? (
                    currentItems.map((d) => (
                      <tr key={d.id} className="even:bg-gray-100">
                        <td className="border px-4 py-2">{d.activity_ID}</td>
                        <td className="border px-4 py-2">{d.activity_DESCRIPTION}</td>
                        <td className="border px-4 py-2">{d.customer_ID}</td>
                        <td className="border px-4 py-2">{d.customer_NAME}</td>
                        <td className="border px-4 py-2">{d.account_NUMBER}</td>
                        <td className="border px-4 py-2">{d.status}</td>
                        <td className="border px-4 py-2">{d.maker_ID}</td>
                        <td className="border px-4 py-2">{d.created_ON}</td>
                        {/* <td className="border px-4 py-2">{d.checker_ID}</td>
                        <td className="border px-4 py-2">{d.authorized_ON}</td>
                        <td className="border px-4 py-2">{d.verifier_ID}</td>
                        <td className="border px-4 py-2">{d.verified_ON}</td>
                        <td className="border px-4 py-2">{}</td> */}
                        
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="11" className="text-center py-4">
                        No data available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          {renderPagination()}
        </div>
      </div>
    </div>
  );
}

export default Maker;
