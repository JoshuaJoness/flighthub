import React from 'react'
import { Card, Accordion, AccordionSection } from 'react-rainbow-components';

class PlanetThumbnail extends React.Component {
	render () {
		return (
			<>
				<div style={{display:"flex", flexWrap:"wrap"}}>
					<Card style={{width:"450px", margin:"4%"}}>
						<Accordion> <b style={{marginRight:"3%"}}>{this.props.planet.name}</b>
							<AccordionSection>
							<div style={{display:"grid", gridTemplateColumns:"50% 50%", height:"600px"}}>
								<div style={{display:"grid", gridTemplateRows:"10% 10% 15% 10% 10% 10% 10% 10%", padding:"3%"}}>
									<label><b>Rotation Period: </b>{this.props.planet.rotation_period}</label>
									<label><b>Orbital Period: </b>{this.props.planet.orbital_period}</label>
									<label><b>Diameter: </b>{this.props.planet.diameter}</label>
									<label><b>Climate: </b>{this.props.planet.climate}</label>
									<label><b>Gravity: </b>{this.props.planet.gravity}</label>
									<label><b>Terrain: </b>{this.props.planet.terrain}</label>
									<label><b>Surface Water: </b>{this.props.planet.surface_water}</label>
									<label><b>Population: </b> {this.props.planet.population}</label>
								</div>
								<div style={{display:"grid", gridTemplateRows:"15% 25%", padding:"3%"}}>
									<label><b>Residents: </b>
										{
											this.props.planet.residents.length ? this.props.planet.residents.map(resident => ` ${resident}, `) : " n/a"
										}
									</label>
									<label><b>Films: </b>
										{
											this.props.planet.films.map(film => ` ${film}, `)
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

export default PlanetThumbnail
