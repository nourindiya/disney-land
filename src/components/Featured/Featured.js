import React from 'react';
import "./Featured.css"

const Featured = () => {
    return (
        <>
            <h1 className=" tittle">Featured Packages</h1>
            <div className="f-container mx-auto text-center">
                <div className="mb-4  bg-info">
                    <img className="f-img mt-3" src="https://image.freepik.com/free-vector/family-protected-from-virus_52683-39017.jpg" alt="" srcset="" />
                    <p className=" tittle fw-bold">Family Package</p>
                    <p className="pp">Perfect family plan package available with exciting offers.</p>
                    <button className="btn-2 mb-3">Learn More</button>
                </div>
                <div className="bg-info mb-4">
                    <img className="f-img mt-3" src="https://image.freepik.com/free-vector/lonely-girl-suffering-from-depression_74855-5270.jpg" alt="" srcset="" />
                    <p className=" tittle fw-bold">Bechalor Package</p>
                    <p className="pp">We have exciting offers available for bechalors.</p>
                    <button className="btn-2 mb-3">Learn More</button>
                </div>
            </div>
        </>
    );
};

export default Featured;