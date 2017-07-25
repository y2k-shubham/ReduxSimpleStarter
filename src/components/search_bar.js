import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  render() {
    return (
      <div className="search-bar ">
        Search
        <input
          value={this.state.term} // Read [1] below
          onChange={(event) => {this.handleChange(event.target.value)}}
          onKeyUp={(event) => {this.handleKeyUp(event)}} />
      </div>
    );
  }

  handleChange(newTerm) {
    this.setState({
      term: newTerm
    });
  }

  handleKeyUp(event) {
    //if (event.key === 'Enter') {
      this.props.onSearchTermChange(event.target.value);
    //}
  }

};


export default SearchBar;

/*
[1]
- even if we don't put value={this.state.term}, the text written in <input> element will change when user types
- however, since we are setting state equal to component's value inside via onChange callback, this behaviour makes it a
  controlled form instead of a controlled component, where the action changes the state
- so for the sake of preserving traits of controlled component (where state determine's component's view), we put this line
*/
