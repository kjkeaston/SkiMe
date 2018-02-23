import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timestamp from 'react-timestamp';
import ReactStars from 'react-stars';


class Trail extends Component {
  constructor() {
    super();
    this.state = {
      currentTrailName: "",
      allPosts: [],
    }
    this.testFunction = this.testFunction.bind(this);
  }

// https://skime-api.herokuapp.com/trails/${trailID}.json
  componentDidMount() {
    let trailID = this.props.match.params.trail_id;
    fetch(`${process.env.REACT_APP_BACKEND_URL}/trails/${trailID}.json`).then( (res) => {
      return res.json();
    }).then( (oneTrail) => {
      console.log(oneTrail.posts)
      this.setState({
        currentTrailName: oneTrail.name,
        allPosts: this.state.allPosts.concat(oneTrail.posts)
      })
    });
  }

  testFunction() {
    this.state.allPosts.map(eachPost => {
      });
  }

  render() {
    return (
      <div className="container">
      <button onClick={this.testFunction} className="btn btn-outline-warning">Tester Button</button>
        <h1>{this.state.currentTrailName}</h1>
        
        {this.state.allPosts.map((eachPost) => {
          return (
            <div key={eachPost.id} className="col-xs-12">
              <div className="list-group">
                <Link to={ `/posts/${eachPost.id}`} className="list-group-item list-group-item-action flex-column align-items-start">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1"><strong>Snow Condition:</strong> {eachPost.snow_condition}</h5>
                    <small className="text-muted"><Timestamp time={eachPost.created_at} utc={true} autoUpda te={60} /></small>
                  </div>
                  <p className="mb-1">Overall rating:</p>
                  <ReactStars count={5} size={50} color2={'#ffd700'} half={false} edit={false} value={parseInt(eachPost.star_rating)}/>
                  <small className="text-muted"><strong>Crowd level:</strong> {eachPost.crowd_level}</small>
                </Link>
              </div>
            </div>
            )
          })
        }
      </div>
    )
  }
}

export default Trail
