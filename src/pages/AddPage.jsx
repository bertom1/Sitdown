import React, { Component } from "react";
import Step1 from "../components/add1";
import Step2 from "../components/add2";
import Step3 from "../components/add3";
import Step4 from "../components/add4";
import MultiStepProgressBar from "../components/ProgressBar";

class MasterForm extends Component {
  constructor(props) {
    super(props);

    // Set the intial input values
    this.state = {
      currentStep: 1,
      title: "",
      date: "",
      time: 0,
      location:"",
      memo:"",
      person:"",
      inviteList:[],
      thingsToBring:[]
    };

    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);

    // Bind new functions for next and previous
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(name, value);
  }


  handleAddNewPerson = () => {
   this.setState(prevState => ({
    inviteList: [...prevState.inviteList, prevState.person],
    person :"",
    }));
    console.log(this.state.inviteList);
    
  };

  //delete's names - when there's more than one occurence, this deletes all occurences
  handleDeletePerson =(name)=>{
    console.log(name.anotherone);
     this.setState((prevState) => ({
       inviteList: prevState.inviteList.filter((person) => person !== name.anotherone),
      
     }));
     console.log(this.state.inviteList); 
  };

  // Trigger an alert on form submission
  handleSubmit = event => {
    event.preventDefault();
    const { title, date, time } = this.state;
    alert(`Your registration detail: \n 
       Email: ${title} \n 
       Username: ${date} \n
      Password: ${time}`);
    console.log("hey there!");
    alert("hello");
  };

  // Test current step with ternary
  // _next and _previous functions will be called on button click
  _next() {
    let currentStep = this.state.currentStep;

    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 3 ? 4 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  }

  // The "next" and "previous" button functions
  get previousButton() {
    let currentStep = this.state.currentStep;

    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <button className="bg-slate-200 rounded-md px-2 py-1 my-2 mx-2 hover:bg-slate-100" onClick={this._prev}>
          Previous
        </button>
      );
    }

    // ...else return nothing
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 4) {
      return (
        <button
          color="primary float-right"
          className="bg-pink rounded-md px-2 py-1 my-2 hover:bg-lightpink active:bg-pink focus:outline-none focus:ring focus:ring-pink"
          onClick={this._next}
        >
          Next
        </button>
      );
    }
    // ...else render nothing
    return null;
  }

  get submitButton() {
    let currentStep = this.state.currentStep;

    // If the current step is the last step, then render the "submit" button
    if (currentStep > 3) {
      return <button className="bg-lightpink rounded-md px-2 py-1 ">Submit</button>;
    }
    // ...else render nothing
    return null;
  }

  render() {
    return (
      <>
        <div className="w-full block" onSubmit={this.handleSubmit}>
          {/* <div className="box-border h-32 px-6"> */}
            <div className="box-border h-5 w-32 block text-sm font-medium text-slate-700">
              {/* Add New Event */}
            </div>
            <div className="w-full">
              <div className="w-full">
                <MultiStepProgressBar currentStep={this.state.currentStep} />
              </div>
              <div />
              <div classname="py-50">
                <Step1
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  email={this.state.email}
                />
                <Step2
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  person={this.state.person}
                  inviteList={this.state.inviteList}
                  handleAddNewPerson={this.handleAddNewPerson}
                  handleDeletePerson={this.handleDeletePerson}
                />
                <Step3
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  email={this.state.password}
                />
                <Step4
                  currentStep={this.state.currentStep}
                  handleChange={this.handleChange}
                  email={this.state.password}
                />
              </div>
            </div>
            <div>
              {this.previousButton}
              {this.nextButton}
              {this.submitButton}
            </div>
          {/* </div> */}
        </div>
      </>
    );
  }
}

export default MasterForm;
