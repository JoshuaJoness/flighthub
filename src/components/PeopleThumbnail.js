import React from 'react'
import { Card, Accordion, AccordionSection } from 'react-rainbow-components';

class PeopleThumbnail extends React.Component {
	render() {
		return (
			<>
				<div style={{display:"flex", flexWrap:"wrap"}}>
					<Card style={{width:"450px", margin:"4%"}}>
						<Accordion> <b style={{marginRight:"3%"}}>{this.props.person.name}</b>
							<AccordionSection>
							<div style={{display:"grid", gridTemplateColumns:"50% 50%", height:"600px"}}>
								<div style={{display:"grid", gridTemplateRows:"10% 10% 15% 10% 10% 10% 10% 10%", padding:"3%"}}>
									<label><b>Height: </b>{this.props.person.height}</label>
									<label><b>Mass: </b>{this.props.person.mass}</label>
									<label><b>Hair Colour: </b>{this.props.person.hair_color}</label>
									<label><b>Skin Colour: </b>{this.props.person.skin_color}</label>
									<label><b>Eye Colour: </b>{this.props.person.eye_color}</label>
									<label><b>Birth Year: </b>{this.props.person.birth_year}</label>
									<label><b>Gender: </b>{this.props.person.gender}</label>
									<label><b>Homeworld: </b> {this.props.person.homeworld}</label>
								</div>
								<div style={{display:"grid", gridTemplateRows:"10% 15% 10% 25%", padding:"3%"}}>
									<label><b>Species: </b> {this.props.person.species}</label>
									<label><b>Vehicles: </b>
										{
											this.props.person.vehicles.length ? this.props.person.vehicles.map(vehicle => ` ${vehicle}, `) : " n/a"
										}
									</label>
									<label><b>Starships: </b>
										{
											this.props.person.starships.length ? this.props.person.starships.map(starship => ` ${starship}, `) : " n/a"
										}
									</label>
									<label><b>Films: </b>
										{
											this.props.person.films.map(film => ` ${film}, `)
										}
									</label>
								</div>
								</div>
							</AccordionSection>
						</Accordion>
					</Card>
				</div>
			</>
		)
	}
}

export default PeopleThumbnail
