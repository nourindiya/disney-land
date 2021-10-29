import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./MyOrder.css"

const MyOrder = () => {

    const { id } = useParams();

    const [addedActivity, setAddedActivity] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/activities/${id}`)
            .then(res => res.json())
            .then(data => setAddedActivity(data))
    }, [])

    return (
        <div className="pink">
            <div>
                <h2 className="tittle fw-bold">My Orders</h2>
            </div>
            < div className="addedActivity mx-auto mt-3 p-3 mb-5">
                <img className="added-img mt-2" src={addedActivity.img} alt="" srcset="" />
                <h1 className="tittle">{addedActivity.name}</h1>
                <p className="pp">{addedActivity.description}</p>
            </div >
        </div>
    );
};

export default MyOrder;