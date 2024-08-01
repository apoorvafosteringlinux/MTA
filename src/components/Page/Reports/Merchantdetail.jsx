// import React, { useState, useEffect, useRef } from 'react';
// import Navbar from '../../Navbar';
// import Sidebar from '../../Sidebar';

// const Merchantdetail = () => {
//   const data = [
//     {
//       "id": 1,
//       "s_NO": "1",
//       "region": "South",
//       "cluster": "TELANGANA",
//       "area": "TELANGANA",
//       "brnch_TYP": "URBAN",
//       "brnch_CDE": "1005",
//       "type": "1003",
//       "prod_DESC": "1003 - BC Merchant Account",
//       "crncy_CDE": "INR",
//       "crncy_CDE_DESC": "Indian Rupee",
//       "acct_NBR": "20001320226",
//       "title1": "Ravi S.",
//       "lgr_BAL": "0.00",
//       "acr": "",
//       "intavlncr": "",
//       "acct_OPEN_DTE": "2017-04-23",
//       "sbu_CDE": "03",
//       "stat": "Dormant",
//       "usr_CLS": "",
//       "cust_PERMT_ST": "Tamilnadu",
//       "cust_PERMT_CTY": "Chennai"
//     },
//     {
//       "id": 2,
//       "s_NO": "2",
//       "region": "North",
//       "cluster": "DELHI",
//       "area": "DELHI",
//       "brnch_TYP": "URBAN",
//       "brnch_CDE": "1006",
//       "type": "1002",
//       "prod_DESC": "1002 - BC Merchant Account",
//       "crncy_CDE": "INR",
//       "crncy_CDE_DESC": "Indian Rupee",
//       "acct_NBR": "20001320227",
//       "title1": "Kumar A.",
//       "lgr_BAL": "1500.50",
//       "acr": "",
//       "intavlncr": "",
//       "acct_OPEN_DTE": "2018-02-15",
//       "sbu_CDE": "05",
//       "stat": "Active",
//       "usr_CLS": "",
//       "cust_PERMT_ST": "Maharashtra",
//       "cust_PERMT_CTY": "Mumbai"
//     },
//     {
//       "id": 3,
//       "s_NO": "3",
//       "region": "East",
//       "cluster": "WEST BENGAL",
//       "area": "KOLKATA",
//       "brnch_TYP": "URBAN",
//       "brnch_CDE": "1007",
//       "type": "1001",
//       "prod_DESC": "1001 - BC Merchant Account",
//       "crncy_CDE": "INR",
//       "crncy_CDE_DESC": "Indian Rupee",
//       "acct_NBR": "20001320228",
//       "title1": "Priya K.",
//       "lgr_BAL": "10000.00",
//       "acr": "",
//       "intavlncr": "",
//       "acct_OPEN_DTE": "2019-06-10",
//       "sbu_CDE": "07",
//       "stat": "Active",
//       "usr_CLS": "",
//       "cust_PERMT_ST": "Andhra Pradesh",
//       "cust_PERMT_CTY": "Hyderabad"
//     },
//     {
//       "id": 4,
//       "s_NO": "4",
//       "region": "West",
//       "cluster": "GUJARAT",
//       "area": "AHMEDABAD",
//       "brnch_TYP": "URBAN",
//       "brnch_CDE": "1008",
//       "type": "1004",
//       "prod_DESC": "1004 - BC Merchant Account",
//       "crncy_CDE": "INR",
//       "crncy_CDE_DESC": "Indian Rupee",
//       "acct_NBR": "20001320229",
//       "title1": "Ajay M.",
//       "lgr_BAL": "500.75",
//       "acr": "",
//       "intavlncr": "",
//       "acct_OPEN_DTE": "2020-10-05",
//       "sbu_CDE": "09",
//       "stat": "Dormant",
//       "usr_CLS": "",
//       "cust_PERMT_ST": "Kerala",
//       "cust_PERMT_CTY": "Trivandrum"
//     },
//     {
//       "id": 5,
//       "s_NO": "5",
//       "region": "Central",
//       "cluster": "MADHYA PRADESH",
//       "area": "BHOPAL",
//       "brnch_TYP": "URBAN",
//       "brnch_CDE": "1009",
//       "type": "1005",
//       "prod_DESC": "1005 - BC Merchant Account",
//       "crncy_CDE": "INR",
//       "crncy_CDE_DESC": "Indian Rupee",
//       "acct_NBR": "20001320230",
//       "title1": "Sneha B.",
//       "lgr_BAL": "8000.25",
//       "acr": "",
//       "intavlncr": "",
//       "acct_OPEN_DTE": "2021-08-20",
//       "sbu_CDE": "11",
//       "stat": "Active",
//       "usr_CLS": "",
//       "cust_PERMT_ST": "Uttar Pradesh",
//       "cust_PERMT_CTY": "Lucknow"
//     },
//     {
//       "id": 6,
//       "s_NO": "6",
//       "region": "South",
//       "cluster": "TAMIL NADU",
//       "area": "CHENNAI",
//       "brnch_TYP": "URBAN",
//       "brnch_CDE": "1010",
//       "type": "1006",
//       "prod_DESC": "1006 - BC Merchant Account",
//       "crncy_CDE": "INR",
//       "crncy_CDE_DESC": "Indian Rupee",
//       "acct_NBR": "20001320231",
//       "title1": "Arun S.",
//       "lgr_BAL": "2000.00",
//       "acr": "",
//       "intavlncr": "",
//       "acct_OPEN_DTE": "2022-12-30",
//       "sbu_CDE": "13",
//       "stat": "Active",
//       "usr_CLS": "",
//       "cust_PERMT_ST": "Telangana",
//       "cust_PERMT_CTY": "Hyderabad"
//     },
//     {
//       "id": 7,
//       "s_NO": "7",
//       "region": "North",
//       "cluster": "UTTARAKHAND",
//       "area": "DEHRADUN",
//       "brnch_TYP": "RURAL",
//       "brnch_CDE": "1011",
//       "type": "1007",
//       "prod_DESC": "1007 - BC Merchant Account",
//       "crncy_CDE": "INR",
//       "crncy_CDE_DESC": "Indian Rupee",
//       "acct_NBR": "20001320232",
//       "title1": "Shashi K.",
//       "lgr_BAL": "350.30",
//       "acr": "",
//       "intavlncr": "",
//       "acct_OPEN_DTE": "2023-05-18",
//       "sbu_CDE": "15",
//       "stat": "Active",
//       "usr_CLS": "",
//       "cust_PERMT_ST": "Madhya Pradesh",
//       "cust_PERMT_CTY": "Indore"
//     },
//     {
//       "id": 8,
//       "s_NO": "8",
//       "region": "West",
//       "cluster": "RAJASTHAN",
//       "area": "JAIPUR",
//       "brnch_TYP": "URBAN",
//       "brnch_CDE": "1012",
//       "type": "1008",
//       "prod_DESC": "1008 - BC Merchant Account",
//       "crncy_CDE": "INR",
//       "crncy_CDE_DESC": "Indian Rupee",
//       "acct_NBR": "20001320233",
//       "title1": "Neha R.",
//       "lgr_BAL": "500.00",
//       "acr": "",
//       "intavlncr": "",
//       "acct_OPEN_DTE": "2024-01-10",
//       "sbu_CDE": "17",
//       "stat": "Active",
//       "usr_CLS": "",
//       "cust_PERMT_ST": "Rajasthan",
//       "cust_PERMT_CTY": "Jaipur"
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
//       <div ref={paginationRef} className="flex justify-center mt-2">
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
//           <h1 className="text-2xl font-bold mb-4">Merchant Detail Report</h1>
//           <div className='bg-black h-1'></div>
//           <div className="overflow-x-auto mt-6">
//             <table className="table-auto w-full">
//               <thead>
//                 <tr>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">S.No</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Region</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Cluster</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Area</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Branch Type</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Branch Code</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Type</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Product Description</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Currency Code</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Currency Description</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Account Number</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Customer Name</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Ledger Balance</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Account Open Date</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">SBU Code</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Status</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Customer Permanent State</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Customer Permanent City</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentItems.map((item) => (
//                   <tr key={item.id} className="even:bg-gray-100">
//                     <td className="border px-4 py-2">{item.s_NO}</td>
//                     <td className="border px-4 py-2">{item.region}</td>
//                     <td className="border px-4 py-2">{item.cluster}</td>
//                     <td className="border px-4 py-2">{item.area}</td>
//                     <td className="border px-4 py-2">{item.brnch_TYP}</td>
//                     <td className="border px-4 py-2">{item.brnch_CDE}</td>
//                     <td className="border px-4 py-2">{item.type}</td>
//                     <td className="border px-4 py-2">{item.prod_DESC}</td>
//                     <td className="border px-4 py-2">{item.crncy_CDE}</td>
//                     <td className="border px-4 py-2">{item.crncy_CDE_DESC}</td>
//                     <td className="border px-4 py-2">{item.acct_NBR}</td>
//                     <td className="border px-4 py-2">{item.title1}</td>
//                     <td className="border px-4 py-2">{item.lgr_BAL}</td>
//                     <td className="border px-4 py-2">{item.acct_OPEN_DTE}</td>
//                     <td className="border px-4 py-2">{item.sbu_CDE}</td>
//                     <td className="border px-4 py-2">{item.stat}</td>
//                     <td className="border px-4 py-2">{item.cust_PERMT_ST}</td>
//                     <td className="border px-4 py-2">{item.cust_PERMT_CTY}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           {renderPagination()}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Merchantdetail




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
        const response = await axios.get(import.meta.env.VITE_REPORTS_MERCHANTDETAIL_URL);
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
          <h1 className="text-2xl font-bold mb-4">Merchant Detail Report</h1>
          <div className="bg-black h-1"></div>
          <div className="overflow-x-auto mt-16">
            <table className="table-auto w-full">
            <thead>
                 <tr>
                   <th className="px-4 py-2 bg-[#dfd3e0]">S.No</th>
                   <th className="px-4 py-2 bg-[#dfd3e0]">Region</th>
                   <th className="px-4 py-2 bg-[#dfd3e0]">Cluster</th>
                   <th className="px-4 py-2 bg-[#dfd3e0]">Area</th>
                   <th className="px-4 py-2 bg-[#dfd3e0]">Branch Type</th>
                   <th className="px-4 py-2 bg-[#dfd3e0]">Branch Code</th>
                   <th className="px-4 py-2 bg-[#dfd3e0]">Type</th>
                   <th className="px-4 py-2 bg-[#dfd3e0]">Product Description</th>
                   <th className="px-4 py-2 bg-[#dfd3e0]">Currency Code</th>
                   <th className="px-4 py-2 bg-[#dfd3e0]">Currency Description</th>
                   <th className="px-4 py-2 bg-[#dfd3e0]">Account Number</th>
                   <th className="px-4 py-2 bg-[#dfd3e0]">Customer Name</th>
                   <th className="px-4 py-2 bg-[#dfd3e0]">Ledger Balance</th>
                   <th className="px-4 py-2 bg-[#dfd3e0]">Account Open Date</th>
                   <th className="px-4 py-2 bg-[#dfd3e0]">SBU Code</th>
                   <th className="px-4 py-2 bg-[#dfd3e0]">Status</th>
                   <th className="px-4 py-2 bg-[#dfd3e0]">Customer Permanent State</th>
                   <th className="px-4 py-2 bg-[#dfd3e0]">Customer Permanent City</th>
                 </tr>
               </thead>
               <tbody>
                 {currentItems.map((d) => (
                  <tr key={d.id} className="even:bg-gray-100">
                     <td className="border px-4 py-2">{d.s_NO}</td>
                     <td className="border px-4 py-2">{d.region}</td>
                     <td className="border px-4 py-2">{d.cluster}</td>
                     <td className="border px-4 py-2">{d.area}</td>
                     <td className="border px-4 py-2">{d.brnch_TYP}</td>
                     <td className="border px-4 py-2">{d.brnch_CDE}</td>
                     <td className="border px-4 py-2">{d.type}</td>
                     <td className="border px-4 py-2">{d.prod_DESC}</td>
                     <td className="border px-4 py-2">{d.crncy_CDE}</td>
                     <td className="border px-4 py-2">{d.crncy_CDE_DESC}</td>
                     <td className="border px-4 py-2">{d.acct_NBR}</td>
                     <td className="border px-4 py-2">{d.title1}</td>
                     <td className="border px-4 py-2">{d.lgr_BAL}</td>
                     <td className="border px-4 py-2">{d.acct_OPEN_DTE}</td>
                     <td className="border px-4 py-2">{d.sbu_CDE}</td>
                     <td className="border px-4 py-2">{d.stat}</td>
                     <td className="border px-4 py-2">{d.cust_PERMT_ST}</td>
                     <td className="border px-4 py-2">{d.cust_PERMT_CTY}</td>
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