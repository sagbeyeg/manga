import React, { Component } from "react";

class NewCharacterForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      image: '',
      show: ''                         
    };
    
  }

  renderNewCharacter = () => {
    // this.state(char => <CharacterCard char={char} />)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.image]: e.target.value,
      [e.target.show]: e.target.value
    }, () => console.log(this.state.image))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addChar()
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name"  onChange={event => this.handleChange(event)} value={this.state.name} />
        </label>
        <label>
          Image:
          <input type="text" name="image"  onChange={event => this.handleChange(event)} value={this.state.image} />
        </label>
        <label>
          Show:
          <input type="text" name="show"  onChange={event => this.handleChange(event)} value={this.state.show} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default NewCharacterForm