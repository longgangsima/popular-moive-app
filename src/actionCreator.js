import {LOAD_DATA_FROM_DB, ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE, ADD_TO_BLOCK, REMOVE_FROM_BLOCK} from "./constants";

export const loadDataFromDB = (singlePageMovieList) => ({
    type: LOAD_DATA_FROM_DB,
    data: singlePageMovieList,
});

export const addToFavorite = (movieItem) => ({
    type: ADD_TO_FAVORITE,
    data: movieItem,
});

export const removeFromFavorite = (movieId) => ({
    type: REMOVE_FROM_FAVORITE,
    data: movieId,
});

export const addToBlock = (movieItem) => ({
    type: ADD_TO_BLOCK,
    data: movieItem,
})

export const removeFromBlock = (movieId) => ({
    type: REMOVE_FROM_BLOCK,
    data: movieId,
})
