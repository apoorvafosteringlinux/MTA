// import React, { useState, useEffect, useRef } from 'react';
// import Navbar from '../../Navbar';
// import Sidebar from '../../Sidebar';

// const Accountstatus = () => {

//   const data = [
//     {
//       "id": 1,
//       "agent_ID": "100000699",
//       "cif_NO": "100000699",
//       "account_NO": "20283458051",
//       "account_HOLDER_NAME": "Anoop Singroul",
//       "account_BALANCE": "8.14",
//       "account_STATUS": "0",
//       "state": "Madhya Pradesh",
//       "district": "Panna",
//       "region": "2-S_URBAN",
//       "user_CLASS": "MER11",
//       "txn_LST_DTE": "2023-08-17",
//       "create_DTE": "2022-07-11",
//       "prod_TYP": "1003",
//       "branch_ID": "144615"
//     },
//     {
//       "id": 2,
//       "agent_ID": "100000123",
//       "cif_NO": "100000124",
//       "account_NO": "20283458052",
//       "account_HOLDER_NAME": "Ramesh Patel",
//       "account_BALANCE": "150.75",
//       "account_STATUS": "1",
//       "state": "Maharashtra",
//       "district": "Mumbai",
//       "region": "3-W_SUBURBAN",
//       "user_CLASS": "MER04",
//       "txn_LST_DTE": "2023-09-20",
//       "create_DTE": "2022-06-15",
//       "prod_TYP": "1001",
//       "branch_ID": "144616"
//     },
//     {
//       "id": 3,
//       "agent_ID": "100000456",
//       "cif_NO": "100000457",
//       "account_NO": "20283458053",
//       "account_HOLDER_NAME": "Priya Sharma",
//       "account_BALANCE": "500.20",
//       "account_STATUS": "0",
//       "state": "Delhi",
//       "district": "New Delhi",
//       "region": "1-E_URBAN",
//       "user_CLASS": "MER21",
//       "txn_LST_DTE": "2023-10-05",
//       "create_DTE": "2022-08-30",
//       "prod_TYP": "1002",
//       "branch_ID": "144617"
//     },
//     {
//       "id": 4,
//       "agent_ID": "100000789",
//       "cif_NO": "100000790",
//       "account_NO": "20283458054",
//       "account_HOLDER_NAME": "Suresh Kumar",
//       "account_BALANCE": "1000.00",
//       "account_STATUS": "1",
//       "state": "Uttar Pradesh",
//       "district": "Lucknow",
//       "region": "4-N_RURAL",
//       "user_CLASS": "MER17",
//       "txn_LST_DTE": "2023-11-12",
//       "create_DTE": "2022-09-25",
//       "prod_TYP": "1003",
//       "branch_ID": "144618"
//     },
//     {
//       "id": 5,
//       "agent_ID": "100000987",
//       "cif_NO": "100000988",
//       "account_NO": "20283458055",
//       "account_HOLDER_NAME": "Deepak Singh",
//       "account_BALANCE": "800.50",
//       "account_STATUS": "1",
//       "state": "Karnataka",
//       "district": "Bangalore",
//       "region": "2-S_URBAN",
//       "user_CLASS": "MER44",
//       "txn_LST_DTE": "2023-08-17",
//       "create_DTE": "2022-07-11",
//       "prod_TYP": "1003",
//       "branch_ID": "144619"
//     },
//     {
//       "id": 6,
//       "agent_ID": "100000654",
//       "cif_NO": "100000655",
//       "account_NO": "20283458056",
//       "account_HOLDER_NAME": "Anita Gupta",
//       "account_BALANCE": "1200.25",
//       "account_STATUS": "0",
//       "state": "West Bengal",
//       "district": "Kolkata",
//       "region": "3-W_SUBURBAN",
//       "user_CLASS": "MER15",
//       "txn_LST_DTE": "2023-10-20",
//       "create_DTE": "2022-08-25",
//       "prod_TYP": "1002",
//       "branch_ID": "144620"
//     },
//     {
//       "id": 7,
//       "agent_ID": "100000321",
//       "cif_NO": "100000322",
//       "account_NO": "20283458057",
//       "account_HOLDER_NAME": "Amit Mishra",
//       "account_BALANCE": "300.75",
//       "account_STATUS": "1",
//       "state": "Bihar",
//       "district": "Patna",
//       "region": "4-N_RURAL",
//       "user_CLASS": "MER32",
//       "txn_LST_DTE": "2023-11-30",
//       "create_DTE": "2022-10-05",
//       "prod_TYP": "1001",
//       "branch_ID": "144621"
//     },
//     {
//       "id": 8,
//       "agent_ID": "100000215",
//       "cif_NO": "100000215",
//       "account_NO": "20001472676",
//       "account_HOLDER_NAME": "ANKIT  KUMAR",
//       "account_BALANCE": ".00",
//       "account_STATUS": "2",
//       "state": "Maharashtra",
//       "district": "Ghaziabad",
//       "region": "2-S_URBAN",
//       "user_CLASS": "MER34",
//       "txn_LST_DTE": "2022-12-28",
//       "create_DTE": "2017-04-28",
//       "prod_TYP": "1003",
//       "branch_ID": "900247"
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
//     <div className="relative">
//       <Navbar />
//       <div className="flex">
//         <Sidebar />
        
