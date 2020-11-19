
import React from "react";
import manga from './manga.jpg';
import './App.css';
import CharactersList from './Containers/CharactersList'
import Filter from './Components/Filter'
import {characters} from './api'

class App extends React.Component{
  state = {
    api: characters,
    characters: [],
    filters: {
      type: 'all'
    }
  }

  onChangeType = ({ target: { value } }) => {
    this.setState({ filters: { ...this.state.filters, type: value } });
  };

  onFindNameClick = () => {
    console.log("I should filter")
  };

  render() {
    return (
      <div className="App">
        <img src={manga} alt='manga'/>
        <Filter api={this.state.api} onChangeType={this.onChangeType} onFindNameClick={this.onFindNameClick} />
        <CharactersList api={this.state.api}/>
      </div>
    );
  }
}

export default App;
