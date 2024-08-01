import React, { useState } from 'react';
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Changehistorydetail from './Changehistorydetail';


const Changehistory = () => {

  const [showChangehistorydetailpage, setShowChangehistorydetailpage] = useState(false);

  const handleDetail = () => {
    setShowChangehistorydetailpage(true);
  };


  const customerName = 'Anil Solanki';
  const cifNumber = '100022949';
  const customerSince = '17/06/2023';
  const customerType = 'Personal';
  const customerCode = 'Regular Customer';
  const data = [
    { date: '17/06/2023', description: 'Statement Group' },
    { date: '17/12/2022', description: 'BBU Code' },
    { date: '19/12/2022', description: 'Next E-Statement Date' },
    { date: '24/04/2021', description: 'ITR Submission declaration' },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="bg-white shadow-md rounded-lg p-6 w-10/12">
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-gray-500 font-semibold">Customer Name: {customerName}</p>
              <p className="text-gray-500">CIF Number: {cifNumber}</p>
              <p className="text-gray-500">Customer Since: {customerSince}</p>
            </div>
            <div>
              <p className="text-gray-500">Customer Type : {customerType}</p>
              <p className="text-gray-500">Customer Code : {customerCode}</p>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-semibold">Customer History</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">From Date:</span>
              <input type="date" className="px-2 py-1 border border-gray-300 rounded" />
              <span className="text-sm font-medium">To Date:</span>
              <input type="date" className="px-2 py-1 border border-gray-300 rounded" />
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Submit
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left">Date</th>
                  <th className="px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{item.date}</td>
                    <td className="border px-4 py-2 text-blue-600 underline cursor-pointer" onClick={handleDetail}>{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {showChangehistorydetailpage && <Changehistorydetail onClose={()=> setShowChangehistorydetailpage(false)}/>}
    </div>
  );
};

export default Changehistory; 