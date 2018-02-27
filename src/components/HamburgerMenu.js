import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';


class HamburgerMenu extends Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <div>
        <Menu>
          <a id="profile" className="menu-item" href="/profile">Profile</a>
          <a id="resorts" className="menu-item" href="/">Resorts</a>
          <a id="add-review" className="menu-item" href="/addreview">Trail review</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="faq" className="menu-item" href="/faq">FAQ</a>
        </Menu>
      </div>
    );
  }
}

export default HamburgerMenu
