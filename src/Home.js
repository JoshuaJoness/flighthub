import React from 'react';
import axios from 'axios'
import Thumbnail from './components/Thumbnail'
import Planets from './components/Planets'
import Starships from './components/Starships'

class Home extends React.Component {
	state = {
		url: "",
		people: [],
		peopleTwo: [],
		peopleThree:[],
		peopleFour: [],
		peopleFive: [],
		peopleSix: [],
		peopleSeven: [],
		peopleEight: [],
		peopleNine: []
	}

	getAllInfo = () => {
			console.log("hi")
	}

	componentWillMount() {

		axios.get('http://localhost:4000/people')
	  .then(data => {
			let people = data.data.results
			this.setState({people})

			axios.get(data.data.next)
			.then(data => {
				let peopleTwo = data.data.results
				this.setState({peopleTwo})
				getAllInfo(this.state.peopleTwo)

				axios.get(data.data.next)
				.then(data => {
					let peopleThree = data.data.results
					this.setState({peopleThree})
					getAllInfo(this.state.peopleThree)

					axios.get(data.data.next)
					.then(data => {
						let peopleFour = data.data.results
						this.setState({peopleFour})
						getAllInfo(this.state.peopleFour)

						axios.get(data.data.next)
						.then(data => {
							let peopleFive = data.data.results
							this.setState({peopleFive})
							getAllInfo(this.state.peopleFive)

							axios.get(data.data.next)
							.then(data => {
								let peopleSix = data.data.results
								this.setState({peopleSix})
								getAllInfo(this.state.peopleSix)

								axios.get(data.data.next)
								.then(data => {
									let peopleSeven = data.data.results
									this.setState({peopleSeven})
									getAllInfo(this.state.peopleSeven)

									axios.get(data.data.next)
									.then(data => {
										let peopleEight = data.data.results
										this.setState({peopleEight})
										getAllInfo(this.state.peopleEight)

										axios.get(data.data.next)
										.then(data => {
											let peopleNine = data.data.results
											this.setState({peopleNine})
											getAllInfo(this.state.peopleNine)

										})
									})
								})
							})
						})
					})
				})
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

	  })
	}




		getHomeworld = (arr) => {
			let kk = this.state.people.concat(this.state.peopleTwo).concat(this.state.peopleThree).concat(this.state.peopleFour).concat(this.state.peopleFive).concat(this.state.peopleSix).concat(this.state.peopleSeven).concat(this.state.peopleEight).concat(this.state.peopleNine)
			console.log(kk)
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
				<Starships />

			</div>
		);
	}
}

export default Home;
