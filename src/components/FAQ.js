import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class FAQ extends Component {

  render() {
    return (
      <div className="container">
        <h1>FAQ</h1>
        <div className="text-left">
          <div>
            <h5><strong>Q:</strong> Who can use SkiMe?</h5>
            <h5><strong>A:</strong> SkiMe is only for people who like to shred the gnar! If you don’t go full send, get out. Just kidding! Anyone who fancies a day on the slopes is welcome to use our app. Young and old, new and experienced riders alike!</h5>
          </div>
          <hr />
          <div>
            <h5><strong>Q:</strong> What resorts are available?</h5>
            <h5><strong>A:</strong> Currently, we only offer trails reviews from the three Vail resorts in the Lake Tahoe area: Heavenly, Northstar, and Kirkwood. But don’t worry, more resorts are coming soon!</h5>
          </div>
          <hr />
          <div>
            <h5><strong>Q:</strong> Is the app for skiers and snowboarders?</h5>
            <h5><strong>A:</strong> YES!! As long as you don’t sit in the middle of runs.</h5>
          </div>
          <hr />
          <div>
            <h5><strong>Q:</strong> What if I want to delete my post?</h5>
            <h5><strong>A:</strong> Sorry, we don’t offer that feature currently as we want other users to be able to see past trail conditions.</h5>
          </div>
          <hr />
        </div>
        <Link to="/" className="btn btn-outline-primary">Return to resorts</Link>
        <br />
      </div>
    )
  }
}

export default FAQ
