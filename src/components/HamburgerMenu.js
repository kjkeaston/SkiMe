import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';


class HamburgerMenu extends Component {

  render () {
    return (
      <div>
        <Menu isOpen={false}>
          <Link id="profile" className="menu-item" to="/profile">Profile</Link>
          <Link id="resorts" className="menu-item" to="/">Resorts</Link>
          <Link id="add-review" className="menu-item" to="/addreview">Trail review</Link>
          <Link id="about" className="menu-item" to="/about">About</Link>
          <Link id="faq" className="menu-item" to="/faq">FAQ</Link>
        </Menu>
      </div>
    );
  }
}

export default HamburgerMenu
