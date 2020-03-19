// Code SimpleComponent Here
import React from 'react';

class SimpleComponent extends React.Component{
  constructor(){
    super()
    this.state = {
      mood: "happy"
    }
  }

  handleClick = (event) => {
    if (this.state.mood === "happy") {
      this.setState({
        mood: "sad"
      })
    } else if (this.state.mood === "sad") {
      this.setState({
        mood: "happy"
      })
    }
  }

  render(){
    return(
      <div onClick={event => this.handleClick(event)}>
      {this.state.mood}
      </div>
    )
  }
}

export default SimpleComponent;
