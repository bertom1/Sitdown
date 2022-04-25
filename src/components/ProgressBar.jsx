import React from "react";
import "./MultiStepProgressBar.css";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";


const MultiStepProgressBar = (props) => {
  var stepPercentage = 0;

  if (props.currentStep === 1) {
    stepPercentage = 0;
  } else if (props.currentStep === 2) {
    stepPercentage = 34;
  } else if (props.currentStep === 3) {
    stepPercentage = 67;
  } else if (props.currentStep === 4) {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  return (
    <>
      <div className="px-6">
        <ProgressBar
          percent={stepPercentage}
          filledBackground="#000000"
          height="2px"
        >
          <Step>
            {({ accomplished, index }) => (
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                {index + 1}
              </div>
            )}
          </Step>

          <Step>
            {({ accomplished, index }) => (
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                {index + 1}
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                {index + 1}
              </div>
            )}
          </Step>
          <Step>
            {({ accomplished, index }) => (
              <div
                className={`indexedStep ${
                  accomplished ? "accomplished" : null
                }`}
              >
                {index + 1}
              </div>
            )}
          </Step>
        </ProgressBar>
      </div>
      <div className="py-4 px-1 text-xs">
        <ul>
          <li>
            Event <br />
            Details
          </li>
          <li>
            Invite <br />
            List
          </li>
          <li>
            Party <br />
            Plan
          </li>
          <li>
            Finish <br /> Up
          </li>
        </ul>
      </div>
    </>
  );
};

export default MultiStepProgressBar;
