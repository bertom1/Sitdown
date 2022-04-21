import React from "react";
// import { FormGroup, Label, Input, Button } from "reactstrap";

const Step3 = props => {
  if (props.currentStep !== 3) {
    return null;
  }

  // return (
  //   <>
  //     <p>We recommend creating a secure password for your account</p>
  //     <form>
  //       <label for="password">
  //         <span>Password</span>
  //         </label>
  //       <input
  //         type="password"
  //         name="password"
  //         id="password"
  //         placeholder="Enter your Password"
  //         value={props.password} // Prop: The username input data
  //         onChange={props.handleChange} // Prop: Puts data into the state
  //       />
  //     </form>
  //   </>
  // );
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

export default Step3;
