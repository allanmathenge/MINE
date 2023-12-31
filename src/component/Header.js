import React from "react";
import logo from "../assets/ChickenLogo.jpg";

const Header = () => {
  return (
    <header className="fixed shadow-md w-full h-28 px-2 md:px-4">
      {/* desktop */}
      <div className="flex items-center h-full">
        <div className="h-24 ">
          <img src={logo} className="h-full" alt="Our logo" />
        </div>
      </div>

      {/* mobile */}
    </header>
  );
};

export default Header;
