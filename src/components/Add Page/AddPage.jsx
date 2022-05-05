import React, { Component } from "react";
import Step1 from "./add1";
import Step2 from "./add2";
import Step3 from "./add3";
import Step4 from "./add4";
import MultiStepProgressBar from "./ProgressBar";
import { Navigate } from "react-router-dom";
import { EventContext } from "../../Context/EventContext";

class MasterForm extends Component {
  static contextType = EventContext;

  constructor(props) {
    super(props);

    this.state = {
      currentStep: 1,
      redirect: false,
      title: "",
      date: "",
      time: 0,
      address: "",
      geolocation:{}, 
      description: "",
      person: "",
      guests: [],
      itemName: "",
      items: [],
      myItems:[],
    };

    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
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

  handleLocationChange(locInput) {
    console.log(locInput)
    const {formatted_address, geometry: { location } } = locInput
    const coordinates = {
      lat: location.lat(),
      lng: location.lng()
    }
    this.setState({
      address: formatted_address,
      geolocation: coordinates
    })
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

  //delete's specified person
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


  handleDeleteItem = (partyStuff) => {
    this.setState((prevState) => ({
      items: prevState.items.filter(
        (thing) => thing !== partyStuff.item
      ),
    }));
    console.log(this.state.guests);
  };

  // submit state to context
  handleSubmit = (event) => {
     event.preventDefault();
    const { addEvent } = this.context;
   
    addEvent({ ...this.state });
    this.setState({
      ...this.state,
      redirect: true,
    })

  };

  // Test current step with ternary
  // _next function will be called on button click
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
    // If the current step is not 4, then render the "next" button
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
      <div className="w-full block">
        <div className="box-border h-5 w-32 block text-sm font-medium text-slate-700"></div>
        <div className="w-full">
          <div className="w-full">
            <MultiStepProgressBar currentStep={this.state.currentStep} />
          </div>
          <div />
          <div className="py-50">
            <Step1
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              handleLocationChange={this.handleLocationChange}
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
              itemName={this.state.itemName}
              handleAddNewItem={this.handleAddNewItem}
              handleDeleteItem={this.handleDeleteItem}
              items={this.state.items}
            />
            <Step4
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              handleDeleteItem={this.handleDeleteItem}
              handleDeletePerson={this.handleDeletePerson}
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
      </div>
    );
  }
}

export default MasterForm;
