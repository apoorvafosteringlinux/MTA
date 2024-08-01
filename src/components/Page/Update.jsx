import React from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";


function Update() {

  const navigate = useNavigate();

  function handleEdit() {
      navigate('/merchant-update-edit');
  }
  // const navigate = useNavigate();

  function handleHold() {
      navigate('/merchant-hold');
  }

  function handleBack() {
    navigate('/merchant-update-search');
}


  return (
    <>
      <div>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="bg-white p-12 rounded-lg shadow-md relative w-4/5">
      <div className="flex justify-between">
          <h2 className="text-xl font-semibold mb-10">Search Result for: <span className="border border-black px-8 rounded-2xl ml-5 bg-slate-300">2018352416</span></h2>
          <button className="bg-red-400 h-10 w-20 rounded-xl" onClick={handleBack}>Back</button>
      </div>
      <div className="grid grid-cols-2 gap-24">
        <div>
          <div className="mb-4 grid grid-cols-2 gap-10">
            <span className="font-semibold">Customer Name:</span>
            <span className="bg-slate-300 border border-black px-10 rounded-full">Anil Solanki</span>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-10">
            <span className="font-semibold">Address:</span>
            <span className="bg-slate-300 border border-black px-10 rounded-full" >1st Cross</span>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-10">
            <span className="font-semibold">GSTN:</span>{' '}
            <span className="bg-slate-300 border border-black px-10 rounded-full" >ANCD73245678</span>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-10">
            <span className="font-semibold">Branch Code:</span>{' '}
            <span className="bg-slate-300 border border-black px-10 rounded-full" >7902124</span>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-10">
            <span className="font-semibold">Permanent Hold:</span>{' '}
            <span className="bg-slate-300 text-purple-600 border border-black px-10 rounded-full cursor-pointer" onClick={handleHold}>0.0</span>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-10">
            <span className="font-semibold">Customer Status:</span>{' '}
            <span className="bg-slate-300 border border-black px-10 rounded-full">Active</span>
          </div>
        </div>

        <div>
          <div className="mb-4 grid grid-cols-2 gap-10">
            <span className="font-semibold">Account Number:</span>{' '}
            <span className="bg-slate-300 border border-black px-10 rounded-full">1234567890</span>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-10">
            <span className="font-semibold">PAN Number:</span>{' '}
            <span className="bg-slate-300 border border-black px-10 rounded-full">BJAP3234S</span>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-10">
            <span className="font-semibold">Phone Number:</span>{' '}
            <span className="bg-slate-300 border border-black px-10 rounded-full">7894561234</span>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-10">
            <span className="font-semibold">CIF Number:</span>{' '}
            <span className="bg-slate-300 border border-black px-10 rounded-full">1234567890AB</span>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-10">
            <span className="font-semibold">Account Restriction:</span>{' '}
            <span className="bg-slate-300 border border-black px-10 rounded-full">None</span>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-10">
            <span className="font-semibold">Created On:</span>
            <span className="bg-slate-300 border border-black px-10 rounded-full">01-04-2024</span>
          </div>
        </div>
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 absolute right-20 bottom-20" onClick={handleEdit}>
        Edit
      </button>
    </div>
        </div>
      </div>
    </>
  );
}

export default Update;
