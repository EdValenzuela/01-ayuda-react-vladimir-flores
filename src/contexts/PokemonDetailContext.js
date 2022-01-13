import React, {createContext, useState, useEffect} from 'react';
import {detailGet, speciesGet, typePokemon} from './../constants';

export const PokemonDetailContext = createContext();

const PokemonDetailContextProvider = ({children}) => {
    const pokemon_code = window.location.pathname.split("/")[2];  //Se obtiene el codigo
    const [doneFetchType, setDoneFetchType] = useState(false);
    const [doneFetchPoke, setDoneFetchPoke] = useState(false);
    const [doneFetch, setDoneFetch]         = useState(false);
    const [types, setTypes]     = useState([]);
    const [pokemon, setPokemon] = useState([]);
    const [especie, setEspecie] = useState([]);

    useEffect(() => {
        getTypoPokemon();
    }, []);

    /* useEffect(() => {
        getTypoPokemon();
        getDetailPokemon(pokemon_code);
        getSpeciePokemon(pokemon_code);
    }, [pokemon_code]); */

    useEffect(() => {
        const multipleAwait = async() => {
            try {
                
                const resp = await Promise.all([
                    getDetailPokemon(pokemon_code),
                    getSpeciePokemon(pokemon_code)
                ]);
                return resp;
            } catch (error) {
                console.log(error);
            }
        } 
        multipleAwait();
        return () => {
            setPokemon([]);
            setEspecie([]);
        }
    }, [pokemon_code]);

    /* const getDetailPokemon = (pokemon_code) => {
        fetch(detailGet(pokemon_code))
            .then(res => res.json())
            .then(data => {
                setDoneFetchPoke(true);
                setPokemon(data);
                //console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
    }; */

    const getDetailPokemon = async pokemon_code => {
        try {
            const resp = await fetch(detailGet(pokemon_code));
            const data = await resp.json();
            setPokemon(data);
            setDoneFetchPoke(true);
        } catch (error) {
            console.log(error);
        }
    };

    const getSpeciePokemon = (pokemon_code) => {
        fetch(speciesGet(pokemon_code))
            .then(res => res.json())
            .then(data => {
                setEspecie(data);
                setDoneFetch(true);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const getTypoPokemon = () => {
        fetch(typePokemon())
            .then(res => res.json())
            .then(data => {
                setDoneFetchType(true);
                setTypes(data.results);
                //console.log(data.results);
            }).catch(error => {
                console.log(error);
            });
    };
    
    return (
        <PokemonDetailContext.Provider value={{doneFetchType, doneFetchPoke, doneFetch, types, pokemon, especie}}>
            {children}
        </PokemonDetailContext.Provider>
    );
};

export default PokemonDetailContextProvider;