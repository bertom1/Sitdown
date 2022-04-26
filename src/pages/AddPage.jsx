import React, { Component } from "react";
import Step1 from "../components/add1";
import Step2 from "../components/add2";
import Step3 from "../components/add3";
import Step4 from "../components/add4";
import MultiStepProgressBar from "../components/ProgressBar";
import { Navigate } from "react-router-dom";
//import {addEvent} from "../Context/EventContext"
//import  from "../Context/EventContext";
//import contextVals from '../Context/EventContext';
import { EventContext , EventProvider } from "../Context/EventContext";
import { AiTwotoneRightSquare } from "react-icons/ai";

class MasterForm extends Component {
  static contextType = EventContext;

  constructor(props) {
    super(props);

    // Set the intial input values
    this.state = {
      currentStep: 1,
      redirect: false,
      title: "",
      date: "",
      time: 0,
      address: "",
      description: "",
      person: "",
      guests: [],
      itemName: "",
      items: [],
      myItems:[],
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
      [name]: value,
    });

    console.log(name, value);
  }

  handleAddNewPerson = () => {
    this.setState((prevState) => ({
      guests: [...prevState.guests, 
        {name : prevState.person, 
         items: ["invite pending"]}],
      person: "",
    }));
    console.log(this.state.guests);
  };

  //delete's names - when there's more than one occurence, this deletes all occurences
  handleDeletePerson = (name) => {
    console.log(name);
    this.setState((prevState) => ({
      guests: prevState.guests.filter((person) => person !== name.people),
    }));
    console.log(this.state.guests);
  };

  handleAddNewItem = () => {
    this.setState((prevState) => ({
      items: [
        ...prevState.items,
         prevState.itemName,
      ],
      itemName: "",
    }));
    console.log(this.state.items);
  };

  //delete's names - when there's more than one occurence, this deletes all occurences
  handleDeleteItem = (partyStuff) => {
    this.setState((prevState) => ({
      items: prevState.items.filter(
        (thing) => thing !== partyStuff.item
      ),
    }));
    console.log(this.state.guests);
  };

  // Trigger an alert on form submission
  handleSubmit = (event) => {
     event.preventDefault();
    const { addEvent } = this.context;
   
    addEvent({ ...this.state });
    this.setState({
      ...this.state,
      redirect: true,
    })
    // const { title, date, time } = this.state;
    // alert(`Your registration detail: \n 
    //    Email: ${title} \n 
    //    Username: ${date} \n
    //    Password: ${time}`);
  };

  // Test current step with ternary
  // _next and _previous functions will be called on button click
  _next() {
    let currentStep = this.state.currentStep;

    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 3 ? 4 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  }

  // The "next" and "previous" button functions
  get previousButton() {
    let currentStep = this.state.currentStep;

    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <button
          className="bg-slate-200 rounded-md px-2 py-1 my-2 mx-2 hover:bg-slate-100"
          onClick={this._prev}
        >
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
      return (
        <button type="submit" className="bg-lightpink rounded-md px-2 py-1 " onClick={this.handleSubmit}>Submit</button>
      );
    }
    // ...else render nothing
    return null;
  }

  render() {
    const {addEvent} = this.context
    const redirect = this.state.redirect;
       if (redirect === true) {
         return <Navigate to="/" />;
       }
    return (
      // <EventProvider value={this.state}>
        <div
          className="w-full block"
          //onSubmit={console.log("help now")}
        >
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
              />
              <Step2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                person={this.state.person}
                guests={this.state.guests}
                handleAddNewPerson={this.handleAddNewPerson}
                handleDeletePerson={this.handleDeletePerson}
              />
              <Step3
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                //itemCategory={this.state.itemCategory}
                itemName={this.state.itemName}
                handleAddNewItem={this.handleAddNewItem}
                handleDeleteItem={this.handleDeleteItem}
                items={this.state.items}
              />
              <Step4
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                state={this.state}
                previous={this._prev}
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
      // </EventProvider>
    );
  }
}

export default MasterForm;
