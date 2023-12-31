import React, { useState } from "react";
import { Link } from "react-router-dom";
import ChickenLogo from "../assets/icons/chicken.svg";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
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
            <div className="absolute -top-1 -right-1 text-white bg-red-600 w-4 h-4 rounded-full text-sm text-center">
              0
            </div>
          </div>

          <div
            className="text-slate-600 cursor-pointer"
            onClick={handleShowMenu}
          >
            <div className="text-3xl">
              <FaRegCircleUser />
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col">
                <Link to={"newproduct"} className="whitespace-nowrap">
                  New product
                </Link>
                <Link to={"login"} className="whitespace-nowrap">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
    </header>
  );
};

export default Header;
