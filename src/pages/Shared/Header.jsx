import React, { useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const [menuDropDown, setMenuDropDown] = useState(false);
  const [profileDropDown, setProfileDropDown] = useState(false);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuDropDown(false);
    setProfileDropDown(false);
  }, [location]);
  const handleSignOut = () => {
    logOut();
  };

  return (
    <div className=" flex items-center relative py-5  bg-purple-50 container-custom justify-between">
      {/* Drop down button and menu */}
      <label
        className="px-3 cursor-pointer lg:hidden"
        onClick={() => setMenuDropDown(!menuDropDown)}
      >
        <FaBars className="text-xl"></FaBars>
      </label>
      {menuDropDown && (
        <ul
          className={`absolute  rounded-lg  z-10 bg-purple-100 px-5  py-3 lg:hidden left-1 md:left-16 gap-4 ${
            !user ? "top-20" : "top-24"
          }`}
        >
          {!user && (
            <li className="my-2">
              <Link to="/login" className="button-primary">
                Login
              </Link>
              <Link to="/register" className="ml-3 button-primary ">
                Register
              </Link>
            </li>
          )}
          {!user && (
            <hr className="h-[1px] mt-4 mb-3 bg-slate-800 border-0 rounded " />
          )}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-semibold text-primary"
                  : "text-lg font-semibold text-slate-500"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-semibold text-primary"
                  : "text-lg font-semibold text-slate-500"
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
      )}
      {/* *********** */}

      {/* site logo */}
      <Link to="/" className="text-2xl font-mono font-semibold">
        <span className="text-3xl text-primary font-extrabold">S</span>ushi
        <span className="text-3xl text-primary font-extrabold">S</span>
        avvy
      </Link>
      {/* ****** */}

      {/* nav bar */}
      <ul className="px-1 hidden lg:flex gap-4 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-semibold text-primary"
              : "text-lg font-semibold text-slate-500"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-semibold text-primary"
              : "text-lg font-semibold text-slate-500"
          }
        >
          Blog
        </NavLink>
      </ul>
      {/* ******** */}

      {/* Profile picture */}
      <div className="relative">
        {user ? (
          user.photoURL !== null ? (
            <div className="tooltip tooltip-left" data-tip={user?.displayName}>
              <img
                src={user.photoURL}
                className="rounded-full h-12 w-12 cursor-pointer"
                onClick={() => setProfileDropDown(!profileDropDown)}
              />
            </div>
          ) : (
            <div className="tooltip tooltip-left" data-tip={user?.displayName}>
              <FaUserCircle
                className="rounded-full h-12 w-12 cursor-pointer"
                onClick={() => setProfileDropDown(!profileDropDown)}
              ></FaUserCircle>
            </div>
          )
        ) : (
          <div className="hidden lg:flex">
            <Link to="/login" className="button-primary">
              Login
            </Link>

            <Link to="/register" className="button-primary ml-3">
              Register
            </Link>
          </div>
        )}

        {user && profileDropDown && (
          <ul className=" absolute z-10 rounded-lg top-[78px] bg-slate-200 px-6 py-4  right-0">
            <li>
              <a
                className="button-primary cursor-pointer"
                onClick={handleSignOut}
              >
                Logout
              </a>
            </li>
          </ul>
        )}
      </div>
      {/* ********** */}
    </div>
  );
};

export default Header;
