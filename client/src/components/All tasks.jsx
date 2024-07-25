import React from "react";
import { Link } from "react-router-dom";

const AllTasks = () => {
  return (
    <div className="container mx-auto p-4 h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">All Tasks</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <Link to="/task1" className="bg-red-300 p-4 rounded hover:bg-red-400 transition duration-300 text-center">
          Task 1
        </Link>
        <Link to="/task2" className="bg-green-300 p-4 rounded hover:bg-green-400 transition duration-300 text-center">
          Task 2
        </Link>
        <Link to="/task3" className="bg-blue-300 p-4 rounded hover:bg-blue-400 transition duration-300 text-center">
          Task 3
        </Link>
        <Link to="/task4" className="bg-yellow-300 p-4 rounded hover:bg-yellow-400 transition duration-300 text-center">
          Task 4
        </Link>
        <Link to="/task5" className="bg-purple-300 p-4 rounded hover:bg-purple-400 transition duration-300 text-center">
          Task 5
        </Link>
        <Link to="/task6" className="bg-pink-300 p-4 rounded hover:bg-pink-400 transition duration-300 text-center">
          Task 6
        </Link>
        <Link to="/task7" className="bg-indigo-300 p-4 rounded hover:bg-indigo-400 transition duration-300 text-center">
          Task 7
        </Link>
        <Link to="/task8" className="bg-teal-300 p-4 rounded hover:bg-teal-400 transition duration-300 text-center">
          Task 8
        </Link>
        <Link to="/task10" className="bg-orange-300 p-4 rounded hover:bg-orange-400 transition duration-300 text-center">
          Task 10
        </Link>
        <Link to="/task14" className="bg-gray-300 p-4 rounded hover:bg-gray-400 transition duration-300 text-center">
          Task 14
        </Link>
      </div>
    </div>
  );
};

export default AllTasks;
