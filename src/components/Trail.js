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
        <h1 className="page-title">{this.state.currentTrailName}</h1>
        {this.state.allPosts.length > 0 ?
          (this.state.allPosts.map((eachPost) => {
            return (
              <div key={eachPost.id} className="col-xs-12">
                <div className="list-group">
                  <Link to={`/posts/${eachPost.id}`} className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                      <h4><strong>Snow Condition:</strong> {eachPost.snow_condition}</h4>
                      <small className="text-muted"><Timestamp time={eachPost.created_at} utc={true} autoUpda te={60} /></small>
                    </div>
                    <p className="text-muted crowd-level"><strong>Crowd level:</strong> {eachPost.crowd_level}</p>
                    <h5 className="mb-1 star-rating text-left">Overall rating:</h5>
                    <ReactStars count={5} size={50} color1={'#979799'} color2={'#FAC021'} half={false} edit={false} value={parseInt(eachPost.star_rating)}/>
                  </Link>
                </div>
              </div>
              )
            })
          ) : ( 
            <div>
              <h3>Sorry, no trail reviews yet for {this.state.currentTrailName}.</h3>
              <h3>Add a review to keep fellow shredders updated!</h3>
            </div>
          )
        }
      </div>
    )
  }
}

export default Trail
