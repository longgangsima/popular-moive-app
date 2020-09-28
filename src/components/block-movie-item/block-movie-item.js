import React,{useState, useEffect} from 'react';
import {connect,useSelector,useDispatch} from "react-redux";
import {addToFavorite,removeFromBlock} from '../../redux/actions';
import './block-movie-item.css';


function BlockMovieItem(props) {
    const {page,index, item,removeFromBlock,addToFavorite } = props;
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log('page and index are', page, ' and index ', index)
    },[])

    const removeButton=()=>{
        console.log('remove from block: ', page, index);
        dispatch(removeFromBlock(page+1,index))
    }

    return(
        <div className="block-movie">
            <div className="block-movie-image">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    alt={item}
                    className="movie-image-a"
                />
            </div>
            <div className="block-movie-buttons">
                <button
                    className="block-movie-button-button"
                    onClick={removeButton}
                >
                    Remove
                </button>
                <button
                    className="block-movie-button-button"
                    onClick={()=>dispatch(addToFavorite(page+1,index))}
                >
                    Like
                </button>
                <button
                    className="block-movie-button-button"
                >
                    Detail
                </button>

            </div>

        </div>


    )
}

export default BlockMovieItem;
