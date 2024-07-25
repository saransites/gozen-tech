import React, { useState } from "react";

function Task2() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    if (count <= 0) {
      alert("does not decrease the value when value is zero");
      return;
    }
    setCount(count - 1);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="bg-zinc-300 text-center p-4 rounded">
        <h1 className="text-3xl my-4">Value is : {count}</h1>
        <button
          onClick={Increment}
          className="p-2 px-6 bg-green-700 rounded text-white ml-1"
        >
          increase
        </button>
        <button
          onClick={Decrement}
          className="p-2 px-6 bg-red-700 rounded text-white ml-1"
        >
          decrease
        </button>
      </div>
    </div>
  );
}

export default Task2;
