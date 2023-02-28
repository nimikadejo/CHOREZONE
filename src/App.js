import 	logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
	   <ul className="Navul">
	     <li style={{float: "left"}}><a href="google.com" >
			<img class="homelogo" src=".\faviconn.png" width="60px" height="35px"/>
		 </a></li>
	     <li><a href="google.com">About</a></li>
	     <li><a href="https://twitter.com/nimikadejo">Get Help</a></li>
	     <li><a href="https://google.com">Blog</a></li>
	     <li><a href="https://google.com">Services</a></li>
	     <li><a href="https://google.com">Log In</a></li>
	     <li><a href="https://google.com">Sign Up</a></li>
	  </ul>
	  </nav>
	  <main className="Maincopy">
	    <h1 style={{fontSize: "48px"}}>Get Your Chores Done <br />
		in a Click!<br/>
	    </h1>
		<p style={{fontSize: "15px"}}>Welcome to our new web app!<br /> 
			Our app is designed to make your life easier <br />
			by providing a simple and intuitive interface for<br />
			getting the professional help you need in your home.</p>
	    <p><button class="btn" role="button" width="50px">
			<a href="https://google.com">Book Now!</a></button></p>
	  </main>
	
	 <footer className='Footer'>
		<ul>
		   <li style={{float: "left", fontSize: "small"}}><h6>©2023 ChoreZone Dev.</h6></li> 
	       <li><a href='https://docs.google.com/document/d/1GzlRXgvzxz2zJ-RhIZC1k4kA2Dch7OgblDbCnxdiGSI/edit?usp=sharing'>
			<h4>Terms</h4></a></li>
		   <li><a href='https://docs.google.com/document/d/1GzlRXgvzxz2zJ-RhIZC1k4kA2Dch7OgblDbCnxdiGSI/edit?usp=sharing'>
			<h4>Privacy</h4></a></li>
		</ul> 
	 </footer>
    </div>
  );
}

export default App;
