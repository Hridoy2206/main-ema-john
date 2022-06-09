import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import image from '../../images/google.webp'
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () =>{
    signInWithPopup(auth, googleProvider)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
    .catch((error)=>{
      const errorMessage = error.message;
      console.error(errorMessage)
    })
  }

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate();
      const location = useLocation()

      const from = location.state?.from?.pathname || "/";

      const handleEmailBlur = event =>{
        setEmail(event.target.value)
      }
      const handlePasswordBlur = event =>{
        setPassword(event.target.value)
      }
      if(user){
        navigate(from,{replace: true})
      }

      const handleSubmit = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
      }
  return (
    <div className="form-container">
      <div className="form">
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-section">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input onBlur={handleEmailBlur} type="email" name="" id="" required/>
          </div>
          <div className="form-section">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input onBlur={handlePasswordBlur} type="password" name="" id="" required/>
          </div>
          {
            loading  && <p>Loading..</p>
          }
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <div className="account-create">
          <p>Now to ema-john</p>
          <Link to="/signup">Create New Account</Link>
        </div>

        <div className="or-line">
            <div className="small-line"></div>
            <small>or</small>
            <div className="small-line"></div>
        </div>
        <button onClick={handleGoogleSignIn} className="sign-in-btn"><img src={image} alt="" /> google sign in</button>
      </div>
    </div>
  );
};

export default Login;
