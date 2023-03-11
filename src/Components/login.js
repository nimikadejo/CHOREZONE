import './login.css';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD951GXn2hqsTGoaFWW8SKNIU_3X_EElbo",
    authDomain: "chorezone.firebaseapp.com",
    projectId: "chorezone",
    storageBucket: "chorezone.appspot.com",
    messagingSenderId: "258708490886",
    appId: "1:258708490886:web:c6185cc8cb0be8d78e9f07"
  };
  
const app = initializeApp(firebaseConfig);

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(app.auth(), email, password);
      // User is signed in.
      } catch (error) {
        console.error(error);
      }
    };
  
  return (
    <section className="container forms" style={{boxSizing: "border-box"}}>
                  <div className="form login">
                     <div className="login-content">
                        <header>Log In</header>

                        <form onSubmit={handleSubmit}>
                            <div className="field input">
                                <input type="email" placeholder="Email"className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="field input">
                                <input type="password" placeholder="Password" className="password" value={email} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="form-link">
                                <a href="https://google.com" className="forgot-pass">Forgot Password?</a>
                            </div>
                            <div className="field button">
                                <button>Log in</button>
                            </div>
                            <div className="form-link">
                                <span style={{color: "gray"}}>Don't have an account?<Link to="/signup" className="link signup-link"> Sign up</Link>
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
      </section>
  );
}

export default Login;
