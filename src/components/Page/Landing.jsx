import React, { useEffect , useState} from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import user from "../Assets/landingUser.svg";
import image from "../Assets/image.png";
import pie from "../Assets/pie.png";

const Landing = () => {
  useEffect(()=>{
  }, []);

  
  return (
    <div className="h-svh min-h-screen bg-gradient-to-bl from-sky-400 via-sky-300 to-red-300">
      <Navbar />
      <div className="open-container flex">
        <div >
          <Sidebar/>
        </div>

      <div className="flex flex-col m-5 items-center w-svw">

      <div className="flex h-[36svh]">
        <div className="h-[36svh] bg-slate-200 rounded-lg mx-2 px-4 py-6 flex flex-col items-center justify-between ">
            <span className="text-2xl font-semibold">Total Merchants</span>
            <img className="h-[16svh]" src={user} alt="user" />
            <span className="text-2xl font-bold">100</span>
        </div>

        <div className="bg-gray-200 flex rounded-lg h-[36svh] mx-2 p-2">
            <div className="h-[36svh] flex flex-col items-center justify-between py-4 px-4">
            <div className="">
              <h1 className="text-2xl font-bold text-center">Merchant Status</h1>
            </div>
            <div>
            <img className="h-[16svh]" src={image} alt="" />
            </div>
            <div className="flex">
              <span className="mr-2">
                <h1 className="text-green-600 text-center font-semibold">Active Merchants</h1>
                <h1 className="text-green-600 text-center font-bold">90</h1>
              </span>
              <span>
                <h1 className="text-red-600 text-center font-semibold">In Active Merchants</h1>
                <h1 className="text-red-600 text-center font-bold">10</h1>
              </span>
            </div>
            </div>
            <img className="h-[30svh] mt-[3svh]" src={pie} alt="" />
        </div>

      </div>




      <div className="border-8 rounded-lg p-4 m-4 mt-[8svh]">
        <h1 className="text-center text-3xl font-bold mb-2">Merchant Maker Checker Status</h1>

        <div className="flex justify-between px-10">

            <div className="border-2 bg-sky-100	 border-black rounded-md w-[10svw] h-[18svh] mx-2">
              <div className="text-2xl text-center text-blue-800 font-semibold">Maker</div>
              <div className="text-2xl text-center text-blue-800 font-semibold">Request</div>
              <div className="text-2xl text-center text-sky-800 font-semibold">3</div>
            </div>

            <div className="border-2 bg-orange-100 border-black rounded-md w-[10svw] h-[18svh] mx-2" >
              <div className="text-2xl text-center text-blue-800 font-semibold">Checker</div>
              <div className="text-2xl text-center text-blue-800 font-semibold">Pending</div>
              <div className="text-2xl text-center text-orange-800 font-semibold">3</div>
            </div>

            <div className="border-2 bg-green-100 border-black rounded-md w-[10svw] h-[18svh] mx-2" >
              <div className="text-2xl text-center text-blue-800 font-semibold">Checker</div>
              <div className="text-2xl text-center text-blue-800 font-semibold">Approved</div>
              <div className="text-2xl text-center text-green-800 font-semibold">3</div>
            </div>

            <div className="border-2 bg-red-100 border-black rounded-md w-[10svw] h-[18svh] mx-2" >
              <div className="text-2xl text-center text-blue-800 font-semibold">Checker</div>
              <div className="text-2xl text-center text-blue-800 font-semibold">Rejected</div>
              <div className="text-2xl text-center text-red-800 font-semibold">3</div>
            </div>

        </div>

      </div>




</div>
      </div>
      
    </div>
  );
};

export default Landing;
