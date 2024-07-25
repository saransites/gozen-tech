import React, { useEffect, useState } from "react";
import Contents from "./Contents";
import Navbar from "./Navbar";

const Task6 = () => {
  const [isActive, setIsActive] = useState(false);
  const ScrollFunction = () => {
    setIsActive(window.scrollY > 45);
  };
  useEffect(() => {
    window.addEventListener("scroll", ScrollFunction);
    return () => {
      window.removeEventListener("scroll",ScrollFunction);
    };
  }, []);
  return (
    <div>
        <h1 className="text-center m-4">Scroll the page... and refresh the page...</h1>
      <Navbar active={isActive}/>
      <Contents />
    </div>
  );
};

export default Task6;
