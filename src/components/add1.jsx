import React from "react";

const Step1 = props => {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <>
    <div className="h-4"></div>
      <p>How can we reach you?</p>
      <form>
        <label class= "block" for="email">
          <span>Email</span>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your Email"
          value={props.email} // Prop: The email input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
        </label>
      </form>
    </>
  );
};

export default Step1;
