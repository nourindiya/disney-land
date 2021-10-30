import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Login.css"
const Login = () => {

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
        <div className="signIn mx-auto m-5" >
            <div className="mb-5">
                <h1 className="tittle mt-5">Log In Your Account</h1>
            </div>
            <div className="mb-3">
                <button
                    onClick={handleGoogleSignIn}
                    className="btn-2 pp"
                    type="submit"
                >Log In with Google</button>
            </div>
            <div className="mb-5">
                <Link to="/register">New Here ?</Link>
            </div>
        </div>
    );
};

export default Login;