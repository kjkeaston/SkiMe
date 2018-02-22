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
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="faq" className="menu-item" href="/faq">FAQ</a>
          <a id="terms-of-use" className="menu-item" href="/termsofuse">Terms of Use</a>
        </Menu>
        
      </div>
    );
  }
}

export default HamburgerMenu

// <div class="bm-burger-button" style="z-index: 1000;">
//     <span>
//         <span class="bm-burger-bars" style="position: absolute; height: 20%; left: 0px; right: 0px; top: 0%; opacity: 1;">
//         </span>
//         <span class="bm-burger-bars" style="position: absolute; height: 20%; left: 0px; right: 0px; top: 40%; opacity: 1;">
//         </span>
//         <span class="bm-burger-bars" style="position: absolute; height: 20%; left: 0px; right: 0px; top: 80%; opacity: 1;">
//         </span>
//     </span>
//     <button style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; margin: 0px; padding: 0px; border: none; opacity: 0; font-size: 8px; cursor: pointer;">Open Menu</button>
// </div>