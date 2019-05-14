import React, { Component } from 'react'
import SearchResults from './SearchResults'

export default class Search extends Component {
    state={
        searchinput:"",
    }
    handleInput = e => 
    this.setState({ [e.target.name]: e.target.value });

    submitHandler = event => event.preventDefault;

  render() {
    return (
      <div>
        <input type="text"
              value={this.searchinput}
              onChange={this.handleInput}
              className="searchInput"
              placeholder="Search"></input>
        <button 
                className="Searchbutton"
                type="submit">Search Quotes</button>
                
      <div className="searchResults">
        <SearchResults searchinput= {this.state.searchinput}></SearchResults>
      </div>
      </div>
    )
  }
}
