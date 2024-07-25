import React from "react";

const Navbar = ({ active }) => {
  return (
    <nav style={{transition:"all 1s ease"}} className={`${active ? "bg-green-500" : "bg-red-400"} sticky top-0 transition duration-300 p-2 shadow-[0_0_10px_black]`}>
      <ul className="flex justify-around p-2">
        <li className="bg-white rounded-full hover:bg-red-400 hover:text-white cursor-pointer transition duration-500 p-2 px-6">
          Home
        </li>
        <li className="bg-white rounded-full hover:bg-red-400 hover:text-white cursor-pointer transition duration-500 p-2 px-6">
          About Us
        </li>
        <li className="bg-white rounded-full hover:bg-red-400 hover:text-white cursor-pointer transition duration-500 p-2 px-6">
          Contact
        </li>
        <li className="bg-white rounded-full hover:bg-red-400 hover:text-white cursor-pointer transition duration-500 p-2 px-6">
          Services
        </li>
        <li className="bg-white rounded-full hover:bg-red-400 hover:text-white cursor-pointer transition duration-500 p-2 px-6">
          Blog
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
