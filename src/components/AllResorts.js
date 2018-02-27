import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class AllResorts extends Component {
  constructor() {
    super();
    this.state = {
      allResorts: [],
    }
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/resorts.json`).then( (res) => {
      return res.json();
    }).then( (resorts) => {
      this.setState({
        allResorts: this.state.allResorts.concat(resorts)
      });
    })
  }

  render() {
    return (
      <div className="container">
      <h1 className="page-title">Select a Resort</h1>
      {this.state.allResorts.map((eachResort) => {
        return(
          <div key={eachResort.id} className="col-xs-12">
            <Link to={ `/resorts/${eachResort.id}`} className="btn btn-outline-info btn-lg each-resort-btn">{eachResort.name}</Link>
          </div>
          )
        })
      }
      </div>
    )
  }
}

export default AllResorts
