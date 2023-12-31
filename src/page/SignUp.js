import React from "react";
import LoginProfile from "../assets/login-animation.gif";

const SignUp = () => {
  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-4">
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md">
          <img src={LoginProfile} alt="Login Profile" className="w-full" />
        </div>

        <form>
          <label htmlFor="firstName">First Name</label>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
