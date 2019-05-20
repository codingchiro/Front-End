import React, { Component } from 'react'
import axios from 'axios'
import SearchResults from './SearchResults';


export default class Search extends Component {
    state={
        quotes: [],
        searchValue: "",
    }
    
    handleInput = e => 
    this.setState({ [e.target.name]: e.target.value });

    submitSearch = e => {
      e.preventDefault();
      window.location.reload()
    };
    
    
    componentDidMount(){
      const searchValue= this.state.searchValue

      axios
      .post("https://simpson-says-backend.herokuapp.com/users/search",
      searchValue
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
              name="searchValue"
              value={this.searchValue}
              onChange={this.handleInput}
              className="searchInput"
              placeholder="Search"></input>
        <button onClick={this.submitSearch}
                className="Searchbutton"
                type="submit">Search Quotes</button>
        <div> { this.state.quotes.map( quote => 
          <SearchResults 
            quote={quote} 
            key={quote.quote_id}/> ) } 
        </div>
                
      </div>
    )
  }
}
