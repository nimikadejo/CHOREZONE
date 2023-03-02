import './login.css';
import React from 'react';

function Login() {
  return (
    <section className="container forms" style={{boxSizing: "border-box"}}>
                  <div className="form login">
                     <div className="login-content">
                        <header>Log In</header>

                        <form action="https://google.com">
                            <div className="field input">
                                <input type="email" placeholder="Email"className="input" />
                            </div>
                            <div className="field input">
                                <input type="password" placeholder="Password" className="password" required/>
                            </div>
                            <div className="form-link">
                                <a href="https://google.com" className="forgot-pass">Forgot Password?</a>
                            </div>
                            <div className="field button">
                                <button>Log in</button>
                            </div>
                            <div className="form-link">
                                <span style={{color: "gray"}}>Don't have an account?<a href="#" className="link signup-link"> Sign up</a>
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
