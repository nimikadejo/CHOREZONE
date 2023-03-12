import './login.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserDocumentFromAuth } from '../utilities/firebase';

const defaultUserDetails = {
  displayName: "",
  address: "",
  telephone: "",
  email: "",
  password: ""
}

export const Signup = () => {
  const [userDetails, setUserDetails] = useState(defaultUserDetails)
  const resetUserDetails = () => {
    setUserDetails(defaultUserDetails);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userDetails);
    if (!userDetails.password) {
      alert("No email or password");
      return;
    }
    try {
      await createUserDocumentFromAuth(userDetails.email, userDetails.password);
      console.log("User is signed up.")
      resetUserDetails()
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("User Already exists.")
      } else {
        alert(error);
      }
    };
  }

  return (
    <section className="container forms" style={{ boxSizing: "border-box" }}>
     <div className="form signup" style={{ boxSizing: "border-box" }} >
      <div className="login-content">
        <header>Create Your Account</header>
        <form onSubmit={handleSubmit} className="allforms">
          <div className="field input">
            <input type="text" placeholder="Full Name" className="input" name="displayName"
              value={userDetails.displayName} onChange={handleChange} required />
          </div>
          <div className="field input">
            <input type="email" placeholder="Email" className="input" name="email"
              value={userDetails.email} onChange={handleChange} />
          </div>
          <div className="field input">
            <input type="text" placeholder="Home Address" className="input" name="address"
              value={userDetails.address} onChange={handleChange} />
          </div>
          <div className="field input">
            <input type="tel" placeholder="Phone Number" className="input" name="telephone"
              value={userDetails.telephone} onChange={handleChange} required />
          </div>
          <div className="field input">
            <input type="password" placeholder="Password" className="password" name="password"
              value={userDetails.password} onChange={handleChange} required />
          </div>
          <div className="field button">
            <button type="submit" onClick={() => handleSubmit}>Sign Up</button>
          </div>
          <div className="form-link">
            <span style={{ color: "gray" }}>Already have an account?
              <Link to="/login" className="link login-link"> Sign In</Link>
            </span>
          </div>
        </form>
        <div className='line'></div>
        <div className='media-options'>
          <a href='https://google.com' className='field google' style={{ textDecoration: "none" }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
              className='google-img' alt="G" />
            <span className='the-span'> Continue with Google</span>
          </a>
        </div>
        </div>
       </div>
      </section>
  );
}

