import React from 'react';
import axios from 'axios'

class Planets extends React.Component {
	state = {
		planets: []
	}

	componentWillMount() {
		// this is the initial request to retrieve all of the people from the API
		axios.get('http://localhost:4000/planets')
	  .then(data => {
			console.log(data)
		})}


	render() {
		return (
			<div>
				hi
			</div>
		);
	}
}

export default Planets;
