import React from 'react';
import axios from 'axios'
import Slider from "react-slick"
import PeopleThumbnail from './PeopleThumbnail'
import { Card, Accordion, AccordionSection, Input, Modal } from 'react-rainbow-components';

class People extends React.Component {
	state = {
		search: "",
		people: [],
		peopleTwo: [],
		peopleThree:[],
		peopleFour: [],
		peopleFive: [],
		peopleSix: [],
		peopleSeven: [],
		peopleEight: [],
		peopleNine: [],
		peopleTotal: []
	}
// multiple requests in this manner so that I could populate the nested arrays
	componentWillMount() {
		axios.get(`${process.env.REACT_APP_API}/people`)
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

											let peopleTotal = this.state.people.concat(this.state.peopleTwo).concat(this.state.peopleThree).concat(this.state.peopleFour).concat(this.state.peopleFive).concat(this.state.peopleSix).concat(this.state.peopleSeven).concat(this.state.peopleEight).concat(this.state.peopleNine)
											this.setState({peopleTotal})
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

		searchPersonByName = (e) => {
			if (this.state.peopleTotal.length == 87) {
				let id = 0
				let filteredPerson = this.state.peopleTotal.filter(person => person.name.includes(e.target.value) || person.name.toLowerCase().includes(e.target.value))
				console.log(filteredPerson[0].name)

				this.state.peopleTotal.forEach((person,i) => {
					if (filteredPerson[0].name == person.name) {
						id = i + 1
						return id
					}
				})

				axios.get(`http://localhost:4000/person/${id}`)
					.then(data => {
						console.log(data.data.name)
						let name = data.data.name
						let filteredPerson = this.state.peopleTotal.filter(person => person.name == name)
						this.setState({filteredPerson})
					})
			}
			else {
				alert("Please wait, still loading data")
			}
		}

	render() {
		return (
			<>
				<center id="people">
					<Card style={{width: "85%", marginTop:"5%", marginBottom:"5%"}}>
						{
							this.state.peopleTotal.length == 87 ?
							<Accordion><center><b style={{fontSize:"30px"}}>Click arrow to show/hide people</b></center>
								<AccordionSection>
									<div style={{display:"flex", flexWrap:"wrap", marginRight:"3%"}}>
										{
											this.state.peopleTotal.map((person,i) => <PeopleThumbnail person={person} key={i}> </PeopleThumbnail>)
										}
									</div>
								</AccordionSection>
							</Accordion>
							:
							<Accordion><center><b style={{fontSize:"30px"}}>Click arrow to show/hide people</b></center>
								<AccordionSection>
									<i class="fas fa-spinner fa-pulse"></i> Sorry still loading...
								</AccordionSection>
							</Accordion>
						}
					</Card>

					<b style={{fontSize:"30px", marginTop:"5%"}}>Search for people below:</b>
					<Input id="search" onChange={this.searchPersonByName} placeholder="Enter a name to search for a person" style={{width: "85%", marginTop:"5%"}}/>
					{
						this.state.filteredPerson ?
							this.state.filteredPerson.map(person => <Card style={{width:"450px", marginTop:"5%"}}>
								<Accordion> <b style={{padding:"3%"}}>{person.name}</b>
									<AccordionSection>
									<div style={{display:"grid", gridTemplateColumns:"50% 50%"}}>
									<div style={{display:"grid", gridTemplateRows:"15% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%", padding:"10%", marginRight:"3%", height:"800px"}}>
										<label>Height: {person.height}</label>
										<label>Mass: {person.mass}</label>
										<label>Hair Colour: {person.hair_color}</label>
										<label>Skin Colour: {person.skin_color}</label>
										<label>Eye Colour: {person.eye_color}</label>
										<label>Birth Year: {person.birth_year}</label>
										<label>Gender: {person.gender}</label>
										<label>Homeworld: {person.homeworld}</label>
									</div>
									<div style={{display:"grid", gridTemplateRows:"15% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%", padding:"10%", marginRight:"3%", height:"800px"}}>
										<label>Films:
											{
												person.films.map(film => ` ${film}, `)
											}
										</label>
										<label>Species: {person.species}</label>
										<label>Vehicles:
											{
												person.vehicles.length ? person.vehicles.map(vehicle => ` ${vehicle}, `) : " n/a"
											}
										</label>
										<label>Starships:
											{
												person.starships.length ? person.starships.map(starship => ` ${starship}, `) : " n/a"
											}
										</label>
									</div>
									</div>
									</AccordionSection>
								</Accordion>
							</Card>)
						:
						<i style={{marginTop:"5%"}} class="fas fa-search"></i>
					}
				</center>
			</>
		);
	}
}

export default People;
