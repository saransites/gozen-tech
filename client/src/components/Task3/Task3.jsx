import React, { useState } from "react";
import {
  ErrorComponents,
  LoadingComponents,
  SuccessComponents,
} from "./Components";

const Task3 = () => {
  const [status, setStatus] = useState("loading");

  const handleLoading = () => setStatus("loading");
  const handleSuccess = () => setStatus("success");
  const handleError = () => setStatus("error");

  return (
    <div className="container shadow-xl  w-[70vw] mx-auto grid place-items-center h-[50dvh]">
      <div className="space-x-4">
        <button
          onClick={handleLoading}
          className="bg-blue-600 rounded p-2 px-6 text-white"
        >
          Loading
        </button>
        <button
          onClick={handleSuccess}
          className="bg-green-600 rounded p-2 px-6 text-white"
        >
          Success
        </button>
        <button
          onClick={handleError}
          className="bg-red-600 rounded p-2 px-6 text-white"
        >
          Error
        </button>
      </div>

      <div className="p-2 border-2 border-gray-400 rounded">
        {status === "loading" && <LoadingComponents />}
        {status === "success" && <SuccessComponents />}
        {status === "error" && <ErrorComponents />}
      </div>
    </div>
  );
};

export default Task3;
