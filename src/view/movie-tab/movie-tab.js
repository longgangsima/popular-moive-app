import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {loadNextPageFromDB} from "../../redux/actions";
import {addToFavorite} from "../../redux/actions";
import {removeFromFavorite} from "../../redux/actions";
import {addToBlock} from "../../redux/actions";
import MovieItem from "../../components/movie-item/movie-item";
import "./movie-tab.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretSquareLeft } from '@fortawesome/free-solid-svg-icons';
import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import loadingBar from "../../img/loading.gif";

class MovieTab extends React.Component {

    static propTypes = {
        movieList: PropTypes.array.isRequired,
        loadNextPageFromDB: PropTypes.func.isRequired,
        addToFavorite: PropTypes.func.isRequired,
        removeFromFavorite: PropTypes.func.isRequired,
        addToBlock: PropTypes.func.isRequired,
    }

    state = {
        currentPage: 0,
        totalPage: 0,
        currentPageMovieList: [],
        showLoadingBar: true,
    }

    static getDerivedStateFromProps = (props, state) => {
        const length = props.movieList.length;
        if(length === state.totalPage) return null;
        // {
        //     return  {
        //         currentPageMovieList: props.movieList[state.currentPage - 1] && 
        //         props.movieList[state.currentPage - 1].filter((movieItem) => !movieItem.isBlock),
        //     }
        // }
        return {
            currentPage: state.currentPage + 1,
            totalPage: state.totalPage + 1,
            currentPageMovieList: props.movieList[length - 1],
            showLoadingBar: false,
        }
    }

    componentDidMount = () => {
        const {loadNextPageFromDB} = this.props;
        const {currentPage} = this.state;
        loadNextPageFromDB(currentPage + 1);
    }

    handleButtonNextClick = () => {
        const {currentPage, totalPage} = this.state;
        const nextPage = currentPage + 1;
        if(nextPage <= totalPage) {
            const {movieList} = this.props;
            this.setState({
                currentPage: nextPage,
                currentPageMovieList: movieList[nextPage - 1].filter((movieItem) => !movieItem.isBlock),
            })
        }
        else {
            this.setState({
                showLoadingBar: true,
            })
            const {loadNextPageFromDB} = this.props;
            loadNextPageFromDB(nextPage);
        }
    }

    handleButtonPrevClick = () => {
        const {currentPage} = this.state;
        if(currentPage === 1) return;
        const prevPage = currentPage - 1;
        const {movieList} = this.props;
        this.setState({
            currentPage: prevPage,
            currentPageMovieList: movieList[prevPage - 1].filter((movieItem) => !movieItem.isBlock),
        });
    }

    handleButtonReleaseDateClick = () => {
        let arr = [...this.state.currentPageMovieList];
        arr.sort(this.sortReleaseDate);
        this.setState({
            currentPageMovieList: arr,
        });
    }

    sortReleaseDate = (a, b) => {
        return Date.parse(b.release_date) - Date.parse(a.release_date);
    }

    handleButtonPopularityClick = () => {
        let arr = [...this.state.currentPageMovieList];
        arr.sort(this.sortPopularity);
        this.setState({
            currentPageMovieList: arr,
        });
    }

    sortPopularity = (a, b) => (b.popularity - a.popularity);
    
    handleButtonAverageScoreClick = () => {
        let arr = [...this.state.currentPageMovieList];
        arr.sort(this.sortAverageScore);
        this.setState({
            currentPageMovieList: arr,
        });
    }

    sortAverageScore = (a, b) => (b.vote_average - a.vote_average);

    handleButtonVoteCountClick = () => {
        let arr = [...this.state.currentPageMovieList];
        arr.sort(this.sortVoteCount);
        this.setState({
            currentPageMovieList: arr,
        });
    }

    sortVoteCount = (a, b) => (b.vote_count - a.vote_count);

    removeMovieItemFromState = (id) => {
        this.setState({
            currentPageMovieList: this.state.currentPageMovieList.filter((movieItem) => movieItem.id !== id),
        });
    }

    render() {
        const {addToFavorite, removeFromFavorite, addToBlock} = this.props;
        const {currentPageMovieList, currentPage, showLoadingBar} = this.state;
        return (
            <div className="page">
                <div className="nav-bar">
                    <h1>The Top Rated Movie List</h1>
                    <div className="middle-bar">
                        <FontAwesomeIcon onClick={this.handleButtonPrevClick} className="icon-arrow" icon={faCaretSquareLeft} />
                        <div className="middle-bar-title">Page <span>{currentPage}</span>/500 of 10000 Results</div>
                        <FontAwesomeIcon onClick={this.handleButtonNextClick} className="icon-arrow" icon={faCaretSquareRight} />
                    </div>
                    <div className="nav-button">
                        <div className="nav-button-wrapper">
                            <button onClick={this.handleButtonReleaseDateClick}>
                                Release Date
                                <FontAwesomeIcon className="icon-sort" icon={faCaretDown} />
                            </button>
                            <button onClick={this.handleButtonPopularityClick}>
                                Popularity
                                <FontAwesomeIcon className="icon-sort" icon={faCaretDown} />
                            </button>
                        </div>
                        <div className="nav-button-wrapper">
                            <button onClick={this.handleButtonAverageScoreClick}>
                                Average Score
                                <FontAwesomeIcon className="icon-sort" icon={faCaretDown} />
                            </button>
                            <button onClick={this.handleButtonVoteCountClick}>
                                Vote Count
                                <FontAwesomeIcon className="icon-sort" icon={faCaretDown} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className={showLoadingBar?"":"hideElement"}>
                    <div className="loading-bar">
                        <img src={loadingBar} alt="wrong url" />
                    </div>
                </div>
                
                <div className={showLoadingBar?"hideElement":""}>
                    <div className="movie-list-wrapper">
                        <ul className="movie-list">
                            {currentPageMovieList && currentPageMovieList.map((movieItem) => 
                            <MovieItem key={movieItem.id} movieItem={movieItem} removeMovieItemFromState={this.removeMovieItemFromState}
                            addToFavorite={addToFavorite} removeFromFavorite={removeFromFavorite} addToBlock={addToBlock} />)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({movieList: state.movieListReducer}), 
    {loadNextPageFromDB, addToFavorite, removeFromFavorite, addToBlock}
)(MovieTab);
