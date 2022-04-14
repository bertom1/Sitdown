import React from 'react';
import {  Link } from "react-router-dom";
import logo from "../image/logo.png";
import {CgProfile } from "react-icons/cg";
const TopNav = () => {
  return (
    // <div>
    //   <li>
    //     <Link to="/">home</Link>
    //   </li>
    //   <li>
    //     <Link to="/add">add</Link>
    //   </li>
    //   <li>
    //     <Link to="/chat">chat</Link>
    //   </li>
    //   <li>
    //     <Link to="/profile">profile</Link>
    //   </li>
    // </div>

    <nav class="bg-transparent border-gray-200 mx-1.5 my-1.5 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" class="flex items-center">
          <img src={logo} class=" h-6 sm:h-9" alt="Sitdown Logo" />
        </Link>

        <Link to="/profile" class="flex items-center" id="mobile-profile">
          <CgProfile size={25} />
        </Link>
      </div>
    </nav>
  );
};
export default TopNav;