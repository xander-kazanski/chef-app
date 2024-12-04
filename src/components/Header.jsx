import React from 'react';

import img from '../images/chef-claude-icon.png'

function Header(props) {
  return (
    <header>
      <img src={img} alt="Chef SVG icon" />
      <h1>Chef Claude</h1>
    </header>
  )
}

export default Header;

