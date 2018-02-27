import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Profile extends Component {

  render() {
    return (
      <div className="container">
        <h3>Member profile experience coming soon!</h3>
        <Link to="/" className="btn btn-outline-primary">Return to resorts</Link>
      </div>
    )
  }
}

export default Profile
