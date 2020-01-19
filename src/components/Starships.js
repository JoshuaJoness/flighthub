import React from 'react';
import axios from 'axios'
import Thumbnail from './Thumbnail'

class Starships extends React.Component {
	state = {
		starships: [],
		starshipsTwo: [],
		starshipsThree:[],
		starshipsFour: []
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
				<button onClick={()=>this.getHomeworld(this.state.peopleTwo)}>Get People</button>
				<div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>

				</div>

			</div>
		);
	}
}

export default Starships;
