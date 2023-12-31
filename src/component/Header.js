import React from "react";
import { Link } from "react-router-dom";
import ChickenLogo from "../assets/icons/chicken.svg";
import { FaUserLarge } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50">
      {/* desktop */}

      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-12 ">
            <img src={ChickenLogo} className="h-full" alt="Our logo" />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-7">
          <nav className="flex gap-4 md:gap-7 text-base md:text-lg">
            <Link to={""}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>

          <div className="text-2xl text-slate-600 relative">
            <FaShoppingCart />
            <div className="absolute -top-1 -right-1 text-white bg-red-600 w-4 h-4 rounded-full m-0 p-0 text-sm text-center">
              0
            </div>
          </div>

          <div className="text-2xl text-slate-600">
            <div className="">
              <FaUserLarge />
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
    </header>
  );
};

export default Header;
