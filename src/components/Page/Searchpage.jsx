import React, { useState ,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Searchpage = () => {
  const location = useLocation();
  const state = location.state;
  const [name, setName] = useState(state.userName);
  const navigate = useNavigate();

    function handleUpdatepage() {
        navigate('/merchant-update');
    }

    function handleChangehistorypage() {
      navigate('/merchant-update-change-history');
    }
    
    const [searchType, setSearchType] = useState('accountNumber');
    const [searchTerm, setSearchTerm] = useState('');
    // const [showTable, setShowTable] = useState(false);
    const [accountSearchResult, setaccountSearchResult]=useState(null)
    
    
    
    const handleSearch = async () => {
      try {
        // const response = await axios.get(`import.meta.env.VITE_GETDETAILS_URL?accountNumber=${searchTerm}`);
        const response = await axios.post(import.meta.env.VITE_GETDETAILS_URL);
        
        console.log("response",response.data)
        setaccountSearchResult(response.data)
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };
    
    const handleSearchTypeChange = (e) => {
      setSearchType(e.target.value);
    };
    
    const handleSearchTermChange = (e) => {
      setSearchTerm(e.target.value);
    };
    
    useEffect(()=>{
      setName(state && state.userName); // Update name state only if state is not null
    }, []);
  
    return (
      <div>
      <Navbar message = {name}/>
      <div className="flex">
        <Sidebar />


<div className="bg-white p-10 m-5 rounded-lg shadow-md w-4/6">
<h1 className="text-2xl font-bold  mb-5">Merchant Update </h1>
      <div className="mb-4 flex flex-col items-start">

        <div className="mr-4">
          <span className="font-semibold">Search Type:</span>


          <div className="mt-2 flex">
            <label className="mr-4">
              <input
                type="radio"
                value="accountNumber"
                checked={searchType === 'accountNumber'}
                onChange={handleSearchTypeChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Account Number</span>
            </label>
            <label className="mr-4">
              <input
                type="radio"
                value="mobileNumber"
                checked={searchType === 'mobileNumber'}
                onChange={handleSearchTypeChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Mobile Number</span>
            </label>
            <label>
              <input
                type="radio"
                value="customerNumber"
                checked={searchType === 'customerNumber'}
                onChange={handleSearchTypeChange}
                className="form-radio text-blue-500"
              />
              <span className="ml-2">Customer Number</span>
            </label>
          </div>
        </div>

        <div className="flex-grow mt-10 mb-10">
          <span className="font-semibold">Search For:</span>
          <input
            type="text"
            placeholder="Search For..."
            value={searchTerm}
            onChange={handleSearchTermChange}
            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 mx-8"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </div>

      </div>



      {accountSearchResult && accountSearchResult!=null && (
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-blue-900 text-white font-semibold">
                <th className="px-4 py-2">S.No.</th>
                <th className="px-4 py-2">Account Number</th>
                <th className="px-4 py-2">Customer Name</th>
                <th className="px-4 py-2">Change History</th>
              </tr>
            </thead>
            <tbody>
              {/* {searchResults.map((result, index) => ( */}
                <tr className='bg-gray-100'>
                  <td className="border px-4 py-2">01</td>
                  <td className="border px-4 py-2 text-blue-600 underline" onClick={handleUpdatepage}>{accountSearchResult?.accountNumber}</td>
                  <td className="border px-4 py-2">{accountSearchResult?.merchantName}</td>
                  <td className="border px-4 py-2 text-blue-600 underline" onClick={handleChangehistorypage}>Click Here</td>
                </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>


      </div>
    </div>
  );
};

export default Searchpage;
