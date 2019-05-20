import React, { Component } from 'react'


export default class SearchResults extends Component {
  
  render() {
    return (
      <div>
       <h1>
         "{this.props.quote.spoken_words}"
       </h1>
       <h3>
         Episode: {this.props.quote.episode_title}
       </h3>
       <p>
         Character: {this.props.quote.raw_character_text} <br></br>
         Season: {this.props.quote.season} ep. {this.props.quote.number_in_season}
         
       </p>
      
      </div>
    )
  }

}


  