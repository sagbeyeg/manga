import React, { Component } from "react";

class CharacterCard extends Component {
  render() {
    const { char } = this.props
    return (
      <div className='card'>
        <h2>{char.name} (<em>{char.show}</em>)</h2>
        <div className='img div'>
          <img className='img' src={char.img} alt={char.name}/>
        </div>
      </div>
    )
  }
}

export default CharacterCard