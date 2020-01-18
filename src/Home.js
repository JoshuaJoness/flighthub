import React from 'react';
import axios from 'axios'
import Thumbnail from './components/thumbnail'
import Planets from './components/planets'

class Home extends React.Component {
	state = {
		people: [],
		fs: []
	}

	componentWillMount() {
		// this is the initial request to retrieve all of the people from the API
		axios.get('http://localhost:4000/people')
	  .then(data => {
			// this console log is to test and ensure that I am receiving the correct data
			console.log('sssssss',data.data.next)
			let people = data.data.results
			this.setState({people})
			// this retrieves each person's homeworld
			this.state.people.map(person =>
				axios.get(person.homeworld)
				.then(data => {
					person.homeworld = data.data.name
					this.setState({people})
				})
				.catch(err => {
					console.log(err)
				}))
				// this retrieves all of the films that the person has been in
				this.state.people.map(person => {
					person.films.map((film,i) => {
						axios.get(film)
						.then(data => {
							person.films[i] = data.data.title
							this.setState({people})
						}).catch(err => {
							console.log(err)
						})
					})
					axios.get(person.species)
					.then(data => {
						person.species = data.data.name
						this.setState({people})
					}).catch(err => {
						console.log(err)
					})
					person.vehicles.map((vehicle,i) => {
						axios.get(vehicle)
						.then(data => {
							console.log("ddddddddd",data.data.name)
							person.vehicles[i] = data.data.name
							this.setState({people})
						}).catch(err => {
							console.log(err)
						})
					})
					person.starships.map((starship,i) => {
						axios.get(starship)
						.then(data => {
							console.log(data.data);
							person.starships[i] = data.data.name
							this.setState({people})
						}).catch(err => {
							console.log(err);
						})
					})
				})

	  })}




		getHomeworld = () => {
			console.log(this.state)
		}

	render() {
		return (
			<div>
				<button onClick={this.getHomeworld}>Get People</button>
				<div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
					{
						this.state.people.map((person,i) => <Thumbnail key={i} person={person}></Thumbnail>)
					}
					<Planets />
				</div>
			</div>
		);
	}
}
// height: "172"
// mass: "77"
// hair_color: "blond"
// skin_color: "fair"
// eye_color: "blue"
// birth_year: "19BBY"
// gender: "male"
// homeworld: "https://swapi.co/api/planets/1/"
// films: (5) ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/", "https://swapi.co/api/films/7/"]
// species: ["https://swapi.co/api/species/1/"]
// vehicles: (2) ["https://swapi.co/api/vehicles/14/", "https://swapi.co/api/vehicles/30/"]
// starships: (2) ["https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/"]
// created: "2014-12-09T13:50:51.644000Z"
// edited: "2014-12-20T21:17:56.891000Z"
// url:

export default Home;
