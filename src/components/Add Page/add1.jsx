import React from "react";
import "./MultiStepProgressBar.css";
import { SB } from "../searchbox";

const Step1 = (props) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;

  if (props.currentStep !== 1) {
    return null;
  }
  const handleChange = (loc) => {
    props.handleLocationChange(loc)
  }

  return (
    <>
      <div className="grid justify-items-center">
        <form className="relative">
          <label className="block py-2">
            <span className="block text-xs font-medium text-slate-700 text-left px-2">
              Event Title
            </span>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="type event title"
              className="w-full mt-.5 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              required
              value={props.title} 
              onChange={props.handleChange}
            />
          </label>

          <label className=" relative text-gray-400 block">
            <span className="block text-xs font-medium text-slate-700 text-left px-2">
              Event Date
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
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>

            <input
              type="date"
              min={today}
              name="date"
              id="date"
              className="form-input border border-slate-300 rounded-md py-2 px-3 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block pl-10 focus:outline-none"
              value={props.date} 
              onChange={props.handleChange} 
            />
          </label>

          <label className="py-2 relative text-gray-400 focus-within:text-gray-600 block">
            <span className="block text-xs font-medium text-slate-700 text-left px-2">
              Event Time
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <input
              type="time"
              name="time"
              id="time"
              className="form-input border border-slate-300 rounded-md py-2 px-3 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block pl-10 focus:outline-none"
              value={props.time} 
              onChange={props.handleChange} 
            />
          </label>

          <div className="py-2 relative text-gray-400 focus-within:text-gray-600 block">
            <span className="block text-xs font-medium text-slate-700 text-left px-2">
              Event Location
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none w-6 h-6 absolute top-2/3 transform -translate-y-2/3 left-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <SB handleChange={props.handleLocationChange} />
          </div>

          <label className="block py-2">
            <span className="block text-xs font-medium text-slate-700 text-left text-top px-2">
              description
            </span>
            <textarea
              type="text"
              name="description"
              id="description"
              placeholder="optional description"
              rows="3"
              className="w-full h-24 mt-.5 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              required
              value={props.description} 
              onChange={props.handleChange} 
            />
          </label>
        </form>
      </div>
    </>
  );
};

export default Step1;
