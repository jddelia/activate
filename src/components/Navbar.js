import React from 'react';
import ActivateLogo from '../activatelogo.png';

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={ActivateLogo} height="50" width="50" />
      </div>
      <div className="nav-right">
        <a href="#">home</a>
        <a href="#pricing">pricing</a>
        <a href="#about">about</a>
      </div>
    </nav>
  );
}

export default Navbar;
