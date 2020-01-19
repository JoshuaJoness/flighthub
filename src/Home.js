import React from 'react';
import axios from 'axios'
import People from './components/People'
import Planets from './components/Planets'
import Starships from './components/Starships'
import Particles from 'react-particles-js';
import Nav from './components/Nav'

class Home extends React.Component {


	render() {

		const styles = {
			particles:{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%"
			}
		}

		return (
			<div>

				<div style={{height: "100vh", backgroundColor:"black"}}>
					<Nav />
					<center>
						<img src="star-wars-logo.png" alt="Star Wars Logo" style={{width:"35%", paddingTop:"15%"}}></img>
						<p>Designed by <a href="http://joshuajones.io">http://joshuajones.io</a></p>
					</center>
					<Particles
							style={styles.particles}
					    params={{
						    "particles": {
						        "number": {
						            "value": 160,
						            "density": {
						                "enable": false
						            }
						        },
						        "size": {
						            "value": 3,
						            "random": true,
						            "anim": {
						                "speed": 4,
						                "size_min": 0.3
						            }
						        },
						        "line_linked": {
						            "enable": false
						        },
						        "move": {
						            "random": true,
						            "speed": 1,
						            "direction": "top",
						            "out_mode": "out"
						        }
						    },
						    "interactivity": {
						        "events": {
						            "onhover": {
						                "enable": true,
						                "mode": "bubble"
						            },
						            "onclick": {
						                "enable": true,
						                "mode": "repulse"
						            }
						        },
						        "modes": {
						            "bubble": {
						                "distance": 250,
						                "duration": 2,
						                "size": 0,
						                "opacity": 0
						            },
						            "repulse": {
						                "distance": 400,
						                "duration": 4
						            }
						        }
						    }
						}} />
				</div>
				<div style={{height:"100vh", backgroundColor:"#ffffff"}}>
					<People />
					<Planets />
					<Starships />
				</div>
			</div>
		);
	}
}

export default Home;
