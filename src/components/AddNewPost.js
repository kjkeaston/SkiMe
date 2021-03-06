import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';


class AddNewPost extends Component {
  constructor() {
    super();
    this.state = {
      allResorts: [],
      trailsFromUserSelectionOfResort: [],
    }

    this.userSelectedResort = this.userSelectedResort.bind(this);
    this.userSelectedTrail = this.userSelectedTrail.bind(this);
    this.userSelectedSnowCondition = this.userSelectedSnowCondition.bind(this);
    this.userSelectedCrowdLevel = this.userSelectedCrowdLevel.bind(this);
    this.userSelectedStarRating = this.userSelectedStarRating.bind(this);
    this.userSelectedNotes = this.userSelectedNotes.bind(this);
    this.submitPost = this.submitPost.bind(this);
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

  userSelectedResort(e) {
    let resortID = e.target.value;
    fetch(`${process.env.REACT_APP_BACKEND_URL}/resorts/${resortID}.json`).then( (res) => {
      return res.json();
    }).then( (oneResort) => {
      this.setState({
        newPostResort: oneResort,
        trailsFromUserSelectionOfResort: oneResort.trails
      })
      this.setState({
        trailsFromUserSelectionOfResort: this.state.trailsFromUserSelectionOfResort.sort((a, b) => {
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

  userSelectedTrail(e) {
    this.setState({ newPostTrailID: e.target.value })
  }

  userSelectedSnowCondition(e) {
    this.setState({ newPostSnowCondition: e.target.value })
  }

  userSelectedCrowdLevel(e) {
    this.setState({ newPostCrowdLevel: e.target.value })
  }

  userSelectedStarRating(e) {
    this.setState({ newPostStarRating: e })
  }

  userSelectedNotes(e) {
    this.setState({ newPostNotes: e.target.value })
  }

  submitPost(e) {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_BACKEND_URL}/posts.json`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        trail_id: this.state.newPostTrailID,
        snow_condition: this.state.newPostSnowCondition,
        crowd_level: this.state.newPostCrowdLevel,
        star_rating: this.state.newPostStarRating,
        notes: this.state.newPostNotes,
      })
    }).then( (res) => {
      if (res.status === 201) {
        res.json().then( (newlyCreatedPost) => {
          this.props.history.push(`/trails/${newlyCreatedPost.trail_id}`);
        });
      } else {
        alert("Oops! Did you select all the required fields?");
      }
    });
  }

  render() {
    return (
      <div>
        <h1 className="page-title">Add a trail review</h1>
        <form className="text-left" onSubmit={this.submitPost}>
          <div className="form-group">
            <label htmlFor="select-resort">Select a resort <small className="required-asterisk">*</small></label>
            <select
              className="form-control form-control-lg"
              id="select-resort"
              onChange={this.userSelectedResort}>
                <option selected disabled>Choose...</option>
                {this.state.allResorts.map((eachResort) => {
                  return (<option value={eachResort.id} key={eachResort.id}>{eachResort.name}</option>)
                  })
                }
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="select-trail">Select a trail <small className="required-asterisk">*</small></label>
            <select
              className="form-control form-control-lg"
              id="select-trail"
              value={this.state.newPostTrailID}
              onChange={this.userSelectedTrail}>
                <option selected disabled>Choose...</option>
                {this.state.trailsFromUserSelectionOfResort.map((eachTrail) => {
                  return (<option key={eachTrail.id} value={eachTrail.id}>{eachTrail.name}</option>)
                  })
                }
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="snow-condition">How was the snow? <small className="required-asterisk">*</small></label>
            <select
              className="form-control form-control-lg"
              id="snow-condition"
              value={this.state.newPostSnowCondition}
              onChange={this.userSelectedSnowCondition}>
                <option selected disabled>Conditions...</option>
                <option>Fresh pow, bring your snorkel</option>
                <option>Packed powder but gets the job done</option>
                <option>Poor coverage, chopped up</option>
                <option>Icy, crusty</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="crowd-level">Crowd level? <small className="required-asterisk">*</small></label>
            <select
              className="form-control form-control-lg"
              id="crowd-level"
              value={this.state.newPostCrowdLevel}
              onChange={this.userSelectedCrowdLevel}>
              <option selected disabled>Crowd...</option>
              <option>Had the run to myself</option>
              <option>Average, about what you'd expect</option>
              <option>Packed, people everywhere</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="star-rating">Overall rating? <small className="required-asterisk">*</small></label>
            <ReactStars
              count={5}
              size={50}
              color1={"#979799"}
              color2={"#FAC021"}
              half={false}
              value={this.state.newPostStarRating}
              onChange={this.userSelectedStarRating}/>
          </div>
          <div className="form-group">
            <label htmlFor="notes">Anything else?</label>
            <textarea 
              className="form-control"
              id="notes"
              rows="3"
              value={this.newPostNotes}
              onChange={this.userSelectedNotes}></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Send it!</button>
          </div>
        </form>
        <div className="text-left">
          <Link to="/" className="btn btn-outline-secondary cancel-btn">Cancel</Link>
        </div>
         <br />
      </div>
    )
  }
}

export default AddNewPost;
