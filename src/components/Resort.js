import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Resort extends Component {
  constructor() {
    super()
    this.state = {
      currentResortName: "",
      allTrails: [],
    }
  }

// https://skime-api.herokuapp.com/resorts/${resortID}.json
  componentDidMount() {
    // console.log(this.props.match.params.resort_id)
    let resortID = this.props.match.params.resort_id;
    fetch(`http://localhost:8080/resorts/${resortID}.json`).then( (res) => {
      return res.json();
    }).then( (oneResort) => {
      this.setState({
        currentResortName: oneResort.name,
        allTrails: this.state.allTrails.concat(oneResort.trails)
      })
      console.log(this.state.allTrails)
      this.setState({
        allTrails: this.state.allTrails.sort((a, b) => {
          let nameA = a.name.toUpperCase();
          let nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        })
      });
    })
  }

  render() {
    return (
      <div className="container">
      <h1>{this.state.currentResortName}</h1>
      {this.state.allTrails.map((eachTrail) => {
        return(
          <div key={eachTrail.id} className="col-xs-12">
            <Link to={ `/trails/${eachTrail.id}`} className="btn btn-outline-info each-trail-btn">{eachTrail.name}</Link>
          </div>
          )
        })
      }
      <div>
      <Link to="/" className="btn btn-outline-primary">Back</Link>
      </div>
      </div>
    )
  }
}

export default Resort
