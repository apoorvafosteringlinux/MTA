// import React from "react";

// const Changehistorydetail = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
//       <div className="mt-10 flex  flex-col gap-5 bg-[#dfd3e0] rouunded-xl px-20 py-10 items-center mx-4">
//         <div className="bg-gray-100 p-4 rounded-lg shadow-md">
//           <div className="bg-gray-400 p-2 px-4 mb-5">
//             <h2 className="text-xl font-bold">Transaction Information</h2>
//           </div>
//           <div className="">
//             <div className="flex">
//               <p className="font-semibold">Customer Number:</p>
//               <p>101631063</p>
//             </div>
//             <div className="flex">
//               <p className="font-semibold">Reference Number:</p>
//               <p>734</p>
//             </div>
//             <div className="flex">
//               <p className="font-semibold">Description:</p>
//               <p>Aadhar Mapper ID</p>
//             </div>
//             <div className="flex">
//               <p className="font-semibold">Data Item:</p>
//               <p>CIF-ZAADRMAPID</p>
//             </div>
//             <div className="flex">
//               <p className="font-semibold">Old Value:</p>
//               <p>304503181269</p>
//             </div>
//             <div className="flex">
//               <p className="font-semibold">New Value:</p>
//               <p>400202317546</p>
//             </div>
//             <div className="flex">
//               <p className="font-semibold">Posting Date:</p>
//               <p>06/05/2023</p>
//             </div>
//             <div className="flex">
//               <p className="font-semibold">Effective Date:</p>
//               <p></p>
//             </div>
//             <div className="flex">
//               <p className="font-semibold">User ID:</p>
//               <p>JBOSS</p>
//             </div>
//           </div>
//         </div>

//         {/* <h1 className='text-3xl font-bold'>Account Created Successfully</h1> */}
//         <button
//           onClick={onClose}
//           className="mt-4 bg-slate-400 text-black px-4 py-2 rounded-md"
//         >
//           OK
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Changehistorydetail;


import React from "react";

const Changehistorydetail = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-[#dfd3e0] rounded-lg shadow-md p-6 w-96">
        <div className="bg-gray-200 p-2 rounded-t-lg">
          <h2 className="text-lg font-semibold">Transaction Information</h2>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Customer Number:</p>
            <p className="font-semibold">101631063</p>
          </div>
          <div>
            <p className="text-gray-600">Reference Number:</p>
            <p className="font-semibold">734</p>
          </div>
          <div>
            <p className="text-gray-600">Description:</p>
            <p className="font-semibold">Aadhar Mapper ID</p>
          </div>
          <div>
            <p className="text-gray-600">Data Item:</p>
            <p className="font-semibold">CIF-ZAADRMAPID</p>
          </div>
          <div>
            <p className="text-gray-600">Old Value:</p>
            <p className="font-semibold">304503181269</p>
          </div>
          <div>
            <p className="text-gray-600">New Value:</p>
            <p className="font-semibold">400202317546</p>
          </div>
          <div>
            <p className="text-gray-600">Posting Date:</p>
            <p className="font-semibold">06/05/2023</p>
          </div>
          <div>
            <p className="text-gray-600">Effective Date:</p>
            <p className="font-semibold">17/06/2023</p>
          </div>
          <div>
            <p className="text-gray-600">User ID:</p>
            <p className="font-semibold">JBOSS</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Changehistorydetail;
