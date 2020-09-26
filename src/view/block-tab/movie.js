import React,{useEffect} from 'react';

function Movie({item,likeButton,removeButton}){

    useEffect(()=>{
        console.log('in children', item)
        console.log('post address: ', item.poster_path);
    })


    return(
        <div>

            <div className="movie">
                <div className="movie-image">
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                        alt={item}
                        className="movie-image-a"

                    />
                </div>
                <div className="movie-buttons">
                    <button
                        className="movie-button-button"
                        onClick={()=>removeButton(item.id)}
                    >
                        Remove
                    </button>
                    <button
                        className="movie-button-button"
                        onClick={()=>likeButton(item.id)}
                    >
                        Like
                    </button>
                    <button
                        className="movie-button-button"
                    >
                        Detail
                    </button>

                </div>

            </div>

        </div>
    )


}
export default Movie;
