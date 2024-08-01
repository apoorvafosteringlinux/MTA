// import React, { useState } from "react";
// import Navbar from "../Navbar";
// import Sidebar from "../Sidebar";
// import Updatestatus from './Updatestatus';

// const Updateedit = () => {
//   const [accountType, setAccountType] = useState("Current Account");
//   const [panNumber, setPanNumber] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [cifNumber, setCifNumber] = useState("");
//   const [customerName, setCustomerName] = useState("");
//   const [address, setAddress] = useState("");
//   const [gstin, setGstin] = useState("");
//   const [accountNumber, setAccountNumber] = useState("");

//   const [showUpdatestatus, setShowUpdatestatus] = useState(false);

//   const handleSubmit = () => {
//     setShowUpdatestatus(true);
//   };

//   const handleSubmit = async (e) => {
// e.preventDefault();
// Add your submit logic here
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="flex">
//         <Sidebar />
//         <div>
//           <div className="flex m-4 p-10 space-x-20 ml-20">
//             <div className="left">
//               <div className=" flex p-2">
//                 <label className="w-[25ch] mr-10" htmlFor="accountNumber">
//                   Account Number :{" "}
//                 </label>
//                 <input
//                   type="text"
//                   id="accountNumber"
//                   className=" block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   value={accountNumber}
//                   onChange={(e) => setAccountNumber(e.target.value)}
//                 />
//               </div>

//               <div className="content flex p-2">
//                 <label className="w-[25ch] mr-10" htmlFor="customerName">
//                   Customer Name :{" "}
//                 </label>
//                 <input
//                   type="text"
//                   className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   id="customerName"
//                   value={customerName}
//                   onChange={(e) => setCustomerName(e.target.value)}
//                 />
//               </div>

//               <div className="content flex p-2">
//                 <label className="w-[25ch] mr-10" htmlFor="address">
//                   Address :{" "}
//                 </label>
//                 <input
//                   className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   type="text"
//                   id="address"
//                   value={address}
//                   onChange={(e) => setAddress(e.target.value)}
//                 />
//               </div>

//               <div className="content flex p-2">
//                 <label className="w-[25ch] mr-10" htmlFor="gstin">
//                   GSTIN :{" "}
//                 </label>

//                 <input
//                   className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   type="text"
//                   id="gstin"
//                   value={gstin}
//                   onChange={(e) => setGstin(e.target.value)}
//                 />
//               </div>

//               <div className="content flex p-2">
//                 <label className="w-[25ch] mr-10" htmlFor="branch">
//                   Branch Code :{" "}
//                 </label>
//                 <input
//                   type="text"
//                   id="branch"
//                   className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div className="right">
//               <div className="space-x-16 p-2">
//                 <label className="w-[22ch]" htmlFor="accountType">
//                   Account Type :{" "}
//                 </label>
//                 <select
//                   className="py-2 px-20"
//                   id="accountType"
//                   value={accountType}
//                   onChange={(e) => setAccountType(e.target.value)}
//                 >
//                   <option value="Current Account">Current Account</option>
//                   <option value="Savings">Saving Account</option>
//                 </select>
//               </div>

//               <div className="content flex p-2">
//                 <label className="w-[25ch] mr-10" htmlFor="panNumber">
//                   PAN Number :{" "}
//                 </label>
//                 <input
//                   className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   type="text"
//                   id="panNumber"
//                   value={panNumber}
//                   onChange={(e) => setPanNumber(e.target.value)}
//                 />
//               </div>
//               <div className="content flex p-2">
//                 <label className="w-[25ch] mr-10" htmlFor="phoneNumber">
//                   Phone Number :{" "}
//                 </label>
//                 <input
//                   className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   type="text"
//                   id="phoneNumber"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                 />
//               </div>
//               <div className="content flex p-2">
//                 <label className="w-[25ch] mr-10" htmlFor="cifNumber">
//                   CIF Number :{" "}
//                 </label>
//                 <input
//                   className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   type="text"
//                   id="cifNumber"
//                   value={cifNumber}
//                   onChange={(e) => setCifNumber(e.target.value)}
//                 />
//               </div>
//             </div>
//           </div>
//           <div className="m-4 p-8 space-x-80 ml-96">
//             <button
//               className="text-black bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded-xl text-lg"
//               onClick={handleSubmit}
//             >
//               Submit
//             </button>
//             <button className="text-black bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded-xl text-lg">
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//       {showUpdatestatus && <Updatestatus onClose={()=> setShowUpdatestatus(false)}/> }
//     </div>
//   );
// };

