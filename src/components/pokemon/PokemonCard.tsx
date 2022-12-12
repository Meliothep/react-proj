import React, { Component, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pokemon } from './Pokemon';
import { Species } from './Species';
import PokemonService from '../../services/PokemonService';

export type PokemonCardProps = {
  id : number
  liked : boolean
}
const PokemonCard = (props : PokemonCardProps) => {

  
  const [pokemon, setPokemon] = useState<Pokemon>()
  const [species, setSpecies] = useState<Species>()

  useEffect(() => {
    PokemonService.getPokemon(props.id).then(res => {
      PokemonService.getSpecies(res.species.url).then(res => {
        setSpecies(res)
      })
      setPokemon(res)
    })
  })
  
  if(pokemon && species && species.flavor_text_entries){
    return (
      <div>
        <div className={props.liked ? "card flex-row liked" : "card flex-row"}>
          <img className="card-img-left" src={pokemon.sprites.front_default}/>
          <div className="card-body">
            <h4 className="card-title h5 h4-sm">{pokemon.name}</h4>
            <p className="card-text">{species.flavor_text_entries[0].flavor_text}</p>
          </div>
        </div>
      </div>    
    )
  }else{
    return (
      <div>
        <div className="card flex-row">
          <img className="card-img-left" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"}/>
          <div className="card-body">
            <h4 className="card-title h5 h4-sm">{"Loading ..."}</h4>
            <p className="card-text">{"undescriptible legend"}</p>
          </div>
        </div>
      </div>    
    )
  }
}

export default PokemonCard
 