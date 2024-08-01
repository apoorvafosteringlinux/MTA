// import React, { useState, useEffect, useRef } from 'react';
// import Navbar from '../../Navbar';
// import Sidebar from '../../Sidebar';

// const Realtime = () => {
//   const data = [
//     {
//       "id": 1,
//       "s_NO": "1",
//       "brnch_CDE": "2344",
//       "brnch_TYP": "1003",
//       "acc_TYPE": "BC Merchant Account",
//       "acc_NO": "20001445685",
//       "name": "RAMESHANAND  C",
//       "balance": "0",
//       "district": "Chennai",
//       "state": "Tamilnadu",
//       "acr": "0",
//       "intavlncr": "0",
//       "acct_OPEN_DTE": "21-04-2017",
//       "zsbu": "3",
//       "acc_STATUS": "Closed",
//       "user_ID": "100260461",
//       "usr_CLS": "MER1",
//       "acc_ACT_DATE": "",
//       "user_STAT": "Revoked",
//       "man_REVOK_STAT": "TRUE",
//       "man_REVOK_RSN": "A/C closed-Non submission KYC",
//       "block_STATUS": "TEMP BLOCKED"
//     },
//     {
//       "id": 2,
//       "s_NO": "2",
//       "brnch_CDE": "1001",
//       "brnch_TYP": "1003",
//       "acc_TYPE": "BC Merchant Account",
//       "acc_NO": "20001315768",
//       "name": "RENGASAMY  NARAYANAN",
//       "balance": "0",
//       "district": "Chennai",
//       "state": "Tamilnadu",
//       "acr": "0",
//       "intavlncr": "0",
//       "acct_OPEN_DTE": "21-04-2017",
//       "zsbu": "3",
//       "acc_STATUS": "Closed",
//       "user_ID": "100260461",
//       "usr_CLS": "MER1",
//       "acc_ACT_DATE": "",
//       "user_STAT": "Revoked",
//       "man_REVOK_STAT": "TRUE",
//       "man_REVOK_RSN": "A/C closed-Non submission KYC",
//       "block_STATUS": "TEMP BLOCKED"
//     },
//     {
//       "id": 3,
//       "s_NO": "3",
//       "brnch_CDE": "4321",
//       "brnch_TYP": "1003",
//       "acc_TYPE": "BC Merchant Account",
//       "acc_NO": "20001234567",
//       "name": "Rahul Gupta",
//       "balance": "6000",
//       "district": "Delhi",
//       "state": "Delhi",
//       "acr": "0",
//       "intavlncr": "0",
//       "acct_OPEN_DTE": "15-03-2023",
//       "zsbu": "3",
//       "acc_STATUS": "Active",
//       "user_ID": "100123456",
//       "usr_CLS": "MER1",
//       "acc_ACT_DATE": "15-03-2023",
//       "user_STAT": "Active",
//       "man_REVOK_STAT": "FALSE",
//       "man_REVOK_RSN": "",
//       "block_STATUS": "NOT BLOCKED"
//     },
//     {
//       "id": 4,
//       "s_NO": "4",
//       "brnch_CDE": "5678",
//       "brnch_TYP": "1003",
//       "acc_TYPE": "BC Merchant Account",
//       "acc_NO": "20009876543",
//       "name": "Priya Patel",
//       "balance": "4500",
//       "district": "Mumbai",
//       "state": "Maharashtra",
//       "acr": "0",
//       "intavlncr": "0",
//       "acct_OPEN_DTE": "20-07-2022",
//       "zsbu": "3",
//       "acc_STATUS": "Active",
//       "user_ID": "100987654",
//       "usr_CLS": "MER1",
//       "acc_ACT_DATE": "20-07-2022",
//       "user_STAT": "Active",
//       "man_REVOK_STAT": "FALSE",
//       "man_REVOK_RSN": "",
//       "block_STATUS": "NOT BLOCKED"
//     },
//     {
//       "id": 5,
//       "s_NO": "5",
//       "brnch_CDE": "8765",
//       "brnch_TYP": "1003",
//       "acc_TYPE": "BC Merchant Account",
//       "acc_NO": "20006543210",
//       "name": "Anjali Sharma",
//       "balance": "3000",
//       "district": "Jaipur",
//       "state": "Rajasthan",
//       "acr": "0",
//       "intavlncr": "0",
//       "acct_OPEN_DTE": "03-11-2021",
//       "zsbu": "3",
//       "acc_STATUS": "Active",
//       "user_ID": "100543210",
//       "usr_CLS": "MER1",
//       "acc_ACT_DATE": "03-11-2021",
//       "user_STAT": "Active",
//       "man_REVOK_STAT": "FALSE",
//       "man_REVOK_RSN": "",
//       "block_STATUS": "NOT BLOCKED"
//     },
//     {
//       "id": 6,
//       "s_NO": "6",
//       "brnch_CDE": "5432",
//       "brnch_TYP": "1003",
//       "acc_TYPE": "BC Merchant Account",
//       "acc_NO": "20007894561",
//       "name": "Deepak Singh",
//       "balance": "7500",
//       "district": "Lucknow",
//       "state": "Uttar Pradesh",
//       "acr": "0",
//       "intavlncr": "0",
//       "acct_OPEN_DTE": "12-09-2020",
//       "zsbu": "3",
//       "acc_STATUS": "Closed",
//       "user_ID": "100789456",
//       "usr_CLS": "MER1",
//       "acc_ACT_DATE": "12-09-2020",
//       "user_STAT": "Revoked",
//       "man_REVOK_STAT": "FALSE",
//       "man_REVOK_RSN": "A/C closed-Non submission KYC",
//       "block_STATUS": "TEMP BLOCKED"
//     },
//     {
//       "id": 7,
//       "s_NO": "7",
//       "brnch_CDE": "2345",
//       "brnch_TYP": "1003",
//       "acc_TYPE": "BC Merchant Account",
//       "acc_NO": "20001567890",
//       "name": "Sneha Rao",
//       "balance": "10000",
//       "district": "Bangalore",
//       "state": "Karnataka",
//       "acr": "0",
//       "intavlncr": "0",
//       "acct_OPEN_DTE": "28-05-2019",
//       "zsbu": "3",
//       "acc_STATUS": "Active",
//       "user_ID": "100156789",
//       "usr_CLS": "MER1",
//       "acc_ACT_DATE": "28-05-2019",
//       "user_STAT": "Active",
//       "man_REVOK_STAT": "FALSE",
//       "man_REVOK_RSN": "",
//       "block_STATUS": "NOT BLOCKED"
//     },
//     {
//       "id": 8,
//       "s_NO": "8",
//       "brnch_CDE": "7890",
//       "brnch_TYP": "1003",
//       "acc_TYPE": "BC Merchant Account",
//       "acc_NO": "20003456789",
//       "name": "Manish Kumar",
//       "balance": "2000",
//       "district": "Patna",
//       "state": "Bihar",
//       "acr": "0",
//       "intavlncr": "0",
//       "acct_OPEN_DTE": "17-02-2023",
//       "zsbu": "3",
//       "acc_STATUS": "Closed",
//       "user_ID": "100345678",
//       "usr_CLS": "MER1",
//       "acc_ACT_DATE": "17-02-2023",
//       "user_STAT": "Revoked",
//       "man_REVOK_STAT": "FALSE",
//       "man_REVOK_RSN": "A/C closed-Non submission KYC",
//       "block_STATUS": "TEMP BLOCKED"
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
//         <div className="container mx-auto p-10">
//           <h1 className="text-2xl font-bold mb-4">Real-Time Report</h1>
//           <div className="bg-black h-1"></div>
//           <div className="overflow-x-auto mt-16">
//             <table className="table-auto w-full">
//               <thead>
//                 <tr>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">S.No</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Branch Code</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Branch Type</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Account Type</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Account No.</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Name</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Balance</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">District</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">State</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">ACR</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">INTAVLNCR</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Account Open Date</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">ZSBU</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Account Status</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">User ID</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">User Class</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Account Act Date</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">User Status</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Manual Revoke Status</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Manual Revoke Reason</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Block Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentItems.map((item) => (
//                   <tr key={item.id} className="even:bg-gray-100">
//                     <td className="border px-4 py-2">{item.s_NO}</td>
//                     <td className="border px-4 py-2">{item.brnch_CDE}</td>
//                     <td className="border px-4 py-2">{item.brnch_TYP}</td>
//                     <td className="border px-4 py-2">{item.acc_TYPE}</td>
//                     <td className="border px-4 py-2">{item.acc_NO}</td>
//                     <td className="border px-4 py-2">{item.name}</td>
//                     <td className="border px-4 py-2">{item.balance}</td>
//                     <td className="border px-4 py-2">{item.district}</td>
//                     <td className="border px-4 py-2">{item.state}</td>
//                     <td className="border px-4 py-2">{item.acr}</td>
//                     <td className="border px-4 py-2">{item.intavlncr}</td>
//                     <td className="border px-4 py-2">{item.acct_OPEN_DTE}</td>
//                     <td className="border px-4 py-2">{item.zsbu}</td>
//                     <td className="border px-4 py-2">{item.acc_STATUS}</td>
//                     <td className="border px-4 py-2">{item.user_ID}</td>
//                     <td className="border px-4 py-2">{item.usr_CLS}</td>
//                     <td className="border px-4 py-2">{item.acc_ACT_DATE}</td>
//                     <td className="border px-4 py-2">{item.user_STAT}</td>
//                     <td className="border px-4 py-2">{item.man_REVOK_STAT}</td>
//                     <td className="border px-4 py-2">{item.man_REVOK_RSN}</td>
//                     <td className="border px-4 py-2">{item.block_STATUS}</td>
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

