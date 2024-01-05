import React, { useState } from "react";
import { Link } from "react-router-dom";
import ChickenLogo from "../assets/icons/chicken.svg";
import { FaRegUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logout successful!");
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
            <div className=" w-8 h-8 rounded-full overflow-hidden drop-shadow-md object-contain">
              {userData.image ? (
                <img
                  src={userData.image}
                  alt="User profile"
                  className="w-full h-full"
                />
              ) : (
                <FaRegUser className="text-3xl" />
              )}
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2 shadow drop-shadow-md flex flex-col">
                {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                  <Link to={"newproduct"} className="whitespace-nowrap px-2">
                    New product
                  </Link>
                )}

                {userData.image ? (
                  <p
                    className="text-white bg-red-400 px-2"
                    onClick={handleLogout}
                  >
                    Logout ({userData.firstName})
                  </p>
                ) : (
                  <Link to={"login"} className="whitespace-nowrap px-2">
                    Login
                  </Link>
                )}
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
