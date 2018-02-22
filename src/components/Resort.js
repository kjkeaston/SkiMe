import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Resort extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    console.log(this.props.match.params.resort_id)
    let resortID = this.props.match.params.resort_id;
    fetch(`https://skime-api.herokuapp.com/resorts/${resortID}.json`).then( (res) => {
      return res.json();
    }).then( (json) => {
        console.log(json);
      
    })
  }

  render() {
    return (
      <h1>Hello</h1>
    )
  }
}

export default Resort
