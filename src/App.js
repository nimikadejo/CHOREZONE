import 	logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <nav>
	  <ul className="Navul">
	    <li><a className="home" href="google.com"
		style={{float: "left"}}>
			<img src="./logo.svg" width="45px" height="40px" /></a></li>
	    <li><a href="google.com">About</a></li>
	    <li><a href="google.com">Get Help</a></li>
	    <li><a href="google.com">Blog</a></li>
	    <li><a href="google.com">Services</a></li>
	    <li><a href="google.com">Log In</a></li>
	    <li><a href="google.com">Sign Up</a></li>
	  </ul>
	</nav>
	<main className="Maincopy">
	    <h1> Chores Done in a  
	    <a href="google.com">Click</a>
	    </h1>
	    <p><button type="button" class="booking">
	    <a href="google.com">Book Now!</a>
	    </button></p>
	</main>
	<footer>
	    <small>Copyright ©2023 ChoreZone Dev, All rights reserved</small>
	    <h6 style={{float: "left", textAlign: "center"}}>Terms</h6>
	</footer>
    </div>
  );
}

export default App;
