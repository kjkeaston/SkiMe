import React, { Component } from 'react';
import logo from '../logo.svg';
import HamburgerMenu from './HamburgerMenu.js';

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <header className="App-header">
        <HamburgerMenu />
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">SkiMe</h1>
        <i className="fas fa-plus fa-3x"></i>


      </header>
    )
  }
}

export default Header;
