import {combineReducers} from "redux";
import {LOAD_NEXT_PAGE_FROM_DB, ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE, ADD_TO_BLOCK, REMOVE_FROM_BLOCK} from "../constants";

// three reducers
// 1. movieListReducer for tab2
function movieListReducer(state=[], action) {
    switch(action.type) {
        case LOAD_NEXT_PAGE_FROM_DB: 
            return [...state, action.data];
        default: 
            return state;
    }
}

// 2. favoriteListReducer for tab3
function favoriteListReducer(state=[], action) {
    switch(action.type) {
        case ADD_TO_FAVORITE: 
            return [...state, action.data];
        case REMOVE_FROM_FAVORITE:
            return state.filter((movieItem, index) => movieItem.id !== action.data);
        default: 
            return state;
    }
}

// 3. blockListReducer for tab4
function blockListReducer(state=[], action) {
    switch(action.type) {
        case ADD_TO_BLOCK:
            return [...state, action.data];
        case REMOVE_FROM_BLOCK:
            return state.filter((movieItem, index) => movieItem.id !== action.data);
        default: 
            return state;
    }
}

export default combineReducers({
    movieListReducer, favoriteListReducer, blockListReducer
});