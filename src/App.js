import React from 'react';
import './App.css';

class App extends React.Component {
	
	constructor() {
		super();
		this.state = {
			name: "",
			birthYear: "",
			height: "",
			gender: "",
			isLoading: false
		}
		this.changeCharacter = this.changeCharacter.bind(this);
	}

	componentDidMount() {
		this.setState(() => {return {isLoading: true}})
		var link = "https://swapi.dev/api/people/1";
		fetch(link)
			.then(response => response.json())
			.then(data => {
				this.setState(() => {
					return {
						isLoading: false,
						name: data.name,
						birthYear: data.birth_year,
						height: data.height,
						gender: data.gender
					}
				})
			})
	}

	changeCharacter() {
		this.setState(() => {return {isLoading: true}})
		var randInt = Math.floor(Math.random() * 84)
		var link = "https://swapi.dev/api/people/"+randInt;
		fetch(link)
			.then(response => response.json())
			.then(data => {
				this.setState(() => {
					return {
						isLoading: false,
						name: data.name,
						birthYear: data.birth_year,
						height: data.height,
						gender: data.gender
					}
				})
			})
	}

	render() {	
		var className= this.state.isLoading ? 'loading' : 'notLoading';

		return(
			<div className='body'>
				<div className="navbar">
					<p id="heading">Star Wars Character Cards </p>
				</div>

				<div className={className}>
					<div className="loadAnim">
						Loading...
					</div>
				</div>

				<div className="card">
					<p id="name" className="cardDetails">
						<span className="cardDetailHeading">Name:</span> {this.state.name}
					</p>
					<p className="cardDetails">
						<span className="cardDetailHeading">Birth Year:</span> {this.state.birthYear}
					</p>
					<p id="age" className="cardDetails">
						<span className="cardDetailHeading">Height:</span> {this.state.height}
					</p>
					<p id="description" className="cardDetails">
						<span className="cardDetailHeading">Gender:</span> {this.state.gender}
					</p>
				</div>
				
				<div className="button">
					<button id="button" onClick={this.changeCharacter}>
						Change Avatar
					</button>
				</div>

		</div>
		)
	}
}

export default App;