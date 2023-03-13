import './login.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../utilities/firebase';
import { auth } from '../utilities/firebase';
import { useHistory } from "react-router-dom"

const defaultUserDetails = {
  email: "",
  password: ""
}

export const Login = () => {
  const [userDetails, setUserDetails] = useState(defaultUserDetails);
  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userDetails);
    try {
      const user = await getUser(userDetails.email);
      console.log(user);
      handleSignIn(userDetails.email, userDetails.password);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("User not found.")
      } else {
        alert(error);
      }
    }
  };
  const handleSignIn = async(email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      // If sign-in is successful, redirect to the dashboard
      history.push('/dashboard');
    } catch (error) {
      console.log(error.message);
    }
  }
  



  return (
    <section className="container forms" style={{ boxSizing: "border-box" }}>
      <div className="form login">
        <div className="login-content">
          <header>Log In</header>
          <form onSubmit={handleSubmit} className="allforms">
            <div className="field input">
              <input type="email" name="email" placeholder="Email" className="input" value={userDetails.email} onChange={handleChange} />
            </div>
            <div className="field input">
              <input type="password" placeholder="Password" className="password" name="password" value={userDetails.password} onChange={handleChange} />
            </div>
            <div className="form-link">
              <a href="https://google.com" className="forgot-pass">Forgot Password?</a>
            </div>
            <div className="field button">
              <button type="submit">Log in</button>
            </div>
            <div className="form-link">
              <span style={{ color: "gray" }}>Don't have an account?<Link to="/signup" className="link signup-link">Sign up</Link>
              </span>
            </div>
          </form>
          <div className='line'></div>
          <div className='media-options'>
            <a href='https://google.com' className='field google' style={{ textDecoration: "none" }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
                className='google-img' alt="G" />
              <span className='the-span'>Continue with Google</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
