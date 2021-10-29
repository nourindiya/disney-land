import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./Activity.css"

const Activity = (props) => {
    const { name, img, description, _id } = props.activity

    const history = useHistory()

    const handleAdd = (id) => {
        const uri = `myOrder/${id}`
        // console.log(uri);
        history.push(uri)
    }

    return (
        <div>

            <div className="service pb-3 px-4 pt-2 text-center">
                <img src={img} alt="" srcset="" />
                <h2>{name}</h2>
                <p>{description}</p>
                <div className="text-center">
                    <Link to={`/myOrder/${_id}`}>
                        <button onClick={() => { handleAdd(_id) }} className="btn-2">Add To Order</button>
                    </Link>
                </div>
            </div >

        </div>
    );
};

export default Activity;