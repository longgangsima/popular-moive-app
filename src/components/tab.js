import React from 'react';
import {connect} from "react-redux";
import {loadDataFromDB, addToFavorite, removeFromFavorite, addToBlock, removeFromBlock} from "../actionCreator";

class Tab extends React.Component {
    render() {
      return (
        <div></div>
      )
    }
}

// for tab2 in tab2.js
export default connect(
    state => ({movieList: state.movieListReducer}), 
    {loadDataFromDB}
)(Tab2);

// for tab3 in tab3.js
export default connect(
  state => ({favoriteList: state.favoriteListReducer}), 
  {addToFavorite, removeFromFavorite}
)(Tab3);

// for tab4 in tab4.js
export default connect(
  state => ({blockList: state.blockListReducer}), 
  {addToBlock, removeFromBlock}
)(Tab4);