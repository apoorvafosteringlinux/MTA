// import React from 'react';

// const Openingstatus = ({onClose}) => {

//   return (
//     <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
//     <div className='mt-10 flex  flex-col gap-5 bg-[#dfd3e0] rouunded-xl px-20 py-10 items-center mx-4'>
//         <h1 className='text-3xl font-bold'>Account Created Successfully</h1>
//         <button  onClick={onClose} className='mt-4 bg-slate-400 text-black px-4 py-2 rounded-md'>OK </button>
//     </div>
//     </div>
//   )
// }

// export default Openingstatus;



import React from 'react';
import { Link } from "react-router-dom";


const Openingstatus = ({  apiResponse }) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className='mt-10 flex flex-col gap-5 bg-[#dfd3e0] rouunded-xl px-20 py-10 items-center mx-4'>
        <h1 className='text-3xl font-bold'>
          {apiResponse ? apiResponse.message : 'Account Creation Failed'}
        </h1>
        {/* <button onClick={handleOkClick} className='mt-4 bg-slate-400 text-black px-4 py-2 rounded-md'>
          OK
        </button> */}
        <Link className='mt-4 bg-slate-400 text-black px-4 py-2 rounded-md' to="/landing">OK</Link>
      </div>
    </div>
  );
};

export default Openingstatus;
