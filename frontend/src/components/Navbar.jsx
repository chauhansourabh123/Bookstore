import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Mode from "./Mode";

const Navbar = ({ btnName }) => {
  const [sticky, setsticky] = useState(false);

  useEffect(() => {
    const handlesticky = () => {
      if (window.scrollY > 0) {
        setsticky(true);
      } else {
        setsticky(false);
      }
    };
    window.addEventListener("scroll", handlesticky);
    return () => {
      window.removeEventListener("scroll", handlesticky);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/course">Courses</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </>
  );

  return (
    <>
      <div
        className={`container z-50 mx-auto md:px-4 max-w-screen-2xl fixed top-0 left-0 right-0 ${
          sticky ? "bg-base-200 shadow-lg duration-75" : ""
        }`}
      >
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navItems}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">BookStore</a>
          </div>
          <div className="navbar-end flex gap-4">
            <ul className="hidden lg:flex menu menu-horizontal px-1">
              {navItems}
            </ul>

            <div className="hidden md:block">
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            <Mode/>
            <a onClick={()=>document.getElementById('my_modal_3').showModal()} className="btn">{btnName}</a>
            <Login/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
