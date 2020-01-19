import React from 'react';
import axios from 'axios'
import StarshipThumbnail from './StarshipThumbnail'
import { Card, Accordion, AccordionSection, Input, Modal } from 'react-rainbow-components';

class Starships extends React.Component {
	state = {
		starships: [],
		starshipsTwo: [],
		starshipsThree:[],
		starshipsFour: [],
		starshipsTotal: []
	}

	componentWillMount() {

		axios.get('http://localhost:4000/starships')
	  .then(data => {
			let starships = data.data.results
			this.setState({starships})

			axios.get(data.data.next)
			.then(data => {
				let starshipsTwo = data.data.results
				this.setState({starshipsTwo})
				getAllInfo(this.state.starshipsTwo)

				axios.get(data.data.next)
				.then(data => {
					let starshipsThree = data.data.results
					this.setState({starshipsThree})
					getAllInfo(this.state.starshipsThree)

					axios.get(data.data.next)
					.then(data => {
						let starshipsFour = data.data.results
						this.setState({starshipsFour})
						getAllInfo(this.state.starshipsFour)

						let starshipsTotal = this.state.starships.concat(this.state.starshipsTwo).concat(this.state.starshipsThree).concat(this.state.starshipsFour)
						this.setState({starshipsTotal})

					})
				})
			})


			let getAllInfo = (arr) => {

				arr.map((starship,i) => {
					starship.pilots.map((pilot,i) => {
						axios.get(pilot)
						.then(data => {
							starship.pilots[i] = data.data.name
							this.setState({arr})
						}).catch(err => {
							console.log(err)
						})
					})
					starship.films.map((film,i) => {
						axios.get(film)
						.then(data => {
							starship.films[i] = data.data.title
							this.setState({arr})
						})
					})

				})
			}

				getAllInfo(this.state.starships)

	  })
	}




		getHomeworld = (arr) => {

			console.log(this.state)
		}

	render() {
		return (
			<div>
				<center id="starships">
					<Card style={{width: "85%", marginTop:"5%"}}>
						{
							this.state.starshipsTotal.length == 37 ?
							<Accordion><center><b style={{fontSize:"30px"}}>Click arrow to show/hide starships</b></center>
								<AccordionSection>
									<div style={{display:"flex", flexWrap:"wrap", marginRight:"3%"}}>
										{
											this.state.starshipsTotal.map((starship,i) => <StarshipThumbnail starship={starship} key={i}> </StarshipThumbnail>)
										}
									</div>
								</AccordionSection>
							</Accordion>
							:
							<Accordion><center><b style={{fontSize:"30px"}}>Click arrow to show/hide starships</b></center>
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

export default Starships;
