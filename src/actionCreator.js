import {LOAD_DATA_FROM_DB, ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE, ADD_TO_BLOCK, REMOVE_FROM_BLOCK} from "./constants";
import axios from 'axios';

export const loadDataFromDB = (page) => {

    const result = axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b3959aa01d727c748f382bf9dbaf547f&language=en-US&page=1`)
        .then(res => {
            const moviesList = res.data;
            console.log('movie list are?',moviesList)
            moviesList.results.map(movie=>{
                movie.isFavorite = false;
                movie.isBlock = false;
            })

            return {
                type:LOAD_DATA_FROM_DB,
                payload:moviesList
            }
        })
        .catch(err=>{
            console.log('error is', err);
        })

}

    


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
