import {combineReducers} from "redux";
import {LOAD_NEXT_PAGE_FROM_DB, ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE, ADD_TO_BLOCK, REMOVE_FROM_BLOCK, ADD_CURRENT_PAGE, DEDUCT_CURRENT_PAGE} from "../constants";

// movieListReducer
function movieListReducer(state=[], action) {
    switch(action.type) {
        case LOAD_NEXT_PAGE_FROM_DB:
            return [...state, action.data];
        case ADD_TO_FAVORITE:
            let addToFavoriteState = [...state];
            addToFavoriteState[action.data.page - 1][action.data.index].isFavorite = true;
            return addToFavoriteState;
        case REMOVE_FROM_FAVORITE:
            let removeFromFavoriteState = [...state];
            removeFromFavoriteState[action.data.page - 1][action.data.index].isFavorite = false;
            return removeFromFavoriteState;
        case ADD_TO_BLOCK:
            let addToBlockState = [...state];
            addToBlockState[action.data.page - 1][action.data.index].isFavorite = false;
            addToBlockState[action.data.page - 1][action.data.index].isBlock = true;
            return addToBlockState;
        case REMOVE_FROM_BLOCK:
            let removeFromBlockState = [...state];
            removeFromBlockState[action.data.page - 1][action.data.index].isBlock = false;
            return removeFromBlockState;
        default:
            return state;
    }
}

// currentPageReducer
function currentPageReducer(state=0, action) {
    switch(action.type) {
        case ADD_CURRENT_PAGE:
            return state + 1;
        case DEDUCT_CURRENT_PAGE:
            return state - 1;
        default:
            return state;
    }
}

export default combineReducers({
    movieListReducer, currentPageReducer,
});
