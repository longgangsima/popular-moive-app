import React,{useState} from 'react';
import Movie from './Movie';
import {addToFavorite,addToBlock,removeFromBlock} from '../../actionCreator';
import { connect } from 'react-redux'


function BlockMovie(props){

    const[movies, setMovies] = useState([]);

    const removeButton =()=>{

    }
    const likeButton =()=>{

    }
    return(
        <div className="block-page">
            <div className="block-page-header">
                <h1>
                    Movie List of Blocked
                </h1>
            </div>
            {/*<div className="block-page-content">*/}
            {/*    {*/}
            {/*        movieList*/}
            {/*            .filter(movie=>{*/}
            {/*                movie.isBlock*/}
            {/*            })*/}
            {/*            .map(movie=>{*/}
            {/*                <Movie*/}

            {/*                />*/}

            {/*            })*/}
            {/*    }*/}
            {/*</div>*/}
        </div>
    )


}

const mapStateToProps=({movieListReducer,favoriteListReducer,blockListReducer})=>{
    console.log('movieListReducer contain: ',movieListReducer);

}

export default connect(mapStateToProps,{addToFavorite,addToBlock,removeFromBlock})(BlockMovie);
