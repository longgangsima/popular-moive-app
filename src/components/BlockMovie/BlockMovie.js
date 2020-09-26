import React from 'react';
import BlockIcon from '@material-ui/icons/Block';
import Movie from './Movie';

const movieList = [
    {
        id:1,
        name:"a",
        isFavorite:false,
        isBlock:false,
    },
    {
        id:2,
        name:'b',
        isFavorite: true,
        isBlock: false
    },
    {
        id:3,
        name:'c',
        isFavorite: false,
        isBlock: true,
    },
    {
        id:4,
        name:d,
        isFavorite: false,
        isBlock: true
    }
]
const blockMovie = props => (

    const removeButton =()=>{

    }
    const likeButton =()=>{

    }
    return(
        <div className="block-page">
            <div className="block-page-header">
                <h1>
                    Movie List of Blocked
                </h1>
            </div>
            <div className="block-page-content">
                {
                    movieList
                        .filter(movie=>{
                            movie.isBlock
                        })
                        .map(movie=>{
                        <Movie
                            
                        />

                    })
                }
            </div>
        </div>
    )
    
);

export default blockMovie;
