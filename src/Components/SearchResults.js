import React, { Component } from 'react'


export default class SearchResults extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.quotes};
        </ul>
    </div>
    )
  }

}


  