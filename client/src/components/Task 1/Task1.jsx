import React, { useState } from "react";

const Task1 = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    setResult((prev) => [...prev, value]);
    setValue("");
  };

  return (
    <div className="container flex flex-col justify-center h-[100dvh] items-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <div className="mb-4">
          <input
            type="text"
            value={value}
            className="w-full border-2 border-gray-300 p-2 rounded focus:border-teal-600 focus:outline-none transition"
            onChange={handleChange}
            placeholder="Type anything..."
          />
        </div>
        <div className="text-center">
          <button
            onClick={handleSubmit}
            className="bg-teal-600 rounded p-2 px-6 text-white hover:bg-teal-700 transition"
          >
            Submit
          </button>
        </div>
      </div>
      {result.length > 0 && (
        <ul className="bg-white mt-6 p-4 rounded shadow-md w-full max-w-sm">
          {result.map((list, i) => (
            <li
              key={i}
              className="border-b border-gray-200 p-2 last:border-none"
            >
              {list}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Task1;
