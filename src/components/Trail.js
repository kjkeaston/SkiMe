import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Trail extends Component {
  constructor() {
    super();
    this.state = {
      currentTrailName: "",
      allPosts: [],
    }
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
    //   this.setState({
    //     currentResortName: oneResort.name,
    //     allTrails: this.state.allTrails.concat(oneResort.trails)
    //   })
    //   console.log(this.state.allTrails)
    // })
  }

  render() {
    return (
      <div className="container">
        <h1>{this.state.currentTrailName}</h1>
        {this.state.allPosts.map((eachPost) => {
          return(
            <div key={eachPost.id} className="col-xs-12">
              <Link to={ `/posts/${eachPost.id}`} className="btn btn-outline-info">{eachPost.snow_condition}</Link>
            </div>
            )
          })
        }
      </div>
    )
  }
}

export default Trail
