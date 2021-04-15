
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
        <li><Link to="/" onClick={props.click}>Home</Link></li>
        <li><Link to="/movieList" onClick={props.click}>MovieList</Link></li>
        <li><Link to="/fav" onClick={props.click}>Favorite Movie</Link></li>
        <li><Link to="/block" onClick={props.click}>Block Movie</Link></li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
