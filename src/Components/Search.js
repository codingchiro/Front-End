import React, { Component } from 'react'
import axios from 'axios'
import SearchResults from './SearchResults';


export default class Search extends Component {
    state={
        quotes: [],
        search: "",
    }
    
    handleInput = e => 
    this.setState({ [e.target.name]: e.target.value });

    submitSearch = e => {
      e.preventDefault();
      return (
      <SearchResults
        searchInput={this.search} />
        )
    };

    componentDidMount(){
      axios
      .post("https://simpson-says-backend.herokuapp.com/users/search"
      )
      .then(response => {
        this.setState(() => ({ quotes: response.data }));
      })
      .catch(error => {
        console.error('DOH!', error);
      })
    }

  render() {
    return (
      <div>
        <input type="text"
              name="search"
              value={this.search}
              onChange={this.handleInput}
              className="searchInput"
              placeholder="Search"></input>
        <button onClick={this.submitSearch}
                className="Searchbutton"
                type="submit">Search Quotes</button>
                
      </div>
    )
  }
}
