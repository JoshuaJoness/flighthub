import React from 'react';
import axios from 'axios'
import Thumbnail from './Thumbnail'

class Planets extends React.Component {
	state = {
		planets: [],
		planetsTwo: [],
		planetsThree:[],
		planetsFour: [],
		planetsFive: [],
		planetsSix: [],
		planetsSeven: []
	}

	getAllInfo = () => {
			console.log("hi")
	}

	componentWillMount() {

		axios.get('http://localhost:4000/planets')
	  .then(data => {
			let planets = data.data.results
			this.setState({planets})

			axios.get(data.data.next)
			.then(data => {
				let planetsTwo = data.data.results
				this.setState({planetsTwo})
				getAllInfo(this.state.planetsTwo)

				axios.get(data.data.next)
				.then(data => {
					let planetsThree = data.data.results
					this.setState({planetsThree})
					getAllInfo(this.state.planetsThree)

					axios.get(data.data.next)
					.then(data => {
						let planetsFour = data.data.results
						this.setState({planetsFour})
						getAllInfo(this.state.planetsFour)

						axios.get(data.data.next)
						.then(data => {
							let planetsFive = data.data.results
							this.setState({planetsFive})
							getAllInfo(this.state.planetsFive)

							axios.get(data.data.next)
							.then(data => {
								let planetsSix = data.data.results
								this.setState({planetsSix})
								getAllInfo(this.state.planetsSix)

								axios.get(data.data.next)
								.then(data => {
									let planetsSeven = data.data.results
									this.setState({planetsSeven})
									getAllInfo(this.state.planetsSeven)

								})
							})
						})
					})
				})
			})


			let getAllInfo = (arr) => {

				arr.map((planet,i) => {
					planet.residents.map((resident,i) => {
						axios.get(resident)
						.then(data => {
							planet.residents[i] = data.data.name
							this.setState({arr})
						}).catch(err => {
							console.log(err)
						})
					})
					planet.films.map((film,i) => {
						axios.get(film)
						.then(data => {
							planet.films[i] = data.data.title
							this.setState({arr})
						})
					})

				})
			}

				getAllInfo(this.state.planets)

	  })
	}




		getHomeworld = (arr) => {

			console.log(this.state)
		}

	render() {
		return (
			<div>
				<button onClick={()=>this.getHomeworld(this.state.peopleTwo)}>Get People</button>
				<div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>

				</div>

			</div>
		);
	}
}

export default Planets;
