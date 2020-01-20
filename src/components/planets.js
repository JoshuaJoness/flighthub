import React from 'react';
import axios from 'axios'
import PlanetThumbnail from './PlanetThumbnail'
import { Card, Accordion, AccordionSection, Input, Modal } from 'react-rainbow-components';

class Planets extends React.Component {
	state = {
		planets: [],
		planetsTwo: [],
		planetsThree:[],
		planetsFour: [],
		planetsFive: [],
		planetsSix: [],
		planetsSeven: [],
		planetsTotal: []
	}

	componentWillMount() {

		axios.get(`${process.env.REACT_APP_API}/planets`)
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

									let planetsTotal = this.state.planets.concat(this.state.planetsTwo).concat(this.state.planetsThree).concat(this.state.planetsFour).concat(this.state.planetsFive).concat(this.state.planetsSix).concat(this.state.planetsSeven)
									this.setState({planetsTotal})

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

	render() {
		return (
			<div>
				<center id="planets">
					<Card style={{width: "85%", marginTop:"5%"}}>
						{
							this.state.planetsTotal.length == 61 ?
							<Accordion><center><b style={{fontSize:"30px"}}>Click arrow to show/hide planets</b></center>
								<AccordionSection>
									<div style={{display:"flex", flexWrap:"wrap", marginRight:"3%"}}>
										{
											this.state.planetsTotal.map((planet,i) => <PlanetThumbnail planet={planet} key={i}> </PlanetThumbnail>)
										}
									</div>
								</AccordionSection>
							</Accordion>
							:
							<Accordion><center><b style={{fontSize:"30px"}}>Click arrow to show/hide planets</b></center>
								<AccordionSection>
									<i class="fas fa-spinner fa-pulse"></i> Sorry still loading...
								</AccordionSection>
							</Accordion>
						}
					</Card>
				</center>
			</div>
		);
	}
}

export default Planets;
