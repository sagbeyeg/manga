import React, { Component } from "react";
import CharacterCard from '../Components/CharacterCard'
import NewCharacterForm from '../Components/NewCharacterForm'
import Filter from '../Components/Filter'
import {characters} from '../api'

class CharactersList extends Component {
  state = {
    api: characters,
    characters: [],
    filters: {
      type: 'all'
    }
  }

  renderCharacters = () => {
    return this.state.api.map(char => <CharacterCard key={char.id} char={char} />)
  }

  addCharacter = () => {
    console.log("I should create a new character")
  }

  onChangeType = ({ target: { value } }) => {
    this.setState({ filters: { ...this.state.filters, type: value } });
  };

  onFindNameClick = () => {
    console.log("I should filter")
  };

  render () {
    return (
      <div className='list'>
        <h1>Characters</h1>

        <div className='new-char-form'>
          <NewCharacterForm addCharacter={this.addCharacter()}/>
        </div>

        <div className='filter-form'>
          <Filter api={this.state.api} onChangeType={this.onChangeType} onFindNameClick={this.onFindNameClick} />
        </div>

        <div className='characters'>
          {this.renderCharacters()}
          </div>
      </div>
    )
  }
}

export default CharactersList