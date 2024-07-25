import React, { useState } from "react";

const Task4 = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const FormValidate = () => {
    let formErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s]+$/;
    const phoneRegex = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
    formErrors.name = formData.name ? "" : "Name is Required";
    formErrors.phone =
      formData.phone && phoneRegex.test(formData.phone)
        ? ""
        : "Valid phone is Required";
    formErrors.email =
      formData.email && emailRegex.test(formData.email)
        ? ""
        : "Valid email is Required";
    formErrors.password = formData.password ? "" : "Password is Required";

    setErrors(formErrors);
    console.log(formErrors);
    return Object.values(formErrors).every((field) => field === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (FormValidate()) {
      alert(
        `name : ${formData.name}\nage : ${formData.phone}\nemail : ${formData.email}\npassword : ${formData.password}`
      );
    }
  };
  return (
    <div className="flex flex-col justify-center h-[100dvh] items-center">
      <h1 className="font-bold my-2 text-2xl">Form Submission</h1>
      <form onSubmit={handleSubmit} className="bg-sky-600 p-4 px-8 rounded">
        <div>
          <label className="block text-sm font-bold my-2 text-white">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border-2 border-gray-300 p-2 rounded w-full"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-bold my-2 text-white">phone</label>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border-2 border-gray-300 p-2 rounded w-full"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-bold my-2 text-white">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-2 border-gray-300 p-2 rounded w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-bold my-2 text-white">Password</label>
          <input
            type="password"
            className="border-2 border-gray-300 rounded w-full p-2"
            value={formData.password}
            name="password"
            onChange={handleChange}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>
        <button
          type="submit"
          className="p-3 px-6 my-2 mx-auto block rounded bg-green-500 text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Task4;
