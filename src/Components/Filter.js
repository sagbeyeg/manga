import React from 'react';

class Filter extends React.Component {
  createNameFilter = () => {
    return this.props.api.map(char => <option value={char.name}>{char.name}</option>)
  }

  render() {
    return (
      <div className="filter">
        <h3>Looking For A Specific Character?</h3>
     
        <select name="type" id="type" onChange={this.props.onChangeType}>
          <option value="all">All</option>
          {this.createNameFilter()}
        </select>
        
        <button
          onClick={this.props.onFindNameClick}
          className="filter-button">
          Find Character
        </button>
      </div>
    );
  }
}

export default Filter;