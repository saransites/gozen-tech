import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../Redux/Slice";
import useApi from "../Redux/UseApi";

const Login = () => {
  const api = useApi();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", formData);
      const { token, user } = res.data;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      dispatch(setUser(user));
      dispatch(setToken(token));
      navigate("/alltasks");
    } catch (err) {
      console.log(err);
      if (err.response.status === 401) {
        alert(err.response.data.message);
        return;
      }
      if (err.response.status === 404) {
        alert("invalid password");
        return;
      }
      console.log(err);
    }
  };
  return (
    <div className="grid place-items-center h-[100dvh]">
      <div className="max-w-md relative flex flex-col p-10 rounded-md text-black bg-slate-400">
        <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
          Welcome back to <span className="text-[#7747ff]">Gozen Technologies</span>
        </div>
        <div className="font-medium mb-4 text-center text-[#1e0e4b]">
          Log in to your account
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="relative">
            <label
              htmlFor="email"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Email
            </label>
            <input
              onChange={handleChange}
              value={formData.email}
              name="email"
              type="text"
              id="email"
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
            ></input>
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
            >
              Password
            </label>
            <input
              onChange={handleChange}
              value={formData.password}
              name="password"
              type="text"
              id="password"
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            ></input>
          </div>
          <button
            type="submit"
            className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
          >
            Login
          </button>
        </form>
        <div className="text-sm text-center mt-[1.6rem]">
          Don’t have an account yet?{" "}
          <Link to="/signup" className="text-sm text-[#fff] underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
