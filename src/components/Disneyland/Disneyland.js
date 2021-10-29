import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Disneyland.css"

const Disneyland = () => {
    return (
        <div>
            <Container className="expert-container pt-5 mb-5">
                <Row className="text-center justify-content-lg-center justify-content-sm-center mx-auto">
                    <Col>
                        <p className="tittle fw-bold pt-5">Disney Land</p>
                        <p className="pp">
                            The Disneyland Park, originally Disneyland, is the first of two theme parks built at the Disneyland Resort in Anaheim, California, opened on July 17, 1955.It is the only theme park designed and built to completion under the direct supervision of Walt Disney. It was originally the only attraction on the property; its official name was changed to Disneyland Park to distinguish it from the expanding complex in the 1990s. It was the first Disney theme park.Walt Disney came up with the concept of Disneyland after visiting various amusement parks with his daughters in the 1930s and 1940s. He initially envisioned building a tourist attraction adjacent to his studios in Burbank to entertain fans who wished to visit; however, he soon realized that the proposed site was too small. After hiring a consultant to help him determine an appropriate site for his project, Disney bought a 160-acre (65 ha) site near Anaheim in 1953. Construction began in 1954 and the park was unveiled during a special televised press event on the ABC Television Network on July 17, 1955.Disneyland has a larger cumulative attendance than any other theme park in the world, with 726 million visits since it opened (as of December 2018). In 2018, the park had approximately 18.6 million visits, making it the second most visited amusement park in the world that year, behind only Magic Kingdom, the very park it inspired.Adventureland is designed to recreate the feel of an exotic tropical place in a far-off region of the world. "To create a land that would make this dream reality", said Walt Disney, "we pictured ourselves far from civilization, in the remote jungles of Asia and Africa."
                        </p>
                        <button className="btn-2">Visit Now</button>
                    </Col>
                    <Col>
                        <img className="ex-img" src="https://image.freepik.com/free-vector/pink-magic-castle-princess-fairy-palace-air-balloon-flying-turrets-with-flags-fantasy-royal-fortress-cute-medieval-architecture-isolated-white-background-cartoon-illustration_107791-3109.jpg" alt="" />
                    </Col>
                </Row>
            </Container >
        </div>
    );
};

export default Disneyland;