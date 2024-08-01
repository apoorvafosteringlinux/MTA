import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Addholdstatus from "./Addholdstatus";
import { HandCoins } from "lucide-react";


function Addholdpage() {

  const [showholdstatus, setShowholdstatus] = useState(false);

  const handleSubmit = () => {
    setShowholdstatus(true);
  };


  const navigate = useNavigate();
  function handleBack() {
    navigate('/merchant-hold');
}
  return (
    <>
      <div>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="bg-white p-12 rounded-lg shadow-md relative">
      
      <div className="flex justify-between">
      <h2 className="text-xl font-semibold mb-10">Add Hold </h2>
          <button className="bg-red-400 h-10 w-20 rounded-xl" onClick={handleBack}>Back</button>
      </div>

      <div className="grid grid-cols-3 gap-10">

          <div className="mb-4 grid grid-cols-2 gap-10">
            <span className="font-semibold">Aggregated Balance : </span>
            <span className="bg-slate-300 border border-black px-10 rounded-full">10000</span>
          </div>


          <div className="mb-4 grid grid-cols-2 gap-10">
            <span className="font-semibold">Available Balance : </span>
            <span className="bg-slate-300 border border-black px-10 rounded-full">10000</span>
          </div>


          <div className="mb-4 grid grid-cols-2 gap-10">
            <span className="font-semibold">Existing Hold : </span>
            <span className="bg-slate-300 border border-black px-10 rounded-full">10000</span>
          </div>
      </div>

      <div className="grid grid-cols-2 gap-24">

        <div>
          <div className="mb-4 grid grid-cols-2 gap-10">
            <span className="font-semibold">Account Number : </span>
            <span className="border border-black px-10 rounded-full" >1234567890</span>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-10">
            <span className="font-semibold">Start Date : </span>{' '}
            <input className="border border-black px-10 rounded-full" type="date"/>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-10">
            <span className="font-semibold">Expiration Date :</span>{' '}
            <input className="border border-black px-10 rounded-full" type="date" />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-10">
            <span className="font-semibold">Hold Amount : </span>{' '}
            {/* <span className=" border border-black px-10 rounded-full cursor-pointer" >2500</span> */}
            <input className=" border border-black px-10 rounded-full cursor-pointer" />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-10">
            <span className="font-semibold">Permanent Hold Code :</span>{' '}
            <select className="border border-black px-10 rounded-full" name="cars" id="cars">
                <option value="volvo">1 - Secured Loan</option>
                <option value="saab">2 - Count Order</option>
                <option value="mercedes">3 - Minimum Required Balance</option>
            </select>
          </div>
        </div>

        {/* <div>
          <div className="mb-4 grid grid-cols-2 gap-10">
            <span className="font-semibold">Existing Hold :</span>
            <span className="border border-black px-10 rounded-full">1000</span>
            
          </div>
        </div> */}


      </div>
      <div className="grid grid-cols-2 gap-10">
      <button className="mt-4 px-4 py-2 bg-blue-400 text-black rounded hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={handleSubmit}>
        Submit
      </button>
      <button className="mt-4 px-4 py-2 bg-blue-400 text-black rounded hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Cancel
      </button>
      </div>
    </div>
        </div>
        {showholdstatus && (
        <Addholdstatus onClose={() => setShowholdstatus(false)}/>
        )}

      </div>
    </>
  );
}

export default Addholdpage;
