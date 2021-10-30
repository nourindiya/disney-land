import React from 'react';
import { Link } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className="w-50 else bg-info mx-auto ">
            <h1 className="mt-5 tittle">Dash Board</h1>
            <Link to="/myOrder">
                <button className="btn btn-info bg-warning m-5">My Order</button>
            </Link>

            <Link to="/allOrders">
                <button className="btn btn-info bg-warning m-5">Manage All Orders</button>
            </Link>

            <Link to="/add">
                <button className="btn btn-success bg-success m-5">Add Activity</button>
            </Link>
        </div>
    );
};

export default DashBoard;