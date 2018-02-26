import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AllResorts extends Component {
  constructor() {
    super();
    this.state = {
      allResorts: [],
    }

    // this.resortSelection = this.resortSelection.bind(this);
  }
// "https://skime-api.herokuapp.com/resorts.json"
  componentDidMount() {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/resorts.json`).then( (res) => {
      return res.json();
    }).then( (resorts) => {
        console.log(resorts);
      this.setState({
        allResorts: this.state.allResorts.concat(resorts)
      });
      // this.state.allResorts.map(eachResort => {
      //   console.log(eachResort.name)
      // })
    })
  }

  selectedResortClicked() {
    console.log("hello");
  }

  render() {
    return (
      <div className="container">
      <h1>Select a Resort</h1>
      {this.state.allResorts.map((eachResort) => {
        return(
          <div key={eachResort.id} className="col-xs-12">
            <Link to={ `/resorts/${eachResort.id}`} onClick={this.selectedResortClicked} className="btn btn-outline-info btn-lg each-resort-btn">{eachResort.name}</Link>
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