// export default Realtime;


















import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Navbar from '../../Navbar';
import Sidebar from '../../Sidebar';

const Realtime = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginationRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_REPORTS_REALTIME_URL);
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
          <h1 className="text-2xl font-bold mb-4">Realtime Report</h1>
          <div className="bg-black h-1"></div>
          <div className="overflow-x-auto mt-16">
            <table className="table-auto w-full">
            <thead>
                 <tr>
                 <th className="px-4 py-2 bg-[#dfd3e0]">S.No</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">Branch Code</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">Branch Type</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">Account Type</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">Account No.</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">Name</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">Balance</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">District</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">State</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">ACR</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">INTAVLNCR</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">Account Open Date</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">ZSBU</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">Account Status</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">User ID</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">User Class</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">Account Act Date</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">User Status</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">Manual Revoke Status</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">Manual Revoke Reason</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">Block Status</th>
                 </tr>
               </thead>
               <tbody>
                 {currentItems.map((d) => (
                  <tr key={d.id} className="even:bg-gray-100">
                    <td className="border px-4 py-2">{d.s_NO}</td>
                    <td className="border px-4 py-2">{d.brnch_CDE}</td>
                    <td className="border px-4 py-2">{d.brnch_TYP}</td>
                    <td className="border px-4 py-2">{d.acc_TYPE}</td>
                    <td className="border px-4 py-2">{d.acc_NO}</td>
                    <td className="border px-4 py-2">{d.name}</td>
                    <td className="border px-4 py-2">{d.balance}</td>
                    <td className="border px-4 py-2">{d.district}</td>
                    <td className="border px-4 py-2">{d.state}</td>
                    <td className="border px-4 py-2">{d.acr}</td>
                    <td className="border px-4 py-2">{d.intavlncr}</td>
                    <td className="border px-4 py-2">{d.acct_OPEN_DTE}</td>
                    <td className="border px-4 py-2">{d.zsbu}</td>
                    <td className="border px-4 py-2">{d.acc_STATUS}</td>
                    <td className="border px-4 py-2">{d.user_ID}</td>
                    <td className="border px-4 py-2">{d.usr_CLS}</td>
                    <td className="border px-4 py-2">{d.acc_ACT_DATE}</td>
                    <td className="border px-4 py-2">{d.user_STAT}</td>
                    <td className="border px-4 py-2">{d.man_REVOK_STAT}</td>
                    <td className="border px-4 py-2">{d.man_REVOK_RSN}</td>
                    <td className="border px-4 py-2">{d.block_STATUS}</td>
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

export default Realtime;