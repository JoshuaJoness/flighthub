import React from 'react'
import { Card, Accordion, AccordionSection } from 'react-rainbow-components';

class StarshipThumbnail extends React.Component {
	render () {
		return (
			<>
				<div>
					<Card style={{width:"300px", margin:"4%"}}>
						<Accordion> <b style={{marginRight:"3%"}}>{this.props.starship.name}</b>
							<AccordionSection>
							<div style={{display:"grid", gridTemplateColumns:"50% 50%", height:"600px"}}>
								<div style={{display:"grid", gridTemplateRows:"10% 10% 15% 10% 10% 10% 10% 10% 10%", padding:"3%"}}>
									<label><b>Model: </b>{this.props.starship.model}</label>
									<label><b>Manufacturer: </b>{this.props.starship.manufacturer}</label>
									<label><b>Cost in Credits: </b>{this.props.starship.cost_in_credits}</label>
									<label><b>Starship Length: </b>{this.props.starship.length}</label>
									<label><b>Max Atmosphering Speed: </b>{this.props.starship.max_atmosphering_speed}</label>
									<label><b>Crew: </b>{this.props.starship.crew}</label>
									<label><b>Passengers: </b>{this.props.starship.passengers}</label>
									<label><b>Cargo Capacity: </b> {this.props.starship.cargo_capacity}</label>
									<label><b>Consumables: </b> {this.props.starship.consumables}</label>
								</div>
								<div style={{display:"grid", gridTemplateRows:"10% 10% 10% 15% 25%", padding:"3%"}}>
									<label><b>Hyperdrive Rating: </b>{this.props.starship.hyperdrive_rating}</label>
									<label><b>MGLT: </b> {this.props.starship.MGLT}</label>
									<label><b>Starship Class: </b> {this.props.starship.starship_class}</label>
									<label><b>Pilots: </b>
										{
											this.props.starship.pilots.length ? this.props.starship.pilots.map(pilot => ` ${pilot}, `) : " n/a"
										}
									</label>
									<label><b>Films: </b>
										{
											this.props.starship.films.map(film => ` ${film}, `)
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

export default StarshipThumbnail
