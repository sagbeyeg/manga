import React, { Component } from "react";
class NewCharacterForm extends Component {
  state = {
    name: "",
    img: "",
    show: ""   
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state))
  }

  localSubmitHandler = (e) => {
    e.preventDefault();

    this.props.submitHandler(this.state);

    this.setState({
      name: "",
      img: "",
      show: ""   
    })
    
    // console.log(this.state)
  }

  render() {

    return (
      <form onSubmit={event => this.localSubmitHandler(event)}>
        <input type="text" name="name" placeholder="name" onChange={this.handleChange} value={this.state.name} />
    
        <input type="text" name="img" placeholder="img" onChange={this.handleChange} value={this.state.img} />
      
        <input type="text" name="show" placeholder="show" onChange={this.handleChange} value={this.state.show} />
        
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default NewCharacterForm