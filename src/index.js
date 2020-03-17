import React from "react";
import ReactDOM from "react-dom";

import SimpleComponent from "./components/SimpleComponent";
import SimplerComponent from "./components/SimplerComponent";



ReactDOM.render(
  <div> 
    { this.handleClick=()=>{
  console.log("you gay af!")
}}

    <SimpleComponent />
    <SimplerComponent handleClick={this.handleClick} />
  </div>,
  document.getElementById("root")
  
  )
