import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css"
const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 car"
                        src="https://th.bing.com/th/id/R.532f86e022bc9e90e4c508ddbed8d4de?rik=M96lP2fzYo%2fAcQ&riu=http%3a%2f%2ftravelescapetours.com%2fwp-content%2fuploads%2f2017%2f06%2fhongkong-disney.jpg&ehk=GqEw4ur2ZlMxQhnWdVU7VRUcHlCM1HHP7XOhFXMsdVg%3d&risl=&pid=ImgRaw&r=0"
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 car"
                        src="https://image.freepik.com/free-vector/pink-magic-castle-princess-fairy-palace-mountains-with-rocky-road-lead-gates-with-flying-turrets-air-balloons-sky-fantasy-fortress-medieval-architecture-cartoon-illustration_107791-3572.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 car"
                        src="https://image.freepik.com/free-vector/font-design-word-fairy-princess-with-unicorn-princess_1308-42376.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>


            </Carousel>
        </div>
    );
};

export default Banner;