// for action creator
import {LOAD_NEXT_PAGE_FROM_DB, ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE, ADD_TO_BLOCK, REMOVE_FROM_BLOCK,
    URL_DISCOVER_PREFIX, API_KEY_SUGUO} from "../constants";
import axios from "axios";

const loadNextPageFromDBSynch = (singlePageMovieList) => ({
    type: LOAD_NEXT_PAGE_FROM_DB,
    data: singlePageMovieList,
});

export const loadNextPageFromDB = (page) => {
    return (dispatch) => {
        // send ajax to movieDB
        const url = URL_DISCOVER_PREFIX + "/discover/movie?api_key=" + API_KEY_SUGUO 
        + "&sort_by=popularity.desc&&include_adult=false&include_video=false&page=" + page;
        axios.get(url)
        .then(function (response) {
            const nextPageMovieList = response.data.results;
            // console.log("response", nextPageMovieList);
            for(let movieItem of nextPageMovieList) {
                movieItem.isFavorite = false;
                movieItem.isBlock = false;
            }
            dispatch(loadNextPageFromDBSynch(nextPageMovieList));
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}

export const addToFavorite = (movieItem) => ({
    type: ADD_TO_FAVORITE,
    data: movieItem,
});

export const removeFromFavorite = (movieId) => ({
    type: REMOVE_FROM_FAVORITE,
    data: movieId,
});

export const addToBlock = (id,movieArray) => {
    movieArray.forEach((movie,index)=>{

        console.log('id is: ', id);
        if(movie.id === id){
            movie.isBlock = true;
        }

    })
    console.log('after add to block: ', movieArray)
    return{
        type: ADD_TO_BLOCK,
        data: movieArray,
    }

}



export const removeFromBlock = (movieId) => ({
    type: REMOVE_FROM_BLOCK,
    data: movieId,
});


