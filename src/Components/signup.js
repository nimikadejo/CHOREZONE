import './login.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD951GXn2hqsTGoaFWW8SKNIU_3X_EElbo",
    authDomain: "chorezone.firebaseapp.com",
    projectId: "chorezone",
    storageBucket: "chorezone.appspot.com",
    messagingSenderId: "258708490886",
    appId: "1:258708490886:web:c6185cc8cb0be8d78e9f07"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Signup() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          // User is signed up.
        } catch (error) {
          console.error(error);
        }
      };
 
  return (
    <div className="form signup" style={{boxSizing: "border-box"}}>
      <div className="login-content">
        <header>Create Your Account</header>
        <form onSubmit={handleSubmit}>
          <div className="field input">
            <input type="text" placeholder="Full Name" className="input"
            value={name} onChange={(e) => setName(e.target.value)} required/>
          </div>
          <div className="field input">
            <input type="email" placeholder="Email" className="input"
            value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="field input">
            <input type="text" placeholder="Home Address" className="input"
            value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className="field input">
            <input type="tel" placeholder="Phone Number" className="input"
            value={telephone} onChange={(e) => setTelephone(e.target.value)} required/>
          </div>
          <div className="field input">
            <input type="password" placeholder="Password" className="password"
            value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </div>
          <div className="field button">
            <button>Sign Up</button>
          </div>
          <div className="form-link">
            <span style={{color: "gray"}}>Already have an account? 
              <Link to="/login" className="link login-link"> Sign In</Link>
            </span>
          </div>
        </form>
        <div className='line'></div>
        <div className='media-options'>
          <a href='https://google.com' className='field google' style={{textDecoration: "none"}}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
              className='google-img' alt="G" />
            <span className='the-span'> Continue with Google</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Signup;