import React, { Component } from "react";

class NewCharacterForm extends Component {
  state = {
    name: "",
    image: "",
    show: ""                         
  };

  renderNewCharacter = (props) => {
    return this.props.addCharacter()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state))
  }

  localSubmitHandler = (e) => {
    e.preventDefault();

    this.props.submitHandler(this.state);

    this.setState = ({ 
      name: "", 
      image: "",
      show: ""
    }, () => console.log(this.state))
  }

  render() {

    return (
      <form onSubmit={this.localSubmitHandler}>
        <input type="text" name="name" placeholder="name" onChange={this.handleChange} value={this.state.name} />
    
        <input type="text" name="image" placeholder="image" onChange={this.handleChange} value={this.state.image} />
      
        <input type="text" name="show" placeholder="show" onChange={this.handleChange} value={this.state.show} />
        
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default NewCharacterForm