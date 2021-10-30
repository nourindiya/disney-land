import React from 'react';
import { Link } from 'react-router-dom';
import "./Activity.css"

const Activity = (props) => {
    const { name, img, description, _id } = props.activity

    return (
        <div>

            <div className="service pb-3 px-4 pt-2 text-center">
                <img src={img} alt="" srcset="" />
                <h2>{name}</h2>
                <p>{description}</p>
                <div className="text-center">

                    <Link to={`/booking/${_id}`}><button className="btn-2">Book Now</button></Link>

                </div>
            </div >

        </div>
    );
};

export default Activity;