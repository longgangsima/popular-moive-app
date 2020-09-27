import React from 'react';
import {connect} from "react-redux";
import {loadNextPageFromDB} from "../../redux/actions";
import {URL_IMAGE_PREFIX} from "../../constants";
import './favorite-tab.css';
import FavMovieDetail from './fav-movie-detail'
import { FaTrashAlt } from 'react-icons/fa'
import { ImBlocked } from 'react-icons/im'


class favMovie extends React.Component {


    render() {


        return (
            <div className='fav_container'>
                {
                    this.props.movieList[0].map((movie) => {
                        return (
                            <div className="child" key={movie.id}>
                                <img className='fav_movie_img' src={URL_IMAGE_PREFIX + movie.poster_path} alt="No url for this movie" title={movie.title} />
                                <div className='button_list'>
                                    <button className="icon_button"><FaTrashAlt size={30}></FaTrashAlt></button>
                                    <button className="icon_button"><ImBlocked size={30}></ImBlocked></button>
                                    <FavMovieDetail movieDetail = {movie}></FavMovieDetail>
                                </div>
                            </div>
                        );
                    })
                }


            </div>
        )
    }
}

export default connect(
    state => ({movieList: state.movieListReducer}),
    {loadNextPageFromDB}
)(favMovie);

