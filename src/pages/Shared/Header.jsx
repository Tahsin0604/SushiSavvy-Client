import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [menuDropDown, setMenuDropDown] = useState(false);
  const [profileDropDown, setProfileDropDown] = useState(false);
  return (
    <div className=" flex items-center relative py-5 bg-purple-50 container-custom justify-between">
      {/* Drop down button and menu */}
      <label
        className="px-3 cursor-pointer lg:hidden"
        onClick={() => setMenuDropDown(!menuDropDown)}
      >
        <FaBars className="text-xl"></FaBars>
      </label>
      {menuDropDown && (
        <ul className="absolute rounded-lg top-24 bg-slate-200 pl-5 pr-16 py-3 lg:hidden left-1 gap-4">
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
              className={`text-lg font-semibold ${({ isActive }) =>
                isActive ? "text-primary" : "text-slate-500"}`}
            >
              {" "}
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
          className={`text-lg font-semibold ${({ isActive }) =>
            isActive ? "text-primary" : "text-slate-500"}`}
        >
          {" "}
          Blog
        </NavLink>
      </ul>
      {/* ******** */}

      {/* Profile picture */}
      <div className="relative">
        <img
          src="./../../../src/assets/IMG20191101105435.jpg"
          className="rounded-full h-12 w-12 cursor-pointer"
          onClick={() => setProfileDropDown(!profileDropDown)}
        />

        {profileDropDown && (
          <ul className=" absolute rounded-lg top-[72px] bg-slate-200 px-6 py-3  right-0">
            <li>
              <a>Logout</a>
            </li>
          </ul>
        )}
      </div>
      {/* ********** */}
    </div>
  );
};

export default Header;
