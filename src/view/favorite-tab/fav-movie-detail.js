import React, {useState} from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import {URL_IMAGE_PREFIX} from "../../constants";
import './fav-movie-detail.css'
import { FaStar } from 'react-icons/fa';
import { CgMoreR } from 'react-icons/cg';




const FavMovieDetail = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const genreColor = {
        28 :{"name": "Action", "color": "Orange"},
        12:{"name": "Adventure", "color": "lightpink"},
        16:{"name": "Animation", "color" : "DeepBlueSky"},
        35:{"name": "Comedy", "color": "MediumOrchid"},
        80:{"name": "Crime", "color": "violet"},
        99:{"name": "Documentary", "color": "sandybrown"},
        18:{"name": "Drama", "color": "hotpink"},
        10751:{"name": "Family", "color": "salmon"},
        14:{"name": "Fantasy", "color": "turquoise"},
        36:{"name": "History", "color": "khaki"},
        27:{"name": "Horror", "color": "deeppink"},
        10402:{ "name": "Music", "color": "plum"},
        9648:{"name": "Mystery", "color": "lavender"},
        10749:{"name": "Romance", "color": "gold"},
        878:{"name": "Science Fiction", "color": "skyblue"},
        10770:{"name": "TV Movie", "color": "yellowgreen"},
        53:{"name": "Thriller", "color": "brown"},
        10752:{ "name": "War", "color": "red"},
        37:{"name": "Western", "color": "Goldenrod"},
    }

    return (


        <>
            {/*<Button variant="dark" onClick={handleShow}>*/}
            {/*    ...*/}
            {/*</Button>*/}

            <button className="icon_button" onClick={handleShow}><CgMoreR size={30}></CgMoreR></button>

            <Modal  className='my_modal' size="lg" show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{props.movieDetail.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='my_modal_body'>
                    <Container>

                        <Row>
                            <Col xs={12} md={8} lg={4}>
                                <img id="fav_image_modal" src={URL_IMAGE_PREFIX + props.movieDetail.poster_path} alt=""/>
                            </Col>
                            <Col xs={6} md={4} lg={8}>
                                <Row>
                                    {
                                        props.movieDetail.genre_ids.map((genre) => {
                                            return (
                                                <button key={genre} className="genre_label" style={{backgroundColor: genreColor[String(genre)].color}}>
                                                    {genreColor[String(genre)].name}
                                                </button>
                                            )
                                        })
                                    }
                                </Row>
                                <Row>
                                    <div className="rating">
                                        {
                                            [...Array(5)].map((star,i) => {
                                                const ratingValue = i + 1;
                                                return <FaStar key={i} color={ratingValue * 2 <= props.movieDetail.vote_average ? "#ffc107":"#e4e5e9"} size={20}/>
                                            })
                                        }
                                        <label className="rating_label">{props.movieDetail.vote_average + "/10"}</label>

                                    </div>
                                </Row>
                                <Row>
                                    <div className='overview'>
                                        {props.movieDetail.overview}
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </Container>


                </Modal.Body>
            </Modal>
        </>
    );
}

export default FavMovieDetail;
