import React, { useState,useEffect } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Openingstatus from "./Openingstatus";
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";


function Opening() {
  const [showOpeningstatus, setShowOpeningstatus] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    accountNumber: '',
    customerName: '',
    address: '',
    gstin: '',
    branchCode: '',
    accountType: 'Currents',
    panNumber: '',
    phoneNumber: '',
    cifNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'panNumber') {
      // const panRegex = /^[A-Z0-9]+$/;

      const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
      
      if (panRegex.test(value) || value === '') {
        setFormData({ ...formData, [name]: value.toUpperCase() });
      }
    }  else if (name === 'gstin') {
      const gstinRegex = /^([0][1-9]|[1-2][0-9]|[3][0-7])([A-Z]{5})([0-9]{4})([A-Z]{1}[1-9A-Z]{1})([Z]{1})([0-9A-Z]{1})$/;
      // const gstinRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[A-Z\d]{1}Z[A-Z\d]{1}$/;
      if (gstinRegex.test(value) || value === '') {
        setFormData({ ...formData, [name]: value });
      }
    }else if (name === 'phoneNumber') {
      // const phoneRegex = /^[0-9]+$/;
      const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
      if (phoneRegex.test(value) || value === '') {
        setFormData({ ...formData, [name]: value });
      }
    } else if (name === 'customerName') {
      const nameRegex = /^[a-zA-Z ]+$/;
      if (nameRegex.test(value) || value === '') {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(import.meta.env.VITE_CREATEACCOUNT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setApiResponse(data);
      setShowOpeningstatus(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  function handleLanding() {
    navigate('/landing');
  }

  const isFormValid = Object.values(formData).every(value => value.trim() !== '');

  useEffect(()=>{
    setName(state && state.userName); // Update name state only if state is not null
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="bg-white p-12 rounded-lg shadow-md relative w-[svw]">
            <h1 className="text-2xl font-bold mb-8">Merchant Addition</h1>
            <div className="grid grid-cols-2 gap-32 mb-10">
              <div>
                <div className="mb-4 grid grid-cols-2 gap-10">
                  <span className="font-semibold">Account Number:<span className="text-red-500">*</span></span>
                  <input
                    className="border border-black px-10 rounded-full"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-10">
                  <span className="font-semibold">Customer Name:<span className="text-red-500">*</span></span>
                  <input
                    className="border border-black px-10 rounded-full"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-10">
                  <span className="font-semibold">Address:<span className="text-red-500">*</span></span>
                  <input
                    className="border border-black px-10 rounded-full"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-10">
                  <span className="font-semibold">GSTIN:<span className="text-red-500">*</span></span>
                  <input
                    className="border border-black px-10 rounded-full"
                    type="text"
                    name="gstin"
                    value={formData.gstin}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-10">
                  <span className="font-semibold">Branch Code:<span className="text-red-500">*</span></span>
                  <input
                    className="border border-black px-10 rounded-full"
                    name="branchCode"
                    value={formData.branchCode}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>


              <div>
                <div className="mb-4 grid grid-cols-2 gap-10">
                  <span className="font-semibold">Account Type:<span className="text-red-500">*</span></span>
                  <select
                    className="border border-black px-10 rounded-full"
                    name="accountType"
                    value={formData.accountType}
                    onChange={handleChange}
                    required
                  >
                    <option value="Currents">Currents</option>
                    <option value="Savings">Savings</option>
                  </select>
                </div>
                <div className="mb-4 grid grid-cols-2 gap-10">
                  <span className="font-semibold">PAN Number:<span className="text-red-500">*</span></span>
                  <input
                    className="border border-black px-10 rounded-full"
                    name="panNumber"
                    value={formData.panNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-10">
                  <span className="font-semibold">Phone Number:<span className="text-red-500">*</span></span>
                  <input
                    className="border border-black px-10 rounded-full"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4 grid grid-cols-2 gap-10">
                  <span className="font-semibold">CIF Number:<span className="text-red-500">*</span></span>
                  <input
                    className="border border-black px-10 rounded-full"
                    name="cifNumber"
                    value={formData.cifNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-24">
              <button
                className={`mt-4 px-4 py-2  text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${isFormValid ? 'bg-blue-500' : 'bg-blue-300 hover:bg-blue-300'}`}
                onClick={handleSubmit}
                disabled={!isFormValid}
              >
                Submit
              </button>
              <button
                className="mt-4 px-4 py-2  bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={handleLanding}
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
        {showOpeningstatus && (
          <Openingstatus
            onClose={() => setShowOpeningstatus(false)}
            apiResponse={apiResponse}
          />
        )}
      </div>
    </>
  );
}

export default Opening;
