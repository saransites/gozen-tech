import React from "react";
import Task7Sidebar from "./Task7Sidebar";
import { Outlet } from "react-router-dom";

const Task7 = () => {
  return (
    <div className="flex">
      <div className="flex-grow">
        <Task7Sidebar />
      </div>
      <div className="p-4 flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default Task7;
