import { useState , react } from "react";
import { Link } from "react-router-dom";
import {AiOutlinePlusCircle} from "react-icons/ai"
import {GrHomeRounded} from "react-icons/gr";
import { BsChatLeftDots } from "react-icons/bs";


const BottomNav = () => {
  //const [bgcolor, setBgcolor] = useState("#00000");
  const [textcolor, setTextcolor] = useState("#FA4FG97");

 function handleHighlightTab() {
   console.log(textcolor)
   
   //setBgcolor("white");
   setTextcolor("black");
 }

  return (
    <div className="w-full h-20">
      <nav
        id="bottom-nav"
        className="container block fixed inset-x-0 bottom-0 py-2 z-10 bg-pink "
      >
        <div id="tabs" className="flex justify-between">
          <Link
            to="/"
            onClick={handleHighlightTab}
            className="w-full justify-center inline-block text-center pt-2 pb-1"
          >
            <GrHomeRounded
              size={25}
              className="inline-block mb-1 object-center"
            />
            <span
              style={{ color: { textcolor } }}
              className="tab tab-kategori visited:bg-slate-500 block text-xs"
            >
              home
            </span>
          </Link>

          <Link
            to="/add"
            onClick={handleHighlightTab}
            style={{ color: { textcolor } }}
            className="w-full justify-center inline-block text-center pt-2 pb-1"
          >
            <AiOutlinePlusCircle
              size={25}
              className="inline-block mb-1 object-center"
            />
            <span className="tab tab-kategori block text-xs">add event</span>
          </Link>

          <Link
            to="/chat"
            onClick={handleHighlightTab}
            style={{ color: { textcolor } }}
            className="w-full bg-`${textColor}` justify-center inline-block text-center pt-2 pb-1"
          >
            <BsChatLeftDots
              size={25}
              className="inline-block mb-1 object-center"
            />
            <span className="tab tab-kategori block text-xs">chat</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};
export default BottomNav;
