import React, { useContext } from 'react';
import img from '../../Resources/Icon/google.png';
import css from './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import Config from '../../firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    if (firebase.apps.length === 0) {
        firebase.initializeApp(Config);
        }
    const googleSignIn = () =>{
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
           
            const {displayName,email} = result.user;
            const signedInUser= {name:displayName,email}
            setLoggedInUser(signedInUser);
            history.replace(from);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

    return (
        <div className="login">
            <div className="google">
                <h2>Login With</h2>
                <button onClick={googleSignIn}> <img src={img} alt=""/>Sign In With Google</button>
            </div>
        </div>
    );
};

export default Login;