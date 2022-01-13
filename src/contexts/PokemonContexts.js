import React, {createContext, useState, useEffect} from 'react';
import {listPokemon, typePokemon} from './../constants';

export const PokemonContext = createContext();

const PokemonContextProvider = ({children}) =>{
    const [doneFetch, setDoneFetch] = useState(false);
    const [pokemon, setPokemon] = useState([]);
    const [types, setTypes]     = useState([]);
    const [loader, setLoader]   = useState(true);
    const [error, setError]     = useState(false);

    useEffect(() => {
        getListPokemon();
        getTypePokemon();    
    }, []);

    //let listapokemon = base_url + "pokemon";
    const getListPokemon = () => {
        fetch(listPokemon())
            .then(res => res.json())
            .then(data => {
                setDoneFetch(true);
                setPokemon(data.results);
                setLoader(false);
                setError(false);
                //console.log(data.results);
            })
            .catch(error => {
                setLoader(true);
                setError(true);
                console.log(error);
            });
    };

    //let typepokemon = base_url + "type";
    const getTypePokemon = () => {
        fetch(typePokemon())
            .then(res => res.json())
            .then(data => {
                setDoneFetch(true);
                setTypes(data.results);
                setLoader(false);
                setError(false);
                //console.log(data.results);
            })
            .catch(error => {
                setLoader(true);
                setError(true);
                console.log(error);  
            });
    };

    return(
        <PokemonContext.Provider value={{ doneFetch, pokemon, types }}>
            {children}
        </PokemonContext.Provider>
    );

};

export default PokemonContextProvider;