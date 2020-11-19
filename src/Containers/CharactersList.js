import React, { Component } from "react";
import CharacterCard from '../Components/CharacterCard'
import NewCharacterForm from '../Components/NewCharacterForm'
import Filter from '../Components/Filter'
import {characters} from '../api'

class CharactersList extends Component {
  state = {
    api: characters,
    filter: 'All'
  }

  renderCharacters = () => {  
    if (this.state.filter === 'All') {
      return this.state.api.map(char => <CharacterCard key={char.id} char={char} />)
    } else {
      let filteredArray = this.state.api.filter(char => char.name.includes(this.state.filter))
      return filteredArray.map(char => <CharacterCard key={char.id} char={char} />)
    }
  }

  submitHandler = (charObj) => {
    console.log("I should create a new character")
    this.setState({ api: [...this.state.api, charObj] })
  }

  onChangeType = ({ target: { value } }) => {
    this.setState({ filter: value}, ()=>console.log(this.state.filter));
  };

  render () {
    return (
      <div className='list'>
        <h1>Characters</h1>

        <div className='new-char-form'>
          <NewCharacterForm submitHandler={this.submitHandler}/>
        </div>

        <div className='filter-form'>
          <Filter api={this.state.api} onChangeType={this.onChangeType} />
        </div>

        <div className='characters'>
          {this.renderCharacters()}
          </div>
      </div>
    )
  }
}

export default CharactersList