//         <div className="container mx-auto p-10">
//           <h1 className="text-2xl font-bold mb-4">Account Status Report</h1>
//           <div className="bg-black h-1"></div>
//           <div className="overflow-x-auto mt-16">
//             <table className="table-auto w-full">
//               <thead>
//                 <tr>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Agent ID</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">CIF No.</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Account No.</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Account Holder Name</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Account Balance</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Account Status</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">State</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">District</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Region</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">User Class</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Last Transaction Date</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Create Date</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Product Type</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Branch ID</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentItems.map((item) => (
//                   <tr key={item.id} className="even:bg-gray-100">
//                     <td className="border px-4 py-2">{item.agent_ID}</td>
//                     <td className="border px-4 py-2">{item.cif_NO}</td>
//                     <td className="border px-4 py-2">{item.account_NO}</td>
//                     <td className="border px-4 py-2">{item.account_HOLDER_NAME}</td>
//                     <td className="border px-4 py-2">{item.account_BALANCE}</td>
//                     <td className="border px-4 py-2">{item.account_STATUS}</td>
//                     <td className="border px-4 py-2">{item.state}</td>
//                     <td className="border px-4 py-2">{item.district}</td>
//                     <td className="border px-4 py-2">{item.region}</td>
//                     <td className="border px-4 py-2">{item.user_CLASS}</td>
//                     <td className="border px-4 py-2">{item.txn_LST_DTE}</td>
//                     <td className="border px-4 py-2">{item.create_DTE}</td>
//                     <td className="border px-4 py-2">{item.prod_TYP}</td>
//                     <td className="border px-4 py-2">{item.branch_ID}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
            
//           </div>
//           {renderPagination()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Accountstatus;























import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Navbar from '../../Navbar';
import Sidebar from '../../Sidebar';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const Accountstatus = () => {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginationRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_REPORTS_ACCOUNTSTATUS_URL);
        
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
    <div className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="container mx-auto p-10">
          <h1 className="text-2xl font-bold mb-4">Account Status Report</h1>
          <div className="bg-black h-1"></div>
          <div className="overflow-x-auto mt-16">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 bg-[#dfd3e0]">Agent ID</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">CIF No.</th>
                  <th className="px-4 py -2 bg-[#dfd3e0]">Account No.</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">Account Holder Name</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">Account Balance</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">Account Status</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">State</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">District</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">Region</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">User Class</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">Last Transaction Date</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">Create Date</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">Product Type</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">Branch ID</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((d) => (
                  <tr key={d.id}>
                    <td className="px-4 py-2">{d.agent_ID}</td>
                    <td className="px-4 py-2">{d.cif_NO}</td>
                    <td className="px-4 py-2">{d.account_NO}</td>
                    <td className="px-4 py-2">{d.account_HOLDER_NAME}</td>
                    <td className="px-4 py-2">{d.account_BALANCE}</td>
                    <td className="px-4 py-2">{d.account_STATUS}</td>
                    <td className="px-4 py-2">{d.state}</td>
                    <td className="px-4 py-2">{d.district}</td>
                    <td className="px-4 py-2">{d.region}</td>
                    <td className="px-4 py-2">{d.user_CLASS}</td>
                    <td className="px-4 py-2">{d.txn_LST_DTE}</td>
                    <td className="px-4 py-2">{d.create_DTE}</td>
                    <td className="px-4 py-2">{d.prod_TYP}</td>
                    <td className="px-4 py-2">{d.branch_ID}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {renderPagination()}
        </div>
      </div>
    </div>
  );
};

export default Accountstatus;
