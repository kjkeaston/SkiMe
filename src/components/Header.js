import React, { Component } from 'react';
import logo from '../logo.svg';
import HamburgerMenu from './HamburgerMenu.js';
import { Link } from 'react-router-dom';


class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <header className="App-header">
        <HamburgerMenu />
        <Link to="/" className="App-title">
          <h1 className="App-title">SkiMe</h1>
        </Link>
        <Link to="/addreview"><i className="fas fa-plus fa-3x"></i> </Link>
      </header>
    )
  }
}

export default Header;
