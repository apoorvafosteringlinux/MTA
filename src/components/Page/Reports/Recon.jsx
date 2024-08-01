// import React, { useState, useEffect, useRef } from 'react';
// import Navbar from '../../Navbar';
// import Sidebar from '../../Sidebar';

// const Recon = () => {
    
//   const data = [
//     {
//       "id": 1,
//       "bank_NAME": "ABCBank1",
//       "gl_ACC_NO": "6306000129",
//       "bank_GL_AMT": "12117300.00",
//       "fis_TOT_CASHIN_STAT": "11899000.00",
//       "manual_CASHIN": "218300.00",
//       "fis_TOT_CASHIN_LMT": "12117300.00",
//       "fis_DIFFERENCE": "36,133,600.00",
//       "fmbs_MAN_CASHIN": "",
//       "fmbs_LMT": "",
//       "fmbs_NON_CUST": "",
//       "fmbs_DIFFERENCE": "",
//       "fis_FMBS_TOT_CASHIN": "",
//       "diff_FIS_FMBS_GL": "36,133,600.00"
//     },
//     {
//       "id": 2,
//       "bank_NAME": "ABCBank2",
//       "gl_ACC_NO": "6306000116",
//       "bank_GL_AMT": "4336840.00",
//       "fis_TOT_CASHIN_STAT": "4336840.00",
//       "manual_CASHIN": "",
//       "fis_TOT_CASHIN_LMT": "4336840.00",
//       "fis_DIFFERENCE": "13,010,520.00",
//       "fmbs_MAN_CASHIN": "",
//       "fmbs_LMT": "",
//       "fmbs_NON_CUST": "",
//       "fmbs_DIFFERENCE": "",
//       "fis_FMBS_TOT_CASHIN": "",
//       "diff_FIS_FMBS_GL": "13,010,520.00"
//     },
//     {
//       "id": 3,
//       "bank_NAME": "ABCBank3",
//       "gl_ACC_NO": "6306000132",
//       "bank_GL_AMT": "77593702.00",
//       "fis_TOT_CASHIN_STAT": "77593702.00",
//       "manual_CASHIN": "",
//       "fis_TOT_CASHIN_LMT": "77593702.00",
//       "fis_DIFFERENCE": "232,781,106.00",
//       "fmbs_MAN_CASHIN": "",
//       "fmbs_LMT": "",
//       "fmbs_NON_CUST": "",
//       "fmbs_DIFFERENCE": "",
//       "fis_FMBS_TOT_CASHIN": "",
//       "diff_FIS_FMBS_GL": "232,781,106.00"
//     },
//     {
//       "id": 4,
//       "bank_NAME": "ABCBank4",
//       "gl_ACC_NO": "6306000141",
//       "bank_GL_AMT": "118429525.00",
//       "fis_TOT_CASHIN_STAT": "118429525.00",
//       "manual_CASHIN": "",
//       "fis_TOT_CASHIN_LMT": "118429525.00",
//       "fis_DIFFERENCE": "355,288,575.00",
//       "fmbs_MAN_CASHIN": "",
//       "fmbs_LMT": "",
//       "fmbs_NON_CUST": "",
//       "fmbs_DIFFERENCE": "",
//       "fis_FMBS_TOT_CASHIN": "118,429,525.00",
//       "diff_FIS_FMBS_GL": "355,288,575.00"
//     },
//     {
//       "id": 5,
//       "bank_NAME": "ABCBank5",
//       "gl_ACC_NO": "6306000140",
//       "bank_GL_AMT": "31492265.00",
//       "fis_TOT_CASHIN_STAT": "31492265.00",
//       "manual_CASHIN": "",
//       "fis_TOT_CASHIN_LMT": "31492265.00",
//       "fis_DIFFERENCE": "94,476,795.00",
//       "fmbs_MAN_CASHIN": "",
//       "fmbs_LMT": "",
//       "fmbs_NON_CUST": "",
//       "fmbs_DIFFERENCE": "",
//       "fis_FMBS_TOT_CASHIN": "31,492,265.00",
//       "diff_FIS_FMBS_GL": "94,476,795.00"
//     },
//     {
//       "id": 6,
//       "bank_NAME": "ABCBank6",
//       "gl_ACC_NO": "6306000138",
//       "bank_GL_AMT": "151386997.00",
//       "fis_TOT_CASHIN_STAT": "151386997.00",
//       "manual_CASHIN": "100000",
//       "fis_TOT_CASHIN_LMT": "151486997.00",
//       "fis_DIFFERENCE": "454,260,991.00",
//       "fmbs_MAN_CASHIN": "",
//       "fmbs_LMT": "",
//       "fmbs_NON_CUST": "",
//       "fmbs_DIFFERENCE": "",
//       "fis_FMBS_TOT_CASHIN": "151,486,997.00",
//       "diff_FIS_FMBS_GL": "454,260,991.00"
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
//         <div className="container mx-auto p-5 mt-8">
//           <h1 className="text-2xl font-bold mb-4">Recon Report</h1>
//           <div className="bg-black h-1"></div>
//           <div className="overflow-x-auto mt-16">
//             <table className="table-auto w-full">
//               <thead>
//                 <tr>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Bank Name</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">GL Account No.</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Bank GL Amount</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">FIS Total Cash-in Stat</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Manual Cash-in</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">FIS Total Cash-in LMT</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">FIS Difference</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">FMBS Manual Cash-in</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">FMBS LMT</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">FMBS Non-Cust</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">FMBS Difference</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">FIS FMBS Total Cash-in</th>
//                   <th className="px-4 py-2 bg-[#dfd3e0]">Diff FIS FMBS GL</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentItems.map((item) => (
//                   <tr key={item.id} className="even:bg-gray-100">
//                     <td className="border px-4 py-2">{item.bank_NAME}</td>
//                     <td className="border px-4 py-2">{item.gl_ACC_NO}</td>
//                     <td className="border px-4 py-2">{item.bank_GL_AMT}</td>
//                     <td className="border px-4 py-2">{item.fis_TOT_CASHIN_STAT}</td>
//                     <td className="border px-4 py-2">{item.manual_CASHIN}</td>
//                     <td className="border px-4 py-2">{item.fis_TOT_CASHIN_LMT}</td>
//                     <td className="border px-4 py-2">{item.fis_DIFFERENCE}</td>
//                     <td className="border px-4 py-2">{item.fmbs_MAN_CASHIN}</td>
//                     <td className="border px-4 py-2">{item.fmbs_LMT}</td>
//                     <td className="border px-4 py-2">{item.fmbs_NON_CUST}</td>
//                     <td className="border px-4 py-2">{item.fmbs_DIFFERENCE}</td>
//                     <td className="border px-4 py-2">{item.fis_FMBS_TOT_CASHIN}</td>
//                     <td className="border px-4 py-2">{item.diff_FIS_FMBS_GL}</td>
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

