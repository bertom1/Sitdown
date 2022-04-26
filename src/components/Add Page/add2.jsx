import React from "react";

const Step2 = (props) => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <>
      <div>
        <form className="relative">
          <label className=" relative text-gray-400 block px-2">
            <span className="block text-xs font-medium text-slate-700 text-left px-2">
              People
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
              name="person"
              id="person"
              placeholder="add people to invite"
              className="form-input border border-slate-300 rounded-md py-2 px-3 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block pl-10 focus:outline-none"
              value={props.person}
              onChange={props.handleChange} 
            />
          </label>
        </form>
        <button
          className="bg-lightpink px-2 py-1 rounded-md m-2 "
          onClick={props.handleAddNewPerson}
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

        <ol className="grid justify-items-center space-between">
          {props.guests.map((people, index) => (
            <li
              key={index}
              className="w-2/3 px-4 py-2 border-2 border-slate-500 text-left rounded-md px-2 mb-2 bg-white active:bg-gray-400 hover:cursor-pointer flex justify-between"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              {people.name}
              <button
                onClick={() => {
                  props.handleDeletePerson({ people });
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
        </ol>
        <div className="grid justify-items-center">
          <p className="w-3/4 px-4 py-2 border-2 border-slate-200 text-left text-sm bg-slate-200 rounded-md mb-2 active:bg-gray-400 hover:cursor-pointer flex justify-between">
            <u color="blue"> personal-event-link-to-share</u>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 left-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </p>
        </div>
      </div>
    </>
  );
};

export default Step2;
