import { Link, useLocation, NavLink } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsChatLeftDots } from "react-icons/bs";
import { VscHome } from "react-icons/vsc";

const BottomNav = () => {
  const currentRoute = useLocation().pathname.toLowerCase();

  return (
    <div className="w-full h-20">
      <nav
        id="bottom-nav"
        className="container block fixed inset-x-0 bottom-0 py-2 z-10 bg-pink "
      >
        <div id="tabs" className="flex justify-between">
          <Link
            to="/home"
            className={
              currentRoute.includes("/home")
                ? "tab active w-full justify-center inline-block text-center pt-2 pb-1"
                : "tab w-full justify-center inline-block text-center pt-2 pb-1"
            }
            active
          >
            <VscHome size={28} className="inline-block mb-1 object-center" />
            <span className="tab tab-kategori visited:bg-slate-500 block text-xs">
              home
            </span>
          </Link>

          <Link
            to="/add"
            className={
              currentRoute.includes("add")
                ? "tab active w-full justify-center inline-block text-center pt-2 pb-1"
                : "tab w-full justify-center inline-block text-center pt-2 pb-1"
            }
          >
            <AiOutlinePlusCircle
              size={25}
              className="inline-block mb-1 object-center"
            />
            <span className="tab tab-kategori block text-xs">add event</span>
          </Link>

          <NavLink
            to="/chat"
            activeclassname="active"
            className="tab w-full justify-center inline-block text-center pt-2 pb-1"
          >
            <BsChatLeftDots
              size={25}
              className="inline-block mb-1 object-center"
            />
            <span className="tab tab-kategori block text-xs">chat</span>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
export default BottomNav;
