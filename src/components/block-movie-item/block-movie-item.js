import React,{useState, useEffect} from 'react';
import {connect,useSelector,useDispatch} from "react-redux";
import {addToFavorite,removeFromBlock} from '../../redux/actions';
import './block-movie-item.css';
import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};
function BlockMovieItem(props) {
    const {page,index, item,removeFromBlock,addToFavorite } = props;
    const dispatch = useDispatch()

    const [show,setShow] = useState(false);

    const popWindow=() =>{
        console.log('show pop is: ', show)
        show? setShow(false):setShow(true);
    }

    useEffect(()=>{
        console.log('page and index are', page, ' and index ', index)
        Modal.setAppElement(null);
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
                    onClick={popWindow}
                >
                    Detail
                </button>

                <Modal
                    isOpen={show}
                    onRequestClose={popWindow}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <button onClick={popWindow}>close</button>
                    <div className='block-movie-item-detail'>
                        <div className="block-movie-item-detail-content">
                            <h2>
                                {item.title}
                            </h2>
                            <p>
                                {item.release_date}
                            </p>
                            <p>
                                {item.overview}
                            </p>

                        </div>

                    </div>

                </Modal>


            </div>

        </div>


    )
}

export default BlockMovieItem;
