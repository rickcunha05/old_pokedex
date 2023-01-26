import React, { Component } from 'react'
import axios from 'axios'

export class pokemon extends Component {
    state ={
        name:'',
        pokemonIndex:'',
        imageUrl:'',
    };
    async componentDidMount () {
        const {pokemonIndex} = this.props.match.params;

        //URL INFORMAÇÕES DE POKEMON
        const pokemonUrl = `https://pokeapi.co/docs/v2/pokemon/${pokemonIndex}`
        const pokemonTypeUrl = `https://pokeapi.co/docs/v2/pokemon-species/${pokemonIndex}`

        //Get pokemon information
        const pokemonRes = await axios.get(pokemonUrl)
        const name = pokemonRes.data.name
        this.setState({name})
      }
  render() {
    return (
      <div>M<h1>{this.state.name}</h1></div>
    )
  }
}

export default pokemon