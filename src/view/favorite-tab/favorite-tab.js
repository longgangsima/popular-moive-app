import React from 'react';
import {connect} from "react-redux";
import {loadNextPageFromDB} from "../../redux/actions";
import {URL_IMAGE_PREFIX} from "../../constants";
import './favorite-tab.css';
import { Modal } from 'react-bootstrap';
import MovieItem from "../../components/movie-item/movie-item";
import { makeStyles } from '@material-ui/core/styles';


class favMovie extends React.Component {




    render() {

        return (
            <div className='fav_container'>
                {
                    this.props.movieList[0].map((movie) => {
                        return (
                            <div className="child">
                                <img className='fav_movie_img' src={URL_IMAGE_PREFIX + movie.poster_path} alt="No url for this movie" title={movie.title} />
                                <div className='button_list'>
                                    <button>Remove</button>
                                    <button>Block</button>
                                    <button>Detail</button>
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

