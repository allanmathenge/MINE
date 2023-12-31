import React, { useState } from "react";
import LoginProfile from "../assets/login-animation.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, email, password, confirmPassword } = data;

    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        alert(`Welcome ${firstName}`);
      } else {
        alert("Password and confirm password do not match");
      }
    } else {
      alert("Please enter the required fields");
    }
  };
  console.log(data);

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-2">
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto">
          <img src={LoginProfile} alt="Login Profile" className="w-full" />
        </div>

        <form
          className="w-full py-3 flex flex-col gap-2"
          onSubmit={handleSubmit}
        >
          <label htmlFor="firstName">First Name:</label>
          <input
            type={"text"}
            id="firstName"
            placeholder="Your first name"
            name="firstName"
            className=" text-md w-full bg-slate-200 px-2 py-1 rounded focus-within:outline focus-within:outline-blue-600 outline-1 mb-2"
            value={data.firstName}
            onChange={handleOnChange}
          />

          <label htmlFor="lastName">Last name:</label>
          <input
            type={"text"}
            id="lastName"
            placeholder="Your last name"
            name="lastName"
            className=" text-md w-full bg-slate-200 px-2 py-1 rounded focus-within:outline focus-within:outline-blue-600 outline-1 mb-2"
            value={data.lastName}
            onChange={handleOnChange}
          />

          <label htmlFor="email">Your email:</label>
          <input
            type={"text"}
            id="email"
            placeholder="Your email"
            name="email"
            className=" text-md w-full bg-slate-200 px-2 py-1 rounded focus-within:outline focus-within:outline-blue-600 outline-1 mb-2"
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password:</label>
          <div className="flex px-2 py-1 focus-within:outline focus-within:outline-blue-600 outline-1 bg-slate-200 rounded  mb-2">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Your password"
              name="password"
              className=" text-md w-full bg-slate-200 outline-none"
              value={data.password}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          <label htmlFor="confirmPassword">Confirm password:</label>
          <div className="flex px-2 py-1 focus-within:outline focus-within:outline-blue-600 outline-1 bg-slate-200 rounded  mb-2">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="Confirm your password"
              name="confirmPassword"
              className=" text-md w-full bg-slate-200 outline-none"
              value={data.confirmPassword}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowConfirmPassword}
            >
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full max-w-[150px] bg-red-600 hover:bg-red-700 cursor-pointer m-auto text-white text-xl py-1 rounded-full mt-4"
          >
            Sign up
          </button>
        </form>

        <p className="text-left text-sm mt-2">
          Already have account?{" "}
          <Link to={"/login"} className="text-red-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
