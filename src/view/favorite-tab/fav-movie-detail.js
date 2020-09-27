import React from 'react';
import {Modal, Container, Row, Col} from 'react-bootstrap';
import {URL_IMAGE_PREFIX, GENRE_COLOR} from "../../constants";
import './fav-movie-detail.css'
import {FaStar} from 'react-icons/fa';
import {CgMoreR} from 'react-icons/cg';
import {FaTrashAlt} from 'react-icons/fa'
import {ImBlocked} from 'react-icons/im'


class FavMovieDetail extends React.Component {
    state = {
        show: false
    }

    handleClose = () => this.setState({
        show: false
    });

    handleShow = () => this.setState({
        show: true
    });

    removeFromFavHandler = () => {
        this.props.removeFromFavorite(this.props.movieDetail.page, this.props.movieDetail.index);
    }

    switchToBlockHandler = () => {
        this.props.addToBlock(this.props.movieDetail.page, this.props.movieDetail.index);
    }


    render() {

        return (
            <div>
                <button onClick={this.removeFromFavHandler} className="icon_button"><FaTrashAlt size={30}></FaTrashAlt>
                </button>
                <button onClick={this.switchToBlockHandler} className="icon_button"><ImBlocked size={30}></ImBlocked>
                </button>
                <button className="icon_button" onClick={this.handleShow}><CgMoreR size={30}></CgMoreR></button>

                <Modal className='my_modal' size="lg" show={this.state.show} onHide={this.handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title className="my_modal_title">{this.props.movieDetail.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='my_modal_body'>
                        <Container>

                            <Row>
                                <Col xs={12} md={8} lg={4}>
                                    <img id="fav_image_modal"
                                         src={URL_IMAGE_PREFIX + this.props.movieDetail.poster_path} alt=""/>
                                </Col>
                                <Col xs={6} md={4} lg={8}>
                                    <Row>
                                        {
                                            this.props.movieDetail.genre_ids.map((genre) => {
                                                return (
                                                    <button key={genre} className="genre_label"
                                                            style={{backgroundColor: GENRE_COLOR[String(genre)].color}}>
                                                        {GENRE_COLOR[String(genre)].name}
                                                    </button>
                                                )
                                            })
                                        }
                                    </Row>
                                    <Row>
                                        <div className="rating">
                                            {
                                                [...Array(5)].map((star, i) => {
                                                    const ratingValue = i + 1;
                                                    return <FaStar key={i}
                                                                   color={ratingValue * 2 <= this.props.movieDetail.vote_average ? "#ffc107" : "#e4e5e9"}
                                                                   size={20}/>
                                                })
                                            }
                                            <label
                                                className="rating_label">{this.props.movieDetail.vote_average + "/10"}</label>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className='overview'>
                                            {this.props.movieDetail.overview}
                                        </div>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }


}

export default FavMovieDetail;
