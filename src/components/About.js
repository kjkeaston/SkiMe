import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class About extends Component {

  render() {
    return (
      <div className="container">
        <h1>About</h1>
        <p className="text-left">
          Skiing is awesome! Skiing on ice? Not so much! SkiMe sets out to solve the problem of not knowing individual trail conditions until it’s too late.
          <br/>
          <br/>
          The issue with existing trail reporting is a lack or real-time information. The only way to know the conditions on any given trail at any given time is to actually ski down the run. What this means is that if a trail is really iced up or has poor snow coverage, you won’t know until you are already on your way down the mountain, and at that point, it is too late to turn back.
          <br/>
          <br/>
          For anyone who spends time in the mountains, you know how fast conditions can change and this app aims to solve that problem by providing an interface for users to give real-time updates of trail conditions. The app is tailored for mobile browsers with a simple UI and big buttons to hopefully prevent click errors when navigating the site with gloves.
        </p>
        <br/>
        <Link to="/" className="btn btn-outline-primary">Return to resorts</Link>
      </div>
    )
  }
}

export default About
