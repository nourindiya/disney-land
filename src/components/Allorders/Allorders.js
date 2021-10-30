import React, { useEffect, useState } from 'react';
import "./Allorders.css"

const Allorders = () => {

    const [bookedActivitys, setActivitys] = useState([]);
    const status = { status: "Approved" }

    useEffect(() => {
        fetch('http://localhost:5000/orders/admin')
            .then(res => res.json())
            .then(data => setActivitys(data))
    }, []);


    // handle order approval
    const handleApproval = (id) => {
        const url = `http://localhost:5000/orders/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Approved this order")
                }
            })
    }


    // handle order rejection
    const handleRejection = (id) => {
        const procceed = window.confirm('Are you sure to REJECT this order?');
        if (procceed) {
            const url = `https://still-shore-02172.herokuapp.com/orders/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Rejection succesful.')
                        const remainingPackages = bookedActivitys.filter(bookedPackage => bookedPackage._id !== id)
                        setActivitys(remainingPackages);
                    }
                })
        }
    }

    if (bookedActivitys.length > 0) {
        return (
            <div className="container">
                <h2 className="text-center  my-5 tittle fw-bold">Manage All Orders</h2>
                <hr />
                <div className="w-50 mx-auto">

                    {
                        bookedActivitys.map(activity => <div key={activity._id}>
                            <h1 className="pp">{activity.activity}</h1>
                            <h1 className="pp text-muted fs-6"> Added By:{activity.email}</h1>
                            <h6 className="text-danger">{activity.status}</h6>

                            <button className="btn btn-danger bg-danger mx-2 my-2" onClick={() => handleRejection(activity._id)}>Reject</button>

                            <button className="btn btn-success bg-success mx-2 my-2" onClick={() => handleApproval(activity._id)}>Approved</button>
                            <hr />
                        </div>)
                    }

                </div>
            </div>
        );
    }

    else {
        return (
            <div className="else">
                <h1 className="tittle center text-muted mb-5">Haven't Ordered Anything Yet</h1>
            </div>
        );
    }
};

export default Allorders;