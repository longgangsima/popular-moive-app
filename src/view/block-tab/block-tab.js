import React, {useEffect, useState} from 'react';
import {addToFavorite,addToBlock,removeFromBlock} from '../../redux/actions';
import { connect } from 'react-redux'
import Movie from './movie';
import { useDispatch, useSelector } from "react-redux";

function BlockMovie (props){
    // const [movies, setMovies] = useState([]);

    const movies = useSelector(state=>state.movieListReducer);
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        console.log('movies are', movies&&movies)
        if(movies&&movies.length===0){
            setIsLoading(true);
        }
        else {
            setIsLoading(false);
        }

    })
    const removeButton =(id)=>{

    }
    const likeButton =(id)=>{

    }
    return(
        <div className="block-page">
            <div className="block-page-header">
                <h1>
                    Movie List of Blocked
                </h1>
            </div>
            <div className="App-list">

                {
                    !isLoading && movies[0]
                        .filter(movie=> movie.isBlock)
                        .map(movie=>
                            <div
                                className="App-list-movie"
                                key={movie.id}
                            >
                                <Movie
                                    item={movie}
                                    key={movie.id}
                                    removeButton={removeButton}
                                    likeButton={likeButton}

                                />
                            </div>

                        )
                }
            </div>
        </div>
    )
}

// const mapStateToProps=(state)=>{
//     console.log('movieListReducer contain: ',state.movieListReducer);
//     return{
//         movies:state.movieListReducer
//     }
//
// }
export default connect(null,{addToFavorite,removeFromBlock})(BlockMovie);
