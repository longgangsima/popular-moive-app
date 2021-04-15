import React from 'react';
import {Carousel} from 'react-bootstrap';
import movie1 from '../../img/movie1.jpg';
import movie2 from '../../img/movie2.jpeg';
import movie3 from '../../img/movie3.jpg';
import './home-tab.css';
import {Link} from "react-router-dom";

const home = () => {

    return (
        <div className="carousal_container">
            <Link to="/movieList">
                <Carousel className='my_carousel'>
                    <Carousel.Item>
                        <img
                            className="my_carousel_image"
                            src={movie1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="my_carousel_image"
                            src={movie2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="my_carousel_image"
                            src={movie3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Link>
        </div>
    );
}

export default home;



