import React from 'react';
import axios from 'axios'
import Thumbnail from './components/thumbnail'
import Planets from './components/planets'

class Home extends React.Component {
	state = {
		people: [],
		peopleTwo: []
	}

	getAllInfo = () => {
			console.log("hi")
	}

	componentWillMount() {
		// this is the initial request to retrieve all of the people from the API
		axios.get('http://localhost:4000/people')
	  .then(data => {
			// this console log is to test and ensure that I am receiving the correct data
			let people = data.data.results
			this.setState({people})
			axios.get(data.data.next)
			.then(data => {
				let peopleTwo = data.data.results
				this.setState({peopleTwo})
				getAllInfo(this.state.peopleTwo)
			}).catch(err => {
				console.log(err)
			})

			let getAllInfo = (arr) => {
				arr.map(person => {
					axios.get(person.homeworld)
					.then(data => {
						person.homeworld = data.data.name
						this.setState({arr})
					})
					.catch(err => {
						console.log(err)
					})
					person.films.map((film,i) => {
						axios.get(film)
						.then(data => {
							person.films[i] = data.data.title
							this.setState({arr})
						}).catch(err => {
							console.log(err)
						})
					})
					axios.get(person.species)
					.then(data => {
						person.species = data.data.name
						this.setState({arr})
					}).catch(err => {
						console.log(err)
					})
					person.vehicles.map((vehicle,i) => {
						axios.get(vehicle)
						.then(data => {
							person.vehicles[i] = data.data.name
							this.setState({arr})
						}).catch(err => {
							console.log(err)
						})
					})
					person.starships.map((starship,i) => {
						axios.get(starship)
						.then(data => {
							person.starships[i] = data.data.name
							this.setState({arr})
						}).catch(err => {
							console.log(err);
						})
					})
				})
				}

				getAllInfo(this.state.people)

				getAllInfo(this.state.peopleTwo)



		// this retrieves all of the infromation in then nested arrays



	  })}




		getHomeworld = (arr) => {
			console.log(this.state)
			arr.map(person => {console.log("hi")})
		}

	render() {
		return (
			<div>
				<button onClick={()=>this.getHomeworld(this.state.peopleTwo)}>Get People</button>
				<div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
					{
						this.state.people.map((person,i) => <Thumbnail key={i} person={person}></Thumbnail>)
					}
					{
						this.state.peopleTwo.map((person,i) => <Thumbnail key={i} person={person}></Thumbnail>)
					}
				</div>
				<Planets />
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
