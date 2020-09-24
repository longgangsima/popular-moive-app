import React from 'react';
import {connect} from "react-redux";
import {loadDataFromDB} from "../actionCreator";
import PropTypes from "props-type";

class MovieList extends React.Component {
    static propTypes = {
        movieList: PropTypes.array.isRequired,
        loadDataFromDB: PropTypes.func.isRequired,
    }
    render() {
        const {movieList} = this.props;
        return (
            <div>
                <ul>
                    {
                        movieList.map((movieItem, index) => <MovieItem key={movieItem.id} movieItem={movieItem}/>)
                    }
                </ul>
            </div>
        )
    }
}

// for tab2 in tab2.js
export default connect(
    state => ({movieList: state.movieListReducer}), 
    {loadDataFromDB}
)(MovieList);