import React, { Component } from 'react'

export default class Search extends Component {
    state={
        searchinput:"",
    }
    handleInput = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <input type="text"
              value={this.searchinput}
              onChange={this.handleInput}
              classname="searchInput"
              placeholder="Search"></input>
        <button classname="Searchbutton" onclick= {this.handleInput} >Search Quotes</button>
      </div>
    )
  }
}
