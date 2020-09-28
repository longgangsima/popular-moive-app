import React from 'react';
import {connect} from "react-redux";
import {addToBlock, removeFromFavorite} from "../../redux/actions";
import {URL_IMAGE_PREFIX} from "../../constants";
import './favorite-tab.css';
import FavMovieDetail from './fav-movie-detail'


class favMovie extends React.Component {

    render() {

        let favMovieList = [];

        if (this.props.movieList.length === 0) {
            favMovieList = null;
        } else {
            for (let i = 0; i < this.props.movieList.length; i++) {
                favMovieList = favMovieList.concat(this.props.movieList[i].filter(movie => {
                    return movie.isFavorite === true;
                }))
            }
            if (favMovieList.length === 0) {
                favMovieList = null;
            }
        }


        return (
            <div className='fav_container'>
                {favMovieList === null ? (<div className="no_fav">No Favorite movie!</div>) :
                    favMovieList.map((movie) => {
                        return (
                            <div className="child" key={movie.id}>
                                <img className='fav_movie_img' src={URL_IMAGE_PREFIX + movie.poster_path}
                                     alt="No url for this movie" title={movie.title}/>
                                <div className='button_list'>
                                    <FavMovieDetail movieDetail={movie}
                                                    removeFromFavorite={this.props.removeFromFavorite}
                                                    addToBlock={this.props.addToBlock}></FavMovieDetail>
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
    {removeFromFavorite, addToBlock}
)(favMovie);

