import React, { Component } from "react";
// import SimplerComponent from "./SimplerComponent";

export default class SimpleComponent extends Component {
  state = {
    mood: "happy"
  };
  toggleMood = () => {
      this.state.mood==="happy"?
    this.setState({
      mood: "sad"
    }) :
    this.setState({
        mood: "happy"
    })
  };
  render() {
    return (
      <div onClick={this.toggleMood}>
      
        {this.state.mood}
        {/* <SimplerComponent /> */}
      </div>
    );
  }
}
