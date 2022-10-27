import React from 'react';
import google from '../../img/google.png'
import facebook from '../../img/facebook.png'
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {  toast } from 'react-toastify';

const Login = () => {
    const [signInWithGoogle, user, Gloading, Gerror] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fUser,  loading, error] = useSignInWithFacebook(auth);
    const handleGoogle =() =>{
        signInWithGoogle()
        toast("Google Login success")
    }
    const handleFacebook =() =>{
      signInWithFacebook()
    }
    if (Gerror) {
        return (
          <div>
            <p>Error: {Gerror.message} </p>
          </div>
        );
      }
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
            {console.log(error)}
          </div>
        );
      }
     
      if (Gloading ||  loading) {
        return <p>Loading...</p>;
      }
      if(user || fUser){
         console.log(user || fUser)
      }
    return (
        <div>
            <div onClick={handleGoogle} className="login-container d-flex justify-content-start align-items-center">                
                    <img className='logo-img' src={google} alt="google-img" />
                    <p>Continue With Google</p>
                
            </div>
            <div onClick={handleFacebook} className="login-container d-flex justify-content-start align-items-center">                
                    <img className='logo-img' src={facebook} alt="facebook-img" />
                    <p>Continue With Facebook</p>
                
            </div>
        </div>
    );
};

export default Login;