
import React from 'react';
import { Link } from 'react-router-dom'

import './sidedrawer.css';


const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li><Link to="/movieList">MovieList</Link></li>
        <li><Link to="/fav">Favorite Movie</Link></li>
        <li><Link to="/block">Block Movie</Link></li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
