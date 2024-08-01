// import React, { useState, useEffect, useRef } from 'react';
// import Navbar from '../../Navbar';
// import Sidebar from '../../Sidebar';

// const Commission = () => {
//   const data = [
//     {
//       "id": 1,
//       "dte": "2017-04-23",
//       "cif_NO": "100000215",
//       "acct_NO": "20001472676",
//       "usr_CLASS": "Mer11",
//       "txn_TYP": "DMT",
//       "grs_CMSSN": "9",
//       "tds_DEDCTD": "3",
//       "net_CMSSN": "12"
//     },
//     {
//       "id": 2,
//       "dte": "2023-11-16",
//       "cif_NO": "100000124",
//       "acct_NO": "20283458052",
//       "usr_CLASS": "MER12",
//       "txn_TYP": "WDL",
//       "grs_CMSSN": "10",
//       "tds_DEDCTD": "4",
//       "net_CMSSN": "6"
//     },
//     {
//       "id": 3,
//       "dte": "2023-11-17",
//       "cif_NO": "100000125",
//       "acct_NO": "20283458053",
//       "usr_CLASS": "MER13",
//       "txn_TYP": "DEP",
//       "grs_CMSSN": "12",
//       "tds_DEDCTD": "5",
//       "net_CMSSN": "7"
//     },
//     {
//       "id": 4,
//       "dte": "2023-11-18",
//       "cif_NO": "100000126",
//       "acct_NO": "20283458054",
//       "usr_CLASS": "MER14",
//       "txn_TYP": "TRF",
//       "grs_CMSSN": "14",
//       "tds_DEDCTD": "6",
//       "net_CMSSN": "8"
//     },
//     {
//       "id": 5,
//       "dte": "2023-11-19",
//       "cif_NO": "100000127",
//       "acct_NO": "20283458055",
//       "usr_CLASS": "MER15",
//       "txn_TYP": "DMT",
//       "grs_CMSSN": "9",
//       "tds_DEDCTD": "3",
//       "net_CMSSN": "6"
//     },
//     {
//       "id": 6,
//       "dte": "2023-11-20",
//       "cif_NO": "100000128",
//       "acct_NO": "20283458056",
//       "usr_CLASS": "MER16",
//       "txn_TYP": "WDL",
//       "grs_CMSSN": "11",
//       "tds_DEDCTD": "4",
//       "net_CMSSN": "7"
//     },
//     {
//       "id": 7,
//       "dte": "2023-11-21",
//       "cif_NO": "100000129",
//       "acct_NO": "20283458057",
//       "usr_CLASS": "MER17",
//       "txn_TYP": "DEP",
//       "grs_CMSSN": "13",
//       "tds_DEDCTD": "5",
//       "net_CMSSN": "8"
//     },
//     {
//       "id": 8,
//       "dte": "2023-11-22",
//       "cif_NO": "100000130",
//       "acct_NO": "20283458058",
//       "usr_CLASS": "MER18",
//       "txn_TYP": "TRF",
//       "grs_CMSSN": "15",
//       "tds_DEDCTD": "6",
//       "net_CMSSN": "9"
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
//           <h1 className="text-2xl font-bold mb-4">Commission Report</h1>
//           <div className="bg-black h-1"></div>
//           <div className="overflow-x-auto mt-16">
//             <table className="table-auto w-full">
//               <thead>
//                 <tr>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Date</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">CIF No.</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Account No.</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">User Class</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Transaction Type</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Gross Commission</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">TDS Deducted</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Net Commission</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentItems.map((item) => (
//                   <tr key={item.id} className="even:bg-gray-100">
//                     <td className="border px-4 py-2">{item.dte}</td>
//                     <td className="border px-4 py-2">{item.cif_NO}</td>
//                     <td className="border px-4 py-2">{item.acct_NO}</td>
//                     <td className="border px-4 py-2">{item.usr_CLASS}</td>
//                     <td className="border px-4 py-2">{item.txn_TYP}</td>
//                     <td className="border px-4 py-2">{item.grs_CMSSN}</td>
//                     <td className="border px-4 py-2">{item.tds_DEDCTD}</td>
//                     <td className="border px-4 py-2">{item.net_CMSSN}</td>
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

// export default Commission;






import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Navbar from '../../Navbar';
import Sidebar from '../../Sidebar';

const Commission = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginationRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_REPORTS_COMMISSION_URL);
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
          <h1 className="text-2xl font-bold mb-4">Commission Report</h1>
          <div className="bg-black h-1"></div>
          <div className="overflow-x-auto mt-16">
            <table className="table-auto w-full">
            <thead>
                 <tr>
                   <th className="px-4 py-2 bg-[#dfd3e0]">Date</th>
                   <th className="px-4 py-2 bg-[#dfd3e0]">CIF No.</th>
                   <th className="px-4 py-2 bg-[#dfd3e0]">Account No.</th>
                   <th className="px-4 py-2 bg-[#dfd3e0]">User Class</th>
                   <th className="px-4 py-2 bg-[#dfd3e0]">Transaction Type</th>
                   <th className="px-4 py-2 bg-[#dfd3e0]">Gross Commission</th>
                   <th className="px-4 py-2 bg-[#dfd3e0]">TDS Deducted</th>
                   <th className="px-4 py-2 bg-[#dfd3e0]">Net Commission</th>
                 </tr>
               </thead>
               <tbody>
                 {currentItems.map((d) => (
                  <tr key={d.id} className="even:bg-gray-100">
                    <td className="border px-4 py-2">{d.dte}</td>
                    <td className="border px-4 py-2">{d.cif_NO}</td>
                    <td className="border px-4 py-2">{d.acct_NO}</td>
                    <td className="border px-4 py-2">{d.usr_CLASS}</td>
                    <td className="border px-4 py-2">{d.txn_TYP}</td>
                    <td className="border px-4 py-2">{d.grs_CMSSN}</td>
                    <td className="border px-4 py-2">{d.tds_DEDCTD}</td>
                    <td className="border px-4 py-2">{d.net_CMSSN}</td>
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

export default Commission;





