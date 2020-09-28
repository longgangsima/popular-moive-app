import React from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {loadNextPageFromDB} from "../../redux/actions";
import {addToFavorite} from "../../redux/actions";
import {removeFromFavorite} from "../../redux/actions";
import {addToBlock} from "../../redux/actions";
<<<<<<< HEAD
=======
import {addCurrentPage} from "../../redux/actions";
import {deductCurrentPage} from "../../redux/actions";
>>>>>>> develop
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
        currentPage: PropTypes.number.isRequired,
        loadNextPageFromDB: PropTypes.func.isRequired,
        addToFavorite: PropTypes.func.isRequired,
        removeFromFavorite: PropTypes.func.isRequired,
        addToBlock: PropTypes.func.isRequired,
<<<<<<< HEAD
=======
        addCurrentPage: PropTypes.func.isRequired,
        deductCurrentPage: PropTypes.func.isRequired,
>>>>>>> develop
    }

    state = {
        totalPage: this.props.movieList.length,
        currentPageMovieList: [],
<<<<<<< HEAD
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
=======
        showLoadingBar: false,
    }

    static getDerivedStateFromProps = (props, state) => {
        const totalPageInState = state.totalPage;
        const totalPageInStore = props.movieList.length;
        // load first/new page
        if(totalPageInState < totalPageInStore) {
            return {
                currentPage: totalPageInStore,
                totalPage: totalPageInStore,
                currentPageMovieList: props.movieList[totalPageInStore - 1],
                showLoadingBar: false,
            }
>>>>>>> develop
        }
        return null;
    }

    componentDidMount = () => {
        const {movieList} = this.props;
        if(movieList.length === 0) {
            this.setState({
                showLoadingBar: true,
            });
            const {loadNextPageFromDB, addCurrentPage} = this.props;
            loadNextPageFromDB(1);
            addCurrentPage();
        }
        else {
            const {currentPage} = this.props;
            this.setState({
                currentPageMovieList: movieList[currentPage - 1].filter((movieItem) => !movieItem.isBlock),
            })
        }
    }

    handleButtonNextClick = () => {
        const {currentPage, addCurrentPage} = this.props;
        const totalPage = this.props.movieList.length;
        const nextPage = currentPage + 1;
        addCurrentPage();
        if(nextPage <= totalPage) {
            const {movieList} = this.props;
            this.setState({
<<<<<<< HEAD
                currentPage: nextPage,
=======
>>>>>>> develop
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
        const {currentPage, deductCurrentPage, movieList} = this.props;
        if(currentPage === 1) return;
        deductCurrentPage();
        const prevPage = currentPage - 1;
        this.setState({
<<<<<<< HEAD
            currentPage: prevPage,
=======
>>>>>>> develop
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
<<<<<<< HEAD
        const {addToFavorite, removeFromFavorite, addToBlock} = this.props;
        const {currentPageMovieList, currentPage, showLoadingBar} = this.state;
=======
        const {currentPage, addToFavorite, removeFromFavorite, addToBlock} = this.props;
        const {currentPageMovieList, showLoadingBar} = this.state;
>>>>>>> develop
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
<<<<<<< HEAD
    state => ({movieList: state.movieListReducer}), 
    {loadNextPageFromDB, addToFavorite, removeFromFavorite, addToBlock}
=======
    state => ({movieList: state.movieListReducer, currentPage: state.currentPageReducer}), 
    {loadNextPageFromDB, addToFavorite, removeFromFavorite, addToBlock, addCurrentPage, deductCurrentPage}
>>>>>>> develop
)(MovieTab);
