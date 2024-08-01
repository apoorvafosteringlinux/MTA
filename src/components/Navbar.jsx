import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './Assets/logo.png'
import { jwtDecode } from "jwt-decode";


/* eslint-disable */
function Navbar() {

  const [currentTime, setCurrentTime] = useState('');
  const [name, setName] = useState("");

  useEffect(() => {
    setName(getCookie("userCookie"))
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = `${formatDigit(now.getDate())}/${formatDigit(now.getMonth() + 1)}/${now.getFullYear()} - ${formatDigit(now.getHours())}:${formatDigit(now.getMinutes())}:${formatDigit(now.getSeconds())}`;
      setCurrentTime(formattedTime);
      
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getCookie = (name) => {
    const cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
      let cookiePair = cookieArr[i].split('=');
      if (name === cookiePair[0].trim()) {
        return decodeURIComponent(cookiePair[1]);
      }
    }
    return null;
  };

  
  const formatDigit = (digit) => {
    return digit < 10 ? `0${digit}` : digit;
  };


  const navigate = useNavigate();

    function handleLanding() {
        console.log("HOME")
        navigate("/landing");
    }

    function handleLogout() {
      navigate('/');
    }

  return (
      <nav className="flex justify-between bg-[#dfd3e0] rounded-3xl w-screen h-[12svh]">

          <div className="logo m-[2svh]">
            <img src={logo} onClick={handleLanding} className=' h-[8svh] w-auto rounded' href ='#' alt='logo' />
          </div>

          <div className="container-1 m-[3svh]">
            <p>User Name: {name} - Backoffice</p>
          </div>

          <div className="container-2 m-[3svh]">
            <span>{currentTime}</span>
          </div>

          <div className='container-3 m-[3svh] '>
            <button onClick={handleLogout} className='text-black bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded-2xl text-lg' type="submit">Log Out</button>
          </div>

    </nav>
  );
}

export default Navbar;
