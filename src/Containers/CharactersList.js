import React, { Component } from "react";
import CharacterCard from '../Components/CharacterCard'
import NewCharacterForm from '../Components/NewCharacterForm'

class CharactersList extends Component {
  
  renderCharacters = () => {
    return this.props.api.map(char => <CharacterCard key={char.id} char={char} />)
  }

  render () {
    return (
      <div className='list'>
        <h1>Characters</h1>
        <div className='form'><NewCharacterForm /></div>
        <div className='characters'>{this.renderCharacters()}</div>
      </div>
    )
  }
}

export default CharactersList