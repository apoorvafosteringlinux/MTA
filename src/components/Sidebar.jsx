// import React from "react";
// import { NavLink } from "react-router-dom";

// function Sidebar() {
//   return (
//     <div className="Side h-[calc(100vh-100px)]   flex flex-col bg-indigo-400 w-72">

//       <NavLink to="/merchant-opening">
//         <button className="py-2.5 px-8 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Merchant A/c Opening</button>
//       </NavLink>

//       <NavLink to="/merchant-update">
//         <button>Merchant Update</button>
//       </NavLink>

//       <NavLink to="/merchant-dashboard">
//         <button>Maker Checker Dashboard</button>
//       </NavLink>
      
//       <NavLink to="/merchant-activitypage">
//         <button>Maker Cheaker Activity</button>
//       </NavLink>
//     </div>
//   );
// }

// export default Sidebar;


// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { RxHamburgerMenu } from "react-icons/rx";
// import { RxCross1 } from "react-icons/rx";
// import { TiHome } from "react-icons/ti";
// import { FaUsers } from "react-icons/fa";
// import { TbFileReport } from "react-icons/tb";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <aside className={`sidebar ${isOpen ? 'px-86' : ''}`}>
//       <div className="inner bg-purple-700 text-white w-56 h-full flex flex-col">
//         <header className="flex items-center justify-between p-4">
//           <button
//             type="button"
//             className="sidebar-burger text-white focus:outline-none"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <span className="icon">
//               {isOpen ? <RxHamburgerMenu /> : <RxCross1 />}
//             </span>
//           </button>

//         </header>

//         <nav className="flex-1">

          
//           <button>{isOpen ? <TiHome /> : 'Merchant Account'}</button>


// <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
// <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
// </svg>
// </button>


// <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
//     <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
//       <li>
//         <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mechant Addition</a>
//       </li>
//       <li>
//         <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Merchant Update</a>
//       </li>
//     </ul>
// </div>


//           <button>
//             {isOpen ? <FaUsers /> : 'Merchant Maker Checker'}
//           </button>

//           <NavLink
//             to="/merchant-reports"
//             className="block py-2 px-4 hover:bg-purple-800 focus:bg-purple-800"
//           >
//             {isOpen ? <TbFileReport /> : 'Merchant Reports' }
//           </NavLink>

//         </nav>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import sidebarlogo from "./Assets/fino.jpg"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  // const [name, setName] = useState("");

//useEffect
  useEffect(() => {
    // setName(props.message)
  }, []);

  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setActiveItem(null);
  };

  const toggleSubItems = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  const menuItems = [
    {
      label: "Merchant Account",
      icon: "🏭",
      color: "bg-gradient-to-r from-red-600 to-blue-600 text-white",
      subItems: [
        { label: "Merchant Addition", path: "/merchant-addition", color: "text-blue-600" },
        { label: "Merchant Update", path: "/merchant-update-search", color: "text-blue-600"},
      ],
    },

    {
      label: "Merchant Maker Checker",
      icon: "✅",
      color: "bg-gradient-to-r from-red-600 to-blue-600 text-white",
      subItems: [
        { label: "Maker Checker Queue", path: "/maker", color: "text-blue-600" },
        // { label: "Checker", path: "/checker", color: "text-blue-600" },
        // { label: "Maker Checker Status", path: "/maker-checker-status", color: "text-blue-600" },
        { label: "Maker Checker Dashboard", path: "/maker-checker-dashboard", color: "text-blue-600"},
      ],
    },
    
    {
      label: "Merchant Reports",
      icon: "📊",
      color: "bg-gradient-to-r from-red-600 to-blue-600 text-white",
      subItems: [
        { label: "Account Status Report", path: "/account-status-report", color: "text-blue-600" },
        { label: "Commission Report", path: "/commission-report", color: "text-blue-600" },
        { label: "Merchant Detail Report", path: "/merchant-detail-report", color: "text-blue-600" },
        { label: "Real Time Report", path: "/real-time-report", color: "text-blue-600" },
        { label: "Recon Report", path: "/recon-report", color: "text-blue-600" },
      ],
    },
  ];

  const handleSubItemClick = (path) => {
    navigate(path);
  };

  return (
    <div className="flex mt-2">
      <div
        className={`bg-gray-400 rounded-md mx-2  text-white h-[calc(100svh-14svh)] ${
          isOpen ? "w-64" : "w-20"
        } duration-500 relative`}
      >
        <div className="flex items-center justify-between px-4 py-2">
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
          >
            <span className="text-2xl">&#9776;</span>
          </button>
          {/* <h1 className={`text-xl font-bold ${!isOpen && "hidden"}`}>Fino</h1> */}
          <img className={`px-4 py-2 ${!isOpen && "hidden"}`} src={sidebarlogo} alt="logo" />
        </div>
        
        <nav>
          {menuItems.map((item, index) => (
            <div key={index} className="px-4 py-2">
              <span
                className={`flex items-center cursor-pointer py-2 px-3 rounded-md ${item.color}`}
                onClick={() => toggleSubItems(index)}
              >
                <span onClick={toggleSidebar} className="mr-2">{item.icon}</span>
                <span className={`text-sm font-medium ${!isOpen && "hidden"}`}>
                  {item.label}
                </span>
              </span>
              {activeItem === index && isOpen && (
                <ul className="pl-4 mt-2 bg-white p-1" >
                  {item.subItems.map((subItem, subIndex) => (
                    <li
                      key={subIndex}
                      className={`text-sm cursor-pointer flex items-center py-1 px-2 hover:bg-gradient-to-r from-red-200 to-blue-200  ${subItem.color}`}
                      onClick={() => handleSubItemClick(subItem.path)}
                    >
                      <span className="mr-2">&#9679;</span> {subItem.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;