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

  const cartItemNumber = useSelector((state) => state.product.cartItem);

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
          <nav className="gap-4 md:gap-7 text-base md:text-lg hidden md:flex">
            <Link to={""}>Home</Link>
            <Link to={"menu/659a26161337c91e6dfae3e8"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>

          <div className="text-2xl text-slate-600 relative">
            <Link to="cart">
              <FaShoppingCart />

              <div className="absolute -top-1 -right-1 text-white bg-red-600 w-4 h-4 rounded-full text-sm text-center">
                {cartItemNumber.length}
              </div>
            </Link>
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
              <div className="absolute right-0 bg-slate-200 py-2 shadow drop-shadow-md flex flex-col min-w-full opacity-80 h-screen text-center mt-4">
                {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                  <Link to={"newproduct"} className="whitespace-nowrap px-2">
                    New product
                  </Link>
                )}

                {userData.image ? (
                  <p
                    className="text-white bg-red-400 px-2 py-5 hover:bg-slate-200"
                    onClick={handleLogout}
                  >
                    Logout ({userData.firstName})
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="whitespace-nowrap text-xl font-bold md:text-lg px-2 hover:bg-slate-200 py-4"
                  >
                    Login
                  </Link>
                )}

                <nav className="text-xl font-bold md:text-lg flex flex-col md:hidden ">
                  <Link to={""} className="px-2 py-5 hover:bg-slate-200">
                    Home
                  </Link>
                  <Link to={"menu"} className="px-2 py-5 hover:bg-slate-200">
                    Menu
                  </Link>
                  <Link to={"about"} className="px-2 py-5 hover:bg-slate-200">
                    About
                  </Link>
                  <Link to={"contact"} className="px-2 py-5 hover:bg-slate-200">
                    Contact
                  </Link>
                </nav>
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
