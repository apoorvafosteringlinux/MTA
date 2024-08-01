import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import background from "./Assets/loginbg.svg";
import loginlogo from "./Assets/logo.png";
import man from "./Assets/loginman.jpeg";
import { FaUserAlt } from "react-icons/fa";
import { MdLock, MdError } from "react-icons/md";
import axios, { AxiosHeaders } from "axios";
import { jwtDecode } from "jwt-decode";


const Login = () => {

  const data = [
    { "user-id": "user1", password: "fino1" },
    { "user-id": "user2", password: "fino2" },
    { "user-id": "user3", password: "fino3" },
    { "user-id": "user4", password: "fino4" },
    { "user-id": "user5", password: "fino5" },
  ];

const [userId, setUserId] = useState("");
const [password, setPassword] = useState("");
const [userIdError, setUserIdError] = useState("");
const [passwordError, setPasswordError] = useState("");

const [showInvalidMessage, setShowInvalidMessage] = useState(false);
const navigate = useNavigate();

const handleSubmit = (e) => { 
  
  e.preventDefault();
  
  const client_id = import.meta.env.VITE_CLIENT_ID;
  const client_secret = import.meta.env.VITE_CLIENT_SECRET;
  console.log(client_id);
  const data ={
    username:userId,
    grant_type:'password',
    client_id: client_id,
    client_secret:client_secret,
    password:password
  };

  
  
  axios.post(import.meta.env.VITE_KEYCLOAK_URL,data,
  {headers: { 'content-type': 'application/x-www-form-urlencoded' }}
  ).then(function(response){
    console.log("Hii PC!,how are you",response)
    const userToken = jwtDecode(response.data.access_token)
    console.log("Apoooooooooo",userToken)
    // setCookie("data",userToken);
    document.cookie = `myCookie=${response.data.access_token}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
    document.cookie = `userCookie=${userToken.name}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;

    navigate("/landing",{state: { userName : userToken.name}});
  })
    // Reset error messages
    setUserIdError("");
    setPasswordError("");
    setShowInvalidMessage(false);

    // Check if userId and password are valid
    // const validUser = data.find((user) => user["user-id"] === userId && user.password === password);

 

    // if (validUser) {
    //   // Redirect to landing page
    //   navigate("/landing");
    // } else {
    //   setShowInvalidMessage(true);

    //   // Display error messages
    //   if (!userId) {
    //     setUserIdError("");
    //   // } else if (userId.length !== 5) {
    //     // setUserIdError("User ID must be 5 characters long.");
    //   } else {
    //     setUserIdError("");
    //   }

    //   if (!password) {
    //     setPasswordError("");
    //   // } else if (password.length !== 5) {
    //     // setPasswordError("Password must be 5 characters long.");
    //   } else {
    //     setPasswordError("");
    //   }
    // }
  };


  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
    setShowInvalidMessage(false); // Reset showInvalidMessage when user starts typing
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setShowInvalidMessage(false); // Reset showInvalidMessage when user starts typing
  };

  return (
    <div
      className="bg-cover bg-center h-svh"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex justify-center">
        <img
          className="w-[30svw] h-[12svh] m-5"
          src={loginlogo}
          alt="logo"
        />
      </div>

      <div className="flex justify-center">
        <div className=" bg-gradient-to-r from-cyan-300 to-slate-50 text-5xl font-medium rounded-full p-3">
          Welcome to New Login Page of MTA
        </div>
      </div>

      <div className="flex justify-end ">
        <div className="w-[50svw] h-[70svh] relative">
          <img className="w-full h-full" src={man} alt="loginman" />

          {showInvalidMessage && (
            <div className="flex bg-gradient-to-r from-cyan-300 to-slate-50 rounded-2xl p-2 absolute left-[4svw] top-[24svh]">
              <MdError size={22}/>
              <span className="ml-2 text-red-500 pr-2">Enter valid user ID or password</span>
            </div>
          )}

          <div className="absolute left-[5svw] top-[32svh] h-[32svh] w-[30svw] mt-[1svh]">

            <div className="flex m-3 p-3 mb-5 bg-[#d0cfef] rounded-2xl">
              <div className="mx-3 mt-1">
                <FaUserAlt />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="User ID*"
                  className="bg-[#d0cfef] w-[24svw] placeholder-gray-500 outline-none focus:border-red-500 focus:ring-0"
                  value={userId}
                  // onChange={(e) => setUserId(e.target.value)}
                  onChange={handleUserIdChange}
                  pattern=".{5}"
                  // title="User ID must be 5 characters long"
                  required
                />
                {userIdError && <p className="text-red-500">{userIdError}</p>}
              </div>
            </div>

            <div className="flex m-3 p-3 mb-5 bg-[#d0cfef] rounded-2xl">
              <div className="mx-2">
                <MdLock size={20}/>
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password*"
                  className="bg-[#d0cfef] w-[24svw] placeholder-gray-500 outline-none focus:border-red-500 focus:ring-0"
                  value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  onChange={handlePasswordChange}
                  pattern=".{5}"
                  // title="Password must be 5 characters long"
                  required
                />
                {passwordError && <p className="text-red-500">{passwordError}</p>}
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="bg-[#d0cfef] py-3 px-8 rounded-xl ml-[12svw] text-xl font-bold transform transition duration-200 hover:scale-95 active:scale-90"
            >
              Login
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
