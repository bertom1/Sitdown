import React from "react";
import { Link } from "react-router-dom";


const BottomNav = () => {
  return (
    <nav class="bg-transparent border-gray-200 mx-1.5 my-1.5 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
      
        <div>
      
          <li>
       <Link to="/">home</Link>
         
          </li>
   
          <li>
          <Link to="/add">add</Link>
            {" "}
          </li>
        
          <li>
            <Link to="/chat">chat</Link>
           
          </li>
     
          <li>
             <Link to="/profile">profile</Link>
          
          </li>
        
        </div>
      </div>
    </nav>
  );
};
export default BottomNav;
