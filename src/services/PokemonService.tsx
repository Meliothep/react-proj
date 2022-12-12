import { Pokemon } from "../components/pokemon/Pokemon";
import { Species } from "../components/pokemon/Species";

export default class PokemonService{
    public static async getPokemon(id: number) {
        const response : Pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/` + id, {
            method: 'GET',
          }).then(res => res.json()).then(res=>{
            return res as Pokemon
          })
        return response;
    }

    public static async getSpecies(url : string) {
      const response : Species = await fetch(url, {
          method: 'GET',
        }).then(res => res.json()).then(res=>{
          return res as Species
        })
      return response;
  }
}
