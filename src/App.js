import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Home from './components/Home/Home';
import MovieList from './components/MovieList/MovieList';
import FavMovie from './components/FavMovie/FavMovie';
import BlockMovie from './components/BlockMovie/BlockMovie';


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
            <div style={{height: '100%'}}>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                <main style={{marginTop: '64px'}}>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/movieList">
                            <MovieList />
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



