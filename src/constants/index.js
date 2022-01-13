const cors_anywhere = "https://cors-anywhere.herokuapp.com/";
const base_url      = "https://pokeapi.co/api/v2/";
const pokemon_get   = "pokemon";
const pokemon_type  = "type";
const pokemon_specie= "pokemon-species/";

export const listPokemon = () => `${base_url}${pokemon_get}`;
export const typePokemon = () => `${base_url}${pokemon_type}`;
export const detailGet   = (pokemon_id) => `${base_url}${pokemon_get}/${pokemon_id}`;
export const speciesGet  = (pokemon_id) => `${base_url}${pokemon_specie}${pokemon_id}`;