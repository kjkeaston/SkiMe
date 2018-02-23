import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';
// import { render } from 'react-dom'

 



class AddPostResort extends Component {
  constructor() {
    super();
    this.state = {
      allResorts: [],
      trailsFromUserSelection: [],
    }
    this.userSelectedResort = this.userSelectedResort.bind(this);
  }

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

  userSelectedResort(e) {
    console.log(e.target.value);
    let resortID = e.target.value;
    fetch(`${process.env.REACT_APP_BACKEND_URL}/resorts/${resortID}.json`).then( (res) => {
      return res.json();
    }).then( (oneResort) => {
      console.log(oneResort.trails);
      this.setState({
        trailsFromUserSelection: oneResort.trails
      })
      this.setState({
        trailsFromUserSelection: this.state.trailsFromUserSelection.sort((a, b) => {
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
    const ratingChanged = (newRating) => {
      console.log(newRating)
    }
    return (
      <div>
        <h1>Add a trail review</h1>

        <form className="text-left">
          <div className="form-group">
            <label htmlFor="select-resort">Select a resort</label>
            <select className="form-control form-control-lg" id="select-resort" onChange={this.userSelectedResort}>
              <option selected disabled>Choose...</option>
              {this.state.allResorts.map((eachResort) => {
                return (<option value={eachResort.id} key={eachResort.id}>{eachResort.name}</option>)
                })
              }
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="select-trail">Select a trail</label>
            <select className="form-control form-control-lg" id="select-trail">
              <option selected disabled>Choose...</option>
              {this.state.trailsFromUserSelection.map((eachTrail) => {
                return (<option key={eachTrail.id}>{eachTrail.name}</option>)
                })
              }
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="snow-condition">How was the snow?</label>
            <select className="form-control form-control-lg" id="snow-condition">
              <option selected disabled>Conditions...</option>
              <option>Fresh pow, bring your snorkel</option>
              <option>Packed powder but gets the job done</option>
              <option>Poor coverage, chopped up</option>
              <option>Icy, crusty</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="crowd-level">Crowd level?</label>
            <select className="form-control form-control-lg" id="crowd-level">
              <option selected disabled>Crowd...</option>
              <option>Had the run to myself</option>
              <option>Average, about what you'd expect</option>
              <option>Packed, people everywhere</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="star-rating">Overall rating?</label>
            <ReactStars count={5} onChange={ratingChanged} size={50} color2={'#ffd700'} half={false} />
          </div>

          <div className="form-group">
            <label htmlFor="notes">Anything else?</label>
            <textarea className="form-control" id="notes" rows="3"></textarea>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">Send it!</button>
          </div>
        </form>
         
      </div>



    )
  }
}

export default AddPostResort;
