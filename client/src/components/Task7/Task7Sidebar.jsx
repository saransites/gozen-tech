import React from "react";
import { NavLink } from "react-router-dom";

const Task7Sidebar = () => {
  return (
    <div className="bg-red-400 w-[60%] h-screen p-6 rounded">
      <ul>
        <li className="mt-2">
          <NavLink
            to="/task7/home"
            className={({ isActive }) =>
              `block text-center p-2 px-6 rounded-full font-bold ${
                isActive ? "shadow-[0_0_10px_black] text-white" : "bg-white"
              }`
            }
          >
            Home
          </NavLink>
        </li>
        <li className="mt-2">
          <NavLink
            to="/task7/about"
            className={({ isActive }) =>
              `block text-center p-2 px-6 rounded-full font-bold ${
                isActive ? "shadow-[0_0_10px_black] text-white" : "bg-white"
              }`
            }
          >
            About
          </NavLink>
        </li>
        <li className="mt-2">
          <NavLink
            to="/task7/contact"
            className={({ isActive }) =>
              `block text-center p-2 px-6 rounded-full font-bold ${
                isActive ? "shadow-[0_0_10px_black] text-white" : "bg-white"
              }`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Task7Sidebar;
