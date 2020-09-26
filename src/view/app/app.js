import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './app.css'

import Toolbar from '../../components/toolbar/toolbar';
import SideDrawer from '../../components/sidedrawer/sidedrawer';
import Backdrop from '../../components/backdrop/backdrop';
import Home from '../home-tab/home-tab';
import MovieTab from '../movie-tab/movie-tab';
import FavMovie from '../favorite-tab/favorite-tab';
import BlockMovie from '../block-tab/block-tab';


class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
        <BrowserRouter>
            <div className='container'>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler}/>
                {backdrop}
                <main className='main_container'>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/movieList">
                            <MovieTab />
                        </Route>
                        <Route path="/fav">
                            <FavMovie />
                        </Route>
                        <Route path="/block">
                            <BlockMovie />
                        </Route>
                    </Switch>
                </main>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;