// export default Recon;








import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Navbar from '../../Navbar';
import Sidebar from '../../Sidebar';

const Recon = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginationRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_REPORTS_RECON_URL);
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
          <h1 className="text-2xl font-bold mb-4">Recon Report</h1>
          <div className="bg-black h-1"></div>
          <div className="overflow-x-auto mt-16">
            <table className="table-auto w-full">
            <thead>
                 <tr>
                 <th className="px-4 py-2 bg-[#dfd3e0]">Bank Name</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">GL Account No.</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">Bank GL Amount</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">FIS Total Cash-in Stat</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">Manual Cash-in</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">FIS Total Cash-in LMT</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">FIS Difference</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">FMBS Manual Cash-in</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">FMBS LMT</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">FMBS Non-Cust</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">FMBS Difference</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">FIS FMBS Total Cash-in</th>
                  <th className="px-4 py-2 bg-[#dfd3e0]">Diff FIS FMBS GL</th>
                 </tr>
               </thead>
               <tbody>
                 {currentItems.map((d) => (
                  <tr key={d.id} className="even:bg-gray-100">
                    <td className="border px-4 py-2">{d.bank_NAME}</td>
                    <td className="border px-4 py-2">{d.gl_ACC_NO}</td>
                    <td className="border px-4 py-2">{d.bank_GL_AMT}</td>
                    <td className="border px-4 py-2">{d.fis_TOT_CASHIN_STAT}</td>
                    <td className="border px-4 py-2">{d.manual_CASHIN}</td>
                    <td className="border px-4 py-2">{d.fis_TOT_CASHIN_LMT}</td>
                    <td className="border px-4 py-2">{d.fis_DIFFERENCE}</td>
                    <td className="border px-4 py-2">{d.fmbs_MAN_CASHIN}</td>
                    <td className="border px-4 py-2">{d.fmbs_LMT}</td>
                    <td className="border px-4 py-2">{d.fmbs_NON_CUST}</td>
                    <td className="border px-4 py-2">{d.fmbs_DIFFERENCE}</td>
                    <td className="border px-4 py-2">{d.fis_FMBS_TOT_CASHIN}</td>
                    <td className="border px-4 py-2">{d.diff_FIS_FMBS_GL}</td>
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

export default Recon;