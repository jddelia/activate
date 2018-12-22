import React from 'react';
import Activate from '../activate.png';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Activate} height="500" width="500" />
      </div>
    </header>
  );
}

export default Header;
