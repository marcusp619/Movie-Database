import React, { Component } from 'react'; 
import PropTypes from 'prop-types';


export default class Movie extends Component {
  static PropTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  }

  render() {
    return (
      <div>
        <h3>{this.props.movie.title}</h3>
      </div>  
    )
  }
}


