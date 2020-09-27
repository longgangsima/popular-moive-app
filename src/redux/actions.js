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
            // console.log("response", response.data);
            for(let i = 0 ; i < nextPageMovieList.length; i++) {
                nextPageMovieList[i].isFavorite = false;
                nextPageMovieList[i].isBlock = false;
                nextPageMovieList[i].page = page;
                nextPageMovieList[i].index = i;
            }
            dispatch(loadNextPageFromDBSynch(nextPageMovieList));
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}

export const addToFavorite = (page, index) => ({
    type: ADD_TO_FAVORITE,
    data: {page:page, index:index},
});

export const removeFromFavorite = (page, index) => ({
    type: REMOVE_FROM_FAVORITE,
    data: {page:page, index:index},
});

export const addToBlock = (page, index) => ({
    type: ADD_TO_BLOCK,
    data: {page:page, index:index},
});

export const removeFromBlock = (page, index) => ({
    type: REMOVE_FROM_BLOCK,
    data: {page:page, index:index},
});
