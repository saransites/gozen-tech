import React, { useState, useMemo, useCallback, lazy, Suspense } from "react";
import MyList from "./Largelists";

const LazyloadComponents = lazy(() => import("./LazyloadComponents"));

const ExpensiveComponent = ({ compute }) => {
  const result = useMemo(() => compute(), [compute]);
  return <h1 className="text-2xl text-white">{result}</h1>;
};

const Task10 = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const computeExpensiveValue = useCallback(() => {
    console.log("only logging click increment function...");
    return count * 2;
  }, [count]);

  const style = {
    backgroundColor: otherState ? "green" : "red",
    padding: 6,
  };
  return (
    <div style={style}>
      <div className="flex justify-center items-center flex-col gap-2">
        <button
          className="p-2 px-6 rounded bg-slate-600"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="p-2 px-6 rounded bg-lime-500 ml-2"
          onClick={() => setOtherState(!otherState)}
        >
          Toggle background
        </button>
        <ExpensiveComponent compute={computeExpensiveValue} />
      </div>
      <Suspense fallback={<h1 className="text-2xl">Loading...Please Wait</h1>}>
        <LazyloadComponents />
      </Suspense>
      <MyList/>
    </div>
  );
};

export default Task10;
