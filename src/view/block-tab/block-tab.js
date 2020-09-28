import React,{useState, useEffect} from 'react';
import {connect,useSelector} from "react-redux";
import {addToFavorite,removeFromBlock} from '../../redux/actions';
import BlockMovieItem from '../../components/block-movie-item/block-movie-item';
import './block-tab.css';

function BlockMovie(props) {

    const movieList = useSelector(state=>state.movieListReducer);

    const [isLoding, setIsLoading] = useState(true);

    const [ind, setIdx] = useState(0);

    useEffect(()=>{
        console.log('movie list is?',movieList );
        movieList.length>0?setIsLoading(false):setIsLoading(true);
    },[isLoding])


    return(

        <div className='block-movie-item'>

            <div className="block-movie-header">

                <h1>
                    Movie List of Blocked
                </h1>

            </div>
            <div className="block-movie-list">
                {
                    movieList
                        .map((movies,page)=>
                            <div key={page} className="block-movies">
                                {movies
                                    // .filter(movie=>movie.isBlock===true)
                                    //在这，因为你filter 完以后，他的返回一个新的，所以下面的 index 是根据目前给你的
                                    .map((movie,index)=>
                                        <div className="block-movies-detail">
                                            {
                                                movie.isBlock?
                                                    <BlockMovieItem
                                                        page={page}
                                                        index={index}
                                                        item={movie}
                                                        key={movie.id}
                                                        // id={movie.id}
                                                        addToFavorite={addToFavorite}
                                                        removeFromBlock={removeFromBlock}
                                                    />
                                                    :
                                                    null
                                            }
                                        </div>

                                )}
                            </div>
                    )
                }
            </div>


        </div>

    )
}

export default connect(null,{addToFavorite,removeFromBlock})(BlockMovie);
