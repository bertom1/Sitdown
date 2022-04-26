import React from "react";
import { Link } from "react-router-dom";
import {AiOutlinePlusCircle} from "react-icons/ai"
import {GrHomeRounded} from "react-icons/gr";
import { BsChatLeftDots } from "react-icons/bs";

const BottomNav = () => {
  return (
    <div class="w-full h-20">
      <nav
        id="bottom-nav"
        class="container block fixed inset-x-0 bottom-0 py-2 z-10 bg-pink"
      >
        <div id="tabs" class="flex justify-between">
          <Link
            to="/"
            class="w-full focus:text-slate-400 hover:text-slate-500 justify-center inline-block text-center pt-2 pb-1"
          >
            <GrHomeRounded size={25} class="inline-block mb-1 object-center" />
            <span class="tab tab-kategori block text-xs">home</span>
          </Link>

          <Link
            to="/add"
            class="w-full focus:text-slate-400 hover:text-slate-500 justify-center inline-block text-center pt-2 pb-1"
          >
            <AiOutlinePlusCircle
              size={25}
              class="inline-block mb-1 object-center"
            />
            <span class="tab tab-kategori block text-xs">add event</span>
          </Link>

          <Link
            to="/chat"
            class="w-full focus:text-slate-400 hover:text-slate-500 justify-center inline-block text-center pt-2 pb-1"
          >
            <BsChatLeftDots size={25} class="inline-block mb-1 object-center" />
            <span class="tab tab-kategori block text-xs">chat</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default BottomNav;
