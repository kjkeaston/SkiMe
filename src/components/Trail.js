import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timestamp from 'react-timestamp';

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
    fetch(`http://localhost:8080/trails/${trailID}.json`).then( (res) => {
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
              <div class="list-group">

        
          <Link to={ `/posts/${eachPost.id}`} class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1"><strong>Snow Condition:</strong> {eachPost.snow_condition}</h5>
              <small class="text-muted"><Timestamp time={eachPost.created_at} utc={true} autoUpda te={60} /></small>
            </div>
            <p class="mb-1">Overall rating:
              { Array.from({length: parseInt(eachPost.star_rating)}, (_,i) => i).map(num => {
                    return (
                      <i class="far fa-star"></i>
                    )
                  })
              }
            </p>
            <small class="text-muted"><strong>Crowd level:</strong> {eachPost.crowd_level}</small>
          </Link>
        
              </div>
            </div>
        )
        })
      }

        {this.state.allPosts.map((eachPost) => {
          return (
            <div key={eachPost.id} className="col-xs-12">
              <Link to={ `/posts/${eachPost.id}`} className="btn btn-outline-info">{eachPost.snow_condition}</Link>

              <p>Overall rating:
                { 
                  Array.from({length: parseInt(eachPost.star_rating)}, (_,i) => i).map(num => {
                    return (
                      <i class="far fa-star"></i>
                    )
                  })
              } </p>
            </div>
            )
          })
        }

      </div>
    )
  }
}

export default Trail
