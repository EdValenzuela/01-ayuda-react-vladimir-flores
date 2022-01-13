import React, {Fragment} from 'react';
import Pokemon from './pokemon';

const PokemonList = ({data}) => (
    <Fragment>
        {
            data.map((xy, index) => (
                <Pokemon key={index} url={xy.url} name={xy.name}></Pokemon>  
            ))
        }
    </Fragment>
);

export default PokemonList;