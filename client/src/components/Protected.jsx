import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ Component }) => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token || !user) {
      navigate("/");
    }
  }, []);
  return <>{token && user && <Component />}</>;
};

export default Protected;
