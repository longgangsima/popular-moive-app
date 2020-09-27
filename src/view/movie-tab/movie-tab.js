import React from 'react';
import {connect} from "react-redux";
import {loadNextPageFromDB} from "../../redux/actions";
import PropTypes from "prop-types";
import MovieItem from "../../components/movie-item/movie-item";
import "./movie-tab.css";
// import "./all.css";

class MovieTab extends React.Component {
    static propTypes = {
        movieList: PropTypes.array.isRequired,
        loadNextPageFromDB: PropTypes.func.isRequired,
    }

    state = {
        currentPage: 0,
        totalPage: 0,
        currentPageMovieList: [],
    }

    static getDerivedStateFromProps = (props, state) => {
        const length = props.movieList.length;
        if(length === state.totalPage) return null;
        return {
            currentPage: state.currentPage + 1,
            totalPage: state.totalPage + 1,
            currentPageMovieList: props.movieList[length - 1],
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
                currentPageMovieList: movieList[nextPage - 1],
            })
        }
        else {
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
            currentPageMovieList: movieList[prevPage - 1],
        });
    }

    render() {
        const {currentPageMovieList, currentPage} = this.state;
        return (
            <div className="page">
                <div className="nav-bar">
                    <h1>The Top Rated Movie List</h1>
                    <div className="middle-bar">
                        <button onClick={this.handleButtonPrevClick}>Previous</button>
                        <span>{currentPage}</span>
                        <button onClick={this.handleButtonNextClick}>Next</button>
                    </div>
                    <div>
                        <button onClick={this.handleButtonClick}></button>
                        
                    </div>
                </div>
                <div className="movie-list">
                    <ul>
                        {currentPageMovieList && currentPageMovieList.map((movieItem, index) => <MovieItem key={movieItem.id} movieItem={movieItem}/>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({movieList: state.movieListReducer}), 
    {loadNextPageFromDB}
)(MovieTab);