import React from 'react';
import { Link } from 'react-router-dom';
// import "./Register.css"
const Register = () => {
    return (
        <div className="m-5">
            <h1 className="mt-5 mb-3 tittle">Create New Account</h1>
            <div className="mbt-5">
                <button className="btn-2 pp">Continue With Google</button>
                <p className="mt-4">
                    <Link to="/login">Already Registerd?</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;