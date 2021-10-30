import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Register = () => {

    const { signInUsingGoogle } = useAuth();

    const location = useLocation()
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    console.log('camefrom', location.state?.from);

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }


    return (
        <div className="m-5 signIn mx-auto">
            <h1 className="mt-3 mb-3 tittle">Create New Account</h1>
            <div className="mbt-5">
                <button onClick={handleGoogleSignIn} className="btn-2 pp">Continue With Google</button>
                <p className="mt-4">
                    <Link to="/login">Already Registerd?</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;