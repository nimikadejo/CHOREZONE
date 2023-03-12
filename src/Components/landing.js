import faviconn from '../imgs/faviconn.png';
import Alert from "../imgs/Alert.png"
import apay from "../imgs/apay.png"
import ASign from "../imgs/ASign.png"
import './Landing.css';
import { Link } from 'react-router-dom';

function Landing() {
	return (
		<div className="Apps">
			<nav>
				<ul className="Navul">
					<li style={{ float: "left" }}><a href="google.com" style={{ pointerEvents: "none" }}>
						<img className="homelogo" src={faviconn} alt="chorezone-logo"
							width="40px" height="25px" />
					</a></li>
					<li><a href="#About">About</a></li>
					<li><a href="https://twitter.com/nimikadejo">Get Help</a></li>
					<li><a href="https://medium.com/nimikadejo">Blog</a></li>
					<li><a href="#Service">Services</a></li>
					<li>
						<Link className='a' to="/signup">Sign Up </Link>
					</li>
					<li>
						<Link classname='a' to="/login">Log In </Link>
					</li>
				</ul>
			</nav>
			<main className="Maincopy">
			  <div>
				<h1 style={{ fontSize: "48px" }}>Get Your Chores Done <br />
					in a Click!<br />
				</h1>
				<p style={{ fontSize: "15px" }}>Welcome to our new web app!<br />
					Our app is designed to make your life easier <br />
					by providing a simple and intuitive interface for<br />
					getting the professional help you need in your home.</p>
				<p><button className="btn" width="50px">
					<Link to="/signup">Book Now!</Link>
					</button></p>
			  </div>
			</main>
			<section className='Mainabout' >
				<div className='About-page' id="About">
					<h1>About Chorezone</h1>
					<p>Chorezone is the perfect app to schedule a home.<br />
						All you need is get started is to <Link to="/signup">Sign Up </Link>
						</p><br />
					<p style={{ marginTop: "-30px" }}>Check out all our <a href="#Services">Services.</a></p>
					<h2>Developer</h2>
					<div class="info">
						<p style={{ marginTop: "-10px" }}>Nimi Kadejo</p>
						<p></p>
						<p>When Nimi is not trying to improve her dev.<br />
							skills or thinking about 
							creating global change products,
							you will find her consuming the arts
							and trying to finish the bestselling book...
							she hasn't started. </p>
						<p className='Contact logos'><a href='https://https://github.com/nimikadejo/chorezone'><img src="https://bitemycoin.com/wp-content/uploads/2018/06/GitHub-Logo.png"
							alt="githublogo" className="btnc" size="15px" />
						</a>
							<a href='mailto:nimikadejo@gmail.com'><img src="https://pixlok.com/wp-content/uploads/2021/04/Gmail-Logo-PNG-1024x1024.jpg"
								alt="maillogo" className="btnc" size="35px" />
							</a></p>
					</div>
				</div>
			</section>
			<div className='Mainservices' id="Services">
				<div className='Servicediv'>
					<h1 className='Serviceheader'>Chorezone Services</h1>
					<ol className='Service'>
						<li>
							<h2>Sign Up for Free!</h2>
							<p> You can sign up for Chorezone for FREE.<br />
								The whole process is seemless especially when <br />
								you choose to Continue with Google.</p>
							<img size="50px"
								src={ASign} alt="signinshot" />
						</li>
						<li>
							<h2>Get Appointment Reminders!</h2>
							<p>Take advantage of our reminder integrations.<br />
								Schedule what time to be reminded of your <br />
								Appointments.</p>
							<img
								src={Alert} alt="Email" />
						</li>
						<li>
							<h2>Online Payments!</h2>
							<p>Cashless Policy? YES! <br />
								You can pay for your appointmest with Flutterwave.</p>
							<img
								src={apay} alt="OnlinePayments" />
						</li>
					</ol>
				</div>
			</div>
			<footer className='Footer'>
				<ul>
					<li style={{ float: "left", fontSize: "small" }}><h6>©2023 ChoreZone Dev.</h6></li>
					<li><a href='https://docs.google.com/document/d/1GzlRXgvzxz2zJ-RhIZC1k4kA2Dch7OgblDbCnxdiGSI/edit?usp=sharing'>
						<h4>Terms</h4></a></li>
					<li><a href='https://docs.google.com/document/d/1GzlRXgvzxz2zJ-RhIZC1k4kA2Dch7OgblDbCnxdiGSI/edit?usp=sharing'>
						<h4>Privacy</h4></a></li>
				</ul>
			</footer>
		</div>
	);
}

export default Landing;