import React from 'react';
import { Link } from 'react-router-dom'

import DrawerToggleButton from '../sidedrawer/drawer-toggle-button';
import './toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/">THE LOGO</a></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                <li><Link to="/movieList">MovieList</Link></li>
                <li><Link to="/fav">Favorite Movie</Link></li>
                <li><Link to="/block">Block Movie</Link></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default toolbar;
