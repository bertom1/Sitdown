import React from "react";
// import { FormGroup, Label, Input, Button } from "reactstrap";

const Step3 = props => {
  if (props.currentStep !== 3) {
    return null;
  }

    return (
      <>
        <div>
          <form className="relative">
            <label class=" relative text-gray-400 block">
              <span class="block text-xs font-medium text-slate-700 text-left px-2">
                Item
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none w-6 h-6 absolute top-2/3 transform -translate-y-2/3 left-3"
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
                name="person"
                id="person"
                placeholder="add people to invite"
                class="form-input border border-slate-300 rounded-md py-2 px-3 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block pl-10 focus:outline-none"
                value={props.person} // Prop: The email input data
                onChange={props.handleChange} // Prop: Puts data into the state
              />
            </label>

            <label class=" relative text-gray-400 block">
              <span class="block text-xs font-medium text-slate-700 text-left px-2">
                Category
              </span>

              <input
                type="select"
                name="person"
                id="person"
                placeholder="add people to invite"
                class="form-input border border-slate-300 rounded-md py-2 px-3 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block pl-10 focus:outline-none"
                value={props.person} // Prop: The email input data
                onChange={props.handleChange} // Prop: Puts data into the state
              />
            </label>
          </form>
        </div>
      </>
    );
};

export default Step3;
