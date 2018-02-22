import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AllResorts extends Component {
  constructor() {
    super();
    this.state = {
      allResorts: [],
      resortClicked: ""
    }
    this.resortSelection = this.resortSelection.bind(this);
  }

  componentDidMount() {
    fetch("https://skime-api.herokuapp.com/resorts.json").then( (res) => {
      return res.json();
    }).then( (json) => {
        console.log(json);
      this.setState({
        allResorts: this.state.allResorts.concat(json)
      });
      this.state.allResorts.map(eachResort => {
        console.log(eachResort.name)
      })
    })
  }

  resortSelection() {
    
  }



  render() {
    return (
      <div className="container">
      <h1>Select a Resort</h1>
      {this.state.allResorts.map((eachResort) => {
        return(
          <div key={eachResort.id} className="col-xs-12">
            <Link to={ `/resorts/${eachResort.id}`} className="btn btn-outline-info">{eachResort.name}</Link>
          </div>
          )
      })
    }
    </div>
    )
  }
}

export default AllResorts
// <h3 onClick={this.resortSelection} className="btn btn-outline-info">{eachResort.name}</h3>