import React from 'react';

class Filter extends React.Component {
  createNameFilter = () => {
    return this.props.api.map(char => <option value={char.name}>{char.name}</option>)
  }


  render() {
    return (
      <div className="ui form">
        <h3>Looking For A Specific Character?</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.props.onChangeType}>
            <option value="all">All</option>
            {this.createNameFilter()}
          </select>
        </div>

        <div className="field">
          <button
            onClick={this.props.onFindNameClick}
            className="ui secondary button">
            Find Character
          </button>
        </div>
      </div>
    );
  }
}

export default Filter;