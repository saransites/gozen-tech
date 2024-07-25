import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useApi from "../Redux/UseApi";

const Signup = () => {
  const api = useApi();
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
    if (!formData.email || !formData.password) {
      alert("please enter all fields...");
      return;
    }
    try {
      const res = await api.post("/auth/signup", formData);
      if (res.status === 201) {
        alert("signup successfully");
        navigate("/");
      }
    } catch (err) {
      if (err.response.status === 401) {
        alert(err.response.data.message);
        return;
      }
      if (err.response.status === 400) {
        alert(err.response.data.message);
        return;
      }
      console.error(err);
    }
  };
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">

      <form
        onSubmit={handleSubmit}
        className="mx-auto mb-0 mt-8 max-w-md space-y-4 bg-sky-600 text-white p-4 rounded"
        action="#"
      >
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Signup</h1>
      </div>
        <div>
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <input
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              id="email"
              type="email"
              name="email"
              value={formData.email}
            />
          </div>
        </div>

        <div>
          <label className="sr-only" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              id="password"
              type="password"
              name="password"
              value={formData.password}
            />
          </div>
        </div>
        <button
          className="block mx-auto rounded-lg bg-purple-600 px-5 py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          type="submit"
        >
          Signup
        </button>
        <p>
          Already have an account?{" "}
          <Link to="/" className="text-black underline">
            Login
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Signup;
