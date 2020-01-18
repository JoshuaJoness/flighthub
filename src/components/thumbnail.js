import React from 'react'
import { Box } from "@chakra-ui/core";
import axios from 'axios'

class Thumbnail extends React.Component {
	componentWillMount () {
		// this.props.person.films.map(film => {
		// 	axios.get(film)
		// 	.then(data => {
		// 		film = data.data.title
		// 	})
		// })
		// console.log('look here',this.props.person.films)
	}

	render () {
		return (
			<>
				<div>
					<Box style={{border:"1px solid black", width:"400px", height:"800px", margin:"4%"}}>

						<div style={{display:"grid", gridTemplateRows:"15% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 20% 12.5% 12.5% 12.5%", padding:"10%"}}>
							<b style={{textAlign:"center"}}>{this.props.person.name}</b>
							<label>Height: {this.props.person.height}</label>
							<label>Mass: {this.props.person.mass}</label>
							<label>Hair Colour: {this.props.person.hair_color}</label>
							<label>Skin Colour: {this.props.person.skin_color}</label>
							<label>Eye Colour: {this.props.person.eye_color}</label>
							<label>Birth Year: {this.props.person.birth_year}</label>
							<label>Gender: {this.props.person.gender}</label>
							<label>Homeworld: {this.props.person.homeworld}</label>
							<label>Films:
								{
									this.props.person.films.map(film => ` ${film}, `)
								}
							</label>
							<label>Species: {this.props.person.species}</label>
							<label>Vehicles:
								{
									this.props.person.vehicles.length ? this.props.person.vehicles.map(vehicle => ` ${vehicle}, `) : " n/a"
								}
							</label>
							<label>Starships:
								{
									this.props.person.starships.length ? this.props.person.starships.map(starship => ` ${starship}, `) : " n/a"
								}
							</label>
						</div>
					</Box>
				</div>
			</>
		)
	}
}

export default Thumbnail
