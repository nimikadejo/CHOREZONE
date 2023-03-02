import './login.css';
import React from 'react';

function Signup() {
  return (
                <div className="form signup" style={{boxSizing: "border-box"}}>
                     <div className="login-content">
                        <header>Create Your Account</header>
                        <form action="https://google.com">
                            <div className="field input">
                                <input type="text" placeholder="Full Name" className="input" required/>
                            </div>
                            <div className="field input">
                                <input type="email" placeholder="Email" className="input" />
                            </div>
                            <div className="field input">
                                <input type="text" placeholder="Home Address" className="input" />
                            </div>
                            <div className="field input">
                                <input type="tel" placeholder="Phone Number" className="input" required/>
                            </div>
                            <div className="field input">
                                <input type="password" placeholder="Password" className="password" required/>
                            </div>
                            <div className="field button">
                                <button>Sign Up</button>
                            </div>
                            <div className="form-link">
                                <span style={{color: "gray"}}>Already have an account?<a href="#" className="link login-link"> Sign In</a>
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