// export default Updateedit;

import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Updatestatus from "./Updatestatus";
import { useNavigate } from "react-router-dom";

function Updateedit() {
  const [showUpdatestatus, setShowUpdatestatus] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setShowUpdatestatus(true);
  };

  function handleHold() {
    navigate("/merchant-hold");
  }

  function handleBack() {
    navigate('/merchant-update');
}

  return (
    <>
      <div>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="bg-white p-12 rounded-lg shadow-md relative">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold mb-10">
                Search Result for:{" "}
                <span className="border border-black px-8 rounded-2xl ml-5 bg-slate-300">
                  2018352416
                </span>
              </h2>
              <button className="bg-red-400 h-10 w-20 rounded-xl" onClick={handleBack}>Back</button>
            </div>
            <div className="grid grid-cols-2 gap-24 mb-10">
              <div>
                <div className="mb-4 grid grid-cols-2 gap-10">
                  <span className="font-semibold">Customer Name:</span>
                  <span className="bg-slate-300 border border-black px-10 rounded-full">Anil Solanki</span>
                  {/* <input className="border border-black px-10 rounded-full" /> */}
                </div>
                <div className="mb-4 grid grid-cols-2 gap-10">
                  <span className="font-semibold">Address:</span>
                  {/* <span className="border border-black px-10 rounded-full" >1st Cross</span> */}
                  <input className="border border-black px-10 rounded-full" />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-10">
                  <span className="font-semibold">GSTN:</span>{" "}
                  {/* <span className="border border-black px-10 rounded-full" >ANCD73245678</span> */}
                  <input className="border border-black px-10 rounded-full" />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-10">
                  <span className="font-semibold">Branch Code:</span>{" "}
                  {/* <span className="border border-black px-10 rounded-full" >7902124</span> */}
                  <input className="border border-black px-10 rounded-full" />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-10">
                  <span className="font-semibold">Permanent Hold:</span>{" "}
                  <span
                    className="bg-slate-300 text-purple-600 border border-black px-10 rounded-full cursor-pointer"
                    onClick={handleHold}
                  >
                    0.0
                  </span>
                </div>
                <div className="mb-4 grid grid-cols-2 gap-10">
                  <span className="font-semibold">Customer Status:</span>{" "}
                  {/* <span className="border border-black px-10 rounded-full">Active</span> */}
                  <select
                    className="border border-black px-10 rounded-full"
                    name="cars"
                    id="cars"
                  >
                    <option value="volvo">Active Account</option>
                    <option value="saab"> Inactive Account</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="mb-4 grid grid-cols-2 gap-10">
                  <span className="font-semibold">Account Number:</span>{" "}
                  <span className="bg-slate-300 border border-black px-10 rounded-full">1234567890</span>
                  {/* <input className="border border-black px-10 rounded-full" /> */}
                </div>
                <div className="mb-4 grid grid-cols-2 gap-10">
                  <span className="font-semibold">PAN Number:</span>{" "}
                  {/* <span className="border border-black px-10 rounded-full">BJAP3234S</span> */}
                  <input className="border border-black px-10 rounded-full" />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-10">
                  <span className="font-semibold">Phone Number:</span>{" "}
                  {/* <span className="border border-black px-10 rounded-full">7894561234</span> */}
                  <input className="border border-black px-10 rounded-full" />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-10">
                  <span className="font-semibold">CIF Number:</span>{" "}
                  {/* <span className="border border-black px-10 rounded-full">1234567890AB</span> */}
                  <input className="border border-black px-10 rounded-full" />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-10">
                  <span className="font-semibold">Account Restriction:</span>{" "}
                  {/* <span className="border border-black px-10 rounded-full">None</span> */}
                  <select
                    className="border border-black px-10 rounded-full"
                    name="cars"
                    id="cars"
                  >
                    <option value="volvo">None</option>
                    <option value="saab">Debit Hold</option>
                    <option value="mercedes">Credit Hold</option>
                    <option value="">Both</option>
                  </select>
                </div>
                <div className="mb-4 grid grid-cols-2 gap-10">
            <span className="font-semibold">Created On:</span>
            <span className="bg-slate-300 border border-black px-10 rounded-full">01-04-2024</span>
          </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Cancel
              </button>
            </div>
          </div>
        </div>
        {showUpdatestatus && (
          <Updatestatus onClose={() => setShowUpdatestatus(false)} />
        )}
      </div>
    </>
  );
}

export default Updateedit;
