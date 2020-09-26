import React, {Component} from "react";
import PropTypes from "prop-types";
import {URL_IMAGE_PREFIX} from "../../constants";

export default class MovieItem extends Component {
    static propTypes = {
        movieItem: PropTypes.object.isRequired,
    }
    /*
    id: string
    poster_path: string or null
    overview: string
    release_data: string
    title: string
    isFavorite: boolean
    isBlock: boolean
    */
    render() {
        const {movieItem} = this.props;
        return (
            <li>
                <img src={URL_IMAGE_PREFIX + movieItem.poster_path} alt="No url for this movie" title={movieItem.title} />
                <h3>{movieItem.title} {movieItem.release_data}</h3>
                <p>{movieItem.overview}</p>
                <div>
                    <button>Favorite</button>
                    <button>Block</button>
                </div>
            </li>
        )
    }
}