import React from 'react';
import {connect} from "react-redux";
import {loadNextPageFromDB} from "../../redux/actions";
import {URL_IMAGE_PREFIX} from "../../constants";
import './favorite-tab.css';
import MovieItem from "../../components/movie-item/movie-item";
import { makeStyles } from '@material-ui/core/styles';


class favMovie extends React.Component {



    clickHandler = () => {
        console.log('movieLIst',this.props.movieList)
    }

    render() {

        return (
            <div className='fav_container'>
                {
                    this.props.movieList[0].map((movie) => {
                        return (
                            <div>
                                <img src={URL_IMAGE_PREFIX + movie.poster_path} alt="No url for this movie" title={movie.title} />
                            </div>
                        );
                    })
                }

                <button onClick={this.clickHandler}>try</button>
                <img src={URL_IMAGE_PREFIX + this.props.movieList[0][0].poster_path} alt="No url for this movie" title={this.props.movieList[0][0].title} />
                {this.props.movieList.length}
            </div>
        )
    }
}

export default connect(
    state => ({movieList: state.movieListReducer}),
    {loadNextPageFromDB}
)(favMovie);

