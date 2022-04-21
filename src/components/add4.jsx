import React from "react";
// import { FormGroup, Label, Input, Button } from "reactstrap";

const Step4 = props => {
  if (props.currentStep !== 4) {
    return null;
  }

  return (
    <>
      <div className="h-4"></div>
      <p>We recommend creating a secure password for your account</p>
      <form>
        <label for="password">
          <span>Password</span>
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your Password"
          value={props.password} // Prop: The username input data
          onChange={props.handleChange} // Prop: Puts data into the state
        />
      </form>
    </>
  );
};

export default Step4;

//insert the final step here where we can view all of the info so far and edit / submit