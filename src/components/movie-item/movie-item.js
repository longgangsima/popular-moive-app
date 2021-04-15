import React, {Component} from "react";
import PropTypes from "prop-types";
import {URL_IMAGE_PREFIX} from "../../constants";
import "./movie-item.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default class MovieItem extends Component {

    static propTypes = {
        movieItem: PropTypes.object.isRequired,
        addToFavorite: PropTypes.func.isRequired,
        removeFromFavorite: PropTypes.func.isRequired,
        addToBlock: PropTypes.func.isRequired,
        removeMovieItemFromState: PropTypes.func.isRequired,
    }

    handleButtonFavoriteClick = () => {
        const {movieItem, addToFavorite, removeFromFavorite} = this.props;
        if(movieItem.isFavorite) {
            removeFromFavorite(movieItem.page, movieItem.index);
        }
        else {
            addToFavorite(movieItem.page, movieItem.index);
        }
    }

    handleButtonBlockClick = () => {
        const {movieItem, addToBlock, removeMovieItemFromState} = this.props;
        addToBlock(movieItem.page, movieItem.index);
        removeMovieItemFromState(movieItem.id);
    }

    render() {
        const {movieItem} = this.props;
        return (
            <li className="movie-item">
                <img src={URL_IMAGE_PREFIX + movieItem.poster_path} alt="No url for this movie" title={movieItem.title + "(" + movieItem.release_date + ")"} />
                <div className="movie-item-wrapper">
                    <h3>
                        <FontAwesomeIcon className={movieItem.isFavorite ? "icon-heart-blue" : "icon-heart-grey"} icon={faHeart} />
                        <span>{movieItem.title}</span>
                    </h3>
                    <h4>Release Date: 
                        <span>{movieItem.release_date}</span>
                    </h4>
                    <h4>Popularity: 
                        <span>{Math.round(movieItem.popularity)}</span>
                    </h4>
                    <h4>Average Score: 
                        <span>{movieItem.vote_average}</span>
                    </h4>
                    <h4>
                        Vote Count: 
                        <span>{movieItem.vote_count}</span>
                    </h4>
                    <p>{movieItem.overview}</p>
                </div>
                <div className="movie-item-button">
                    <button onClick={this.handleButtonFavoriteClick}>{movieItem.isFavorite ? "UnFavorite":"Favorite"}</button>
                    <button onClick={this.handleButtonBlockClick}>Block</button>
                </div>
            </li>
        )
    }
}