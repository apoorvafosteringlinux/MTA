// import React, { useState, useEffect, useRef } from "react";
// import Navbar from "../Navbar";
// import Sidebar from "../Sidebar";
// import { Search } from "lucide-react";

// const Makercheckerstatus = () => {

//   const data = [
//     {
//       "id": 1,
//       "activityID":"000011",
//       "activityDes":"Customer Information",
//       "customerID":"1234567890",
//       "customerName":"abcd",
//       "accountNo":"NA",
//       "status":"",
//       "makerID":"",
//       "createdOn":"",
//       "checkerID":"",
//       "returnedOn":"",
//       "verifierOn":"",
//       "declinedOn":"",
//     },
//     {
//       "id": 2,
//       "activityID":"000012",
//       "activityDes":"Customer Information",
//       "customerID":"1234567890",
//       "customerName":"",
//       "accountNo":"",
//       "status":"",
//       "makerID":"",
//       "createdOn":"",
//       "checkerID":"",
//       "returnedOn":"",
//       "verifierOn":"",
//       "declinedOn":""
//     },
//     {
//       "id": 3,
//       "activityID":"000013",
//       "activityDes":"Customer Information",
//       "customerID":"34567890123",
//       "customerName":"",
//       "accountNo":"",
//       "status":"",
//       "makerID":"",
//       "createdOn":"",
//       "checkerID":"",
//       "returnedOn":"",
//       "verifierOn":"",
//       "declinedOn":"",
//     },
//     {
//       "id": 4,
//       "activityID":"000014",
//       "activityDes":"Customer Information",
//       "customerID":"12345673456",
//       "customerName":"",
//       "accountNo":"",
//       "status":"",
//       "makerID":"",
//       "createdOn":"",
//       "checkerID":"",
//       "returnedOn":"",
//       "verifierOn":"",
//       "declinedOn":"",
//     },
//     {
//       "id": 5,
//       "activityID":"000015",
//       "activityDes":"Customer Information",
//       "customerID":"087651234",
//       "customerName":"",
//       "accountNo":"",
//       "status":"",
//       "makerID":"",
//       "createdOn":"",
//       "checkerID":"",
//       "returnedOn":"",
//       "verifierOn":"",
//       "declinedOn":"",
//     },
//     {
//       "id": 6,
//       "activityID":"000016",
//       "activityDes":"Customer Information",
//       "customerID":"87654345678",
//       "customerName":"",
//       "accountNo":"",
//       "status":"",
//       "makerID":"",
//       "createdOn":"",
//       "checkerID":"",
//       "returnedOn":"",
//       "verifierOn":"",
//       "declinedOn":"",
//     },
//     {
//       "id": 7,
//       "activityID":"000017",
//       "activityDes":"Customer Information",
//       "customerID":"0987634567",
//       "customerName":"",
//       "accountNo":"",
//       "status":"",
//       "makerID":"",
//       "createdOn":"",
//       "checkerID":"",
//       "returnedOn":"",
//       "verifierOn":"",
//       "declinedOn":"",
//     },
//     {
//       "id": 8,
//       "activityID":"000018",
//       "activityDes":"Customer Information",
//       "customerID":"3456789876",
//       "customerName":"",
//       "accountNo":"",
//       "status":"",
//       "makerID":"",
//       "createdOn":"",
//       "checkerID":"",
//       "returnedOn":"",
//       "verifierOn":"",
//       "declinedOn":"",
//     }
//   ];

//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;
//   const totalPages = Math.ceil(data.length / itemsPerPage);
//   const paginationRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (paginationRef.current) {
//         paginationRef.current.scrollIntoView({ behavior: 'smooth' });
//       }
//     };

//     handleScroll();
//   }, [currentPage]);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

//   const renderPagination = () => {
//     const pageNumbers = [];

//     for (let i = 1; i <= totalPages; i++) {
//       pageNumbers.push(
//         <button
//           key={i}
//           className={`px-3 py-2 border cursor-pointer ${
//             currentPage === i ? 'bg-blue-500 text-white' : 'bg-white text-black'
//           }`}
//           onClick={() => handlePageChange(i)}
//         >
//           {i}
//         </button>
//       );
//     }

//     return (
//       <div ref={paginationRef} className="flex justify-center mt-4">
//         <nav aria-label="Pagination">
//           <ul className="flex">
//             {currentPage > 1 && (
//               <button
//                 className="px-3 py-2 border cursor-pointer bg-white text-black mr-2"
//                 onClick={() => handlePageChange(currentPage - 1)}
//               >
//                 &lt;
//               </button>
//             )}
//             {pageNumbers}
//             {currentPage < totalPages && (
//               <button
//                 className="px-3 py-2 border cursor-pointer bg-white text-black ml-2"
//                 onClick={() => handlePageChange(currentPage + 1)}
//               >
//                 &gt;
//               </button>
//             )}
//           </ul>
//         </nav>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="flex">
//         <Sidebar />
//         <div className="table-container mt-4">

