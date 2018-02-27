import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Green from './green.png';
import Blue from './blue.png';
import Black from './black.png';
import DoubleBlack from './double-black.png';


class Resort extends Component {
  constructor() {
    super()
    this.state = {
      currentResortName: "",
      allTrails: [],
      currentResortObject: {},
    }
  }

  componentDidMount() {
    let resortID = this.props.match.params.resort_id;
    fetch(`${process.env.REACT_APP_BACKEND_URL}/resorts/${resortID}.json`).then( (res) => {
      return res.json();
    }).then( (oneResort) => {
      this.setState({
        currentResortName: oneResort.name,
        allTrails: this.state.allTrails.concat(oneResort.trails),
        currentResortObject: oneResort
      })
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
    const trailDifficultyIcons = {
        "green": Green,
        "blue": Blue,
        "black": Black,
        "double-black": DoubleBlack,
      }

    return (
      <div className="container">
      <h1 className="page-title">{this.state.currentResortName}</h1>
      {this.state.allTrails.map((eachTrail) => {
        return(
          <div key={eachTrail.id} className="col-xs-12">
            <Link 
              to={ `/trails/${eachTrail.id}`} 
              className="btn btn-outline-info each-trail-btn">
                {eachTrail.name} <img className="difficulty" alt={eachTrail.difficulty} src={trailDifficultyIcons[eachTrail.difficulty]} />
            </Link>
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
