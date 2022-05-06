import React from 'react';
import {  Link } from "react-router-dom";
import logo from "../image/logo.svg";
import {CgProfile } from "react-icons/cg";
const TopNav = () => {
  return (
    <nav className="bg-white mx-1.5 my-1.5 px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <img src={logo} className="h-6 sm:h-9" alt="Sitdown Logo" />
        </Link>

        <Link
          to="/profile"
          className="flex items-center focus:text-slate-400 hover:text-slate-500"
          id="mobile-profile"
        >
          <CgProfile size={25} />
        </Link>
      </div>
    </nav>
  );
};
export default TopNav;