//           <div className="flex justify-between ">
//             <div className="ml-16">
//               <label htmlFor="activity">Activity ID :</label>
//               <input
//                 type="text"
//                 id="activity"
//                 className="rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//               <button>
//                 <Search />
//               </button>
//             </div>

//             <div>
//               <span>
//                 <label htmlFor="activity">Form Date : </label>
//                 <input
//                   type="date"
//                   id="activity"
//                   className="rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </span>

//               <span className="ml-4">
//                 <label htmlFor="activity">To Date : </label>
//                 <input
//                   type="date"
//                   id="activity"
//                   className="rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </span>

//               <button className="bg-sky-400 rounded-lg py-1.5 px-4 ml-2">
//                 Submit
//               </button>
//             </div>
//           </div>

// <div className="container mx-auto p-10">
//       <h1 className="text-2xl font-bold mb-4">Maker-Checker Activity - 1</h1>
//       <div className='bg-black h-1'></div>
//       <div className="overflow-x-auto mt-16">
//         <table className="table-auto w-full">
//           <thead>
//             <tr>
//               <th className="px-4 py-2 bg-[#dfd3e0]">Activity ID</th>
//               <th className="px-4 py-2 bg-[#dfd3e0]">Activity Description</th>
//               <th className="px-4 py-2 bg-[#dfd3e0]">Customer ID</th>
//               <th className="px-4 py-2 bg-[#dfd3e0]">Customer Name</th>
//               <th className="px-4 py-2 bg-[#dfd3e0]">Account No.</th>
//               <th className="px-4 py-2 bg-[#dfd3e0]">Status</th>
//               <th className="px-4 py-2 bg-[#dfd3e0]">Maker ID</th>
//               <th className="px-4 py-2 bg-[#dfd3e0]">Created On</th>
//               <th className="px-4 py-2 bg-[#dfd3e0]">Checker ID</th>
//               <th className="px-4 py-2 bg-[#dfd3e0]">Returned On</th>
//               <th className="px-4 py-2 bg-[#dfd3e0]">Verifier On</th>
//               <th className="px-4 py-2 bg-[#dfd3e0]">Declined On</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentItems.map((item) => (
//               <tr key={item.id} className="even:bg-gray-100">
//                 <td className="border px-4 py-2">{item.activityID}</td>
//                 <td className="border px-4 py-2">{item.activityDes}</td>
//                 <td className="border px-4 py-2">{item.customerID}</td>
//                 <td className="border px-4 py-2">{item.customerName}</td>
//                 <td className="border px-4 py-2">{item.accountNo}</td>
//                 <td className="border px-4 py-2">{item.status}</td>
//                 <td className="border px-4 py-2">{item.makerID}</td>
//                 <td className="border px-4 py-2">{item.createdOn}</td>
//                 <td className="border px-4 py-2">{item.checkerID}</td>
//                 <td className="border px-4 py-2">{item.returnedOn}</td>
//                 <td className="border px-4 py-2">{item.verifierOn}</td>
//                 <td className="border px-4 py-2">{item.declinedOn}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     {renderPagination()}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Makercheckerstatus;










import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { Search } from "lucide-react";

const Makercheckerstatus = () => {


  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginationRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_MAKERCHECKERACTIVITY_URL);
        setData(response.data);
        // console.log(response.data)
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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const renderPagination = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
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
            {currentPage < totalPages && (
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
                <label htmlFor="activity">Form Date : </label>
                <input
                  type="date"
                  id="activity"
                  className="rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </span>

              <span className="ml-4">
                <label htmlFor="activity">To Date : </label>
                <input
                  type="date"
                  id="activity"
                  className="rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </span>

              <button className="bg-sky-400 rounded-lg py-1.5 px-4 ml-2">
                Submit
              </button>
            </div>
          </div>

<div className="container mx-auto p-10">
      <h1 className="text-2xl font-bold mb-4">Maker-Checker Activity - 1</h1>
      <div className='bg-black h-1'></div>
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
              <th className="px-4 py-2 bg-[#dfd3e0]">Checker ID</th>
              <th className="px-4 py-2 bg-[#dfd3e0]">Returned On</th>
              <th className="px-4 py-2 bg-[#dfd3e0]">Declined On</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((d) => (
              <tr key={d.id} className="even:bg-gray-100">
                <td className="border px-4 py-2">{d.activityid}</td>
                <td className="border px-4 py-2">{d.activitydes}</td>
                <td className="border px-4 py-2">{d.customerid}</td>
                <td className="border px-4 py-2">{d.customername}</td>
                <td className="border px-4 py-2">{d.accountno}</td>
                <td className="border px-4 py-2">{d.status}</td>
                <td className="border px-4 py-2">{d.makerid}</td>
                <td className="border px-4 py-2">{d.createdon}</td>
                <td className="border px-4 py-2">{d.checkerid}</td>
                <td className="border px-4 py-2">{d.returnedon}</td>
                <td className="border px-4 py-2">{d.declinedon}</td>
              </tr>
            ))}
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

export default Makercheckerstatus;
