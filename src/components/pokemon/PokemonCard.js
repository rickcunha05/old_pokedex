import React, { Component } from "react";
import styled from "styled-components";
import spinner from "../pokemon/spinner.gif";
import { Link } from "react-router-dom";

const Sprite = styled.img`
	width: 5em;
	height: 5em;
	display: none;
	&:hover {
		transform: translate(-16px, -42px) scale(2.5);
	}
`;
const StyledLink = styled(Link)`
	text-decoration: none;	
	font-style: italic;
	color: black;
	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;
const Card = styled.div`
	//margin-top: 60px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	&:hover {
		transform: translate(-16px, -42px) scale(1.3);
	}
	-moz-user-select: none;
	-website-user-select: none;
	user-select: none;
	-o-user-select: none; ;
`;

export default class PokemonCard extends Component {
	state = {
		name: "",
		imageUrl: "",
		pokemonIndex: "",
		imageLoading: true,
		toManyRequests: false,
	};
	componentDidMount() {
		const { name, url } = this.props;
		const pokemonIndex = url.split("/")[url.split("/").length - 2];
		//const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
		const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIndex}.png?raw=true`; // ate oficial da pokemon companny
		//const imageUrl = `https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon/${pokemonIndex}.png; não recomendado a utilização pois pode da problema com o número de requisições ao github
		this.setState({
			name,
			imageUrl,
			pokemonIndex,
		});
	}

	render() {
		return (
			<div className='col-md-3 col-sm-6 mb-5'>
				<StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
					<Card className='card'>
						<h5 className='card-header'> {this.state.pokemonIndex} </h5>
						{this.state.imageLoading ? (
							<img
								src={spinner}
								style={{ width: "5em", height: "5pm" }}
								className='card-img-top rounded mx-auto d-block mt-2'
								alt='Pokemon'
							></img>
						) : null}

						<Sprite
							className='card-img-top rounnnnnded mx-auto mt-2'
							src={this.state.imageUrl}
							onLoad={() => this.setState({ imageLoading: false })}
							onError={() => this.setState({ toManyRequests: true })}
							style={
								this.state.toManyRequests
									? { display: "none" }
									: this.state.imageLoading
									? null
									: { display: "block" }
							}
						/>

						{this.state.toManyRequests ? (
							<h6 className='mx-auto'>
								<span className='badge badge-danger mt-2'>
									{" "}
									To many Request
								</span>
							</h6>
						) : null}
						<div className='card-body mx-auto'>
							{" "}
							<h6 className='card-title'>
								{this.state.name
									.toLowerCase()
									.split("")
									.map(
										(letter) =>
											letter.charAt(0).toUpperCase() + letter.substring(1)
									)
									.join("")}
							</h6>
						</div>
					</Card>
				</StyledLink>
			</div>
		);
	}
}
