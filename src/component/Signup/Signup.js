import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../../images/google.webp";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user,loading] = useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
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

  if(user){
    navigate('/shop')
  }

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handleCreateSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Password did't match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be 6 character.");
      return;
    }

    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div className="form">
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleCreateSubmit}>
          <div className="form-section">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name=""
              id=""
              required
            />
          </div>
          <div className="form-section">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name=""
              id=""
              required
            />
          </div>
          <div className="form-section">
            <label className="form-label" htmlFor="password">
              Confirm Password
            </label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              name=""
              id=""
              required
            />
            <p style={{ color: "red" }}>{error}</p>
            {loading && <p>Loading...</p> }
          </div>
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <div className="account-create">
          <p>Already have an account</p>
          <Link to="/login">Login</Link>
        </div>

        <div className="or-line">
          <div className="small-line"></div>
          <small>or</small>
          <div className="small-line"></div>
        </div>
        <button onClick={handleGoogleSignIn} className="sign-in-btn">
          <img src={image} alt="" /> google sign in
        </button>
      </div>
    </div>
  );
};

export default Signup;
