import React from "react";

const Step3 = (props) => {
  if (props.currentStep !== 3) {
    return null;
  }

  return (
    <>
      <div>
        <form className="relative">
          <label className=" relative text-gray-400 block px-2">
            <span className="block text-xs font-medium text-slate-700 text-left px-2">
              Item
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none w-4 h-4 absolute top-2/3 transform -translate-y-2/3 left-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            <input
              type="text"
              name="itemName"
              id="itemName"
              placeholder="add things to bring"
              className="form-input border border-slate-300 rounded-md py-2 px-3 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block pl-10 focus:outline-none"
              value={props.itemName} 
              onChange={props.handleChange} 
            />
          </label>

          {/* 
          
          category dropdown option

          <label class=" relative text-gray-400 block py-2 justify-items-center px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 pointer-events-none absolute top-1/2 transform -translate-y-2/3 left-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>

            <select
              name="itemCategory"
              id="itemCategory"
              class="form-input border border-slate-300 rounded-md py-2 px-3 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block pl-10 focus:outline-none"
              value={props.itemCategory} 
              onChange={props.handleChange} 
            >
              <option value="NaN">select category...</option>
              <option value="food">food</option>
              <option value="drink">drink</option>
              <option value="utensils">utensils</option>
              <option value="party-goods">party goods</option>
            </select>
          </label> */}
          
        </form>
        <button
          className="bg-lightpink px-2 py-1 rounded-md m-2 "
          onClick={props.handleAddNewItem}
          type='button'
        >
          add
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="pointer-events-none w-4 h-4 flex"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
        <ul className="grid grid grid-cols-4 grid-rows-8 gap-2 space-between px-2">
          {props.items.map((item, index) => (
            <li
              key={index}
              className="overflow-hidden px-2 py-1 bg-slate-300 text-xs rounded-md mb-1 bg-white active:bg-gray-400 hover:cursor-pointer flex justify-between"
            >
              {item}
              <button
                onClick={() => {
                  props.handleDeleteItem({ item });
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 top-1/2"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Step3;
