import React from "react";

const Step2 = props => {
  if (props.currentStep !== 2) {
    return null;
  }

  return (
    <>
      <div className="h-4"></div>
      <p>What should we call you?</p>
      <form>
        <label for="username">
          <span>Username</span>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your Username"
            value={props.username} // Prop: The username input data
            onChange={props.handleChange} // Prop: Puts data into the state
          />
        </label>
      </form>
    </>
  );
};

export default Step2;
