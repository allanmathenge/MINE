import React, { useState } from "react";
import LoginProfile from "../assets/login-animation.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRedux } from "../redux/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state);

  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = data;

    if (email && password) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/login`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      const dataRes = await fetchData.json();

      toast(dataRes.message);

      if (dataRes.alert) {
        dispatch(loginRedux(dataRes));
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }

      console.log(userData);
    } else {
      alert("Please enter the required fields");
    }
  };

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

          <button
            type="submit"
            className="w-full max-w-[150px] bg-red-600 hover:bg-red-700 cursor-pointer m-auto text-white text-xl py-1 rounded-full mt-4"
          >
            Login
          </button>
        </form>

        <p className="text-left text-sm mt-2">
          Create new account?{" "}
          <Link to={"/signup"} className="text-red-500 underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
