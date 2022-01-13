import React from 'react';
import Loading from '../common/Loading';
import './pokemon-detail.css';

const PokemonDetail = ({poke, specie}) => {
    let code = poke.id; 
    let imgPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${code}.png`;
    return (
        <>
            <div className="imgReceta">
                <img src={imgPokemon} title={`Pokemon - ${poke.name}`} />
            </div>
            <div className="ingreReceta">
                <div className="titProducto">{poke.name}</div>
                <div className="descProduct">The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.</div>
                <div className="descProduct"><strong>Características:</strong></div>
                <div className="descProduct">{`Hábitat: ${specie.habitat.name}`}</div>
                <div className="descProduct">Genero:Fuego</div>
                <div className="descProduct">{`Altura: ${(poke.height)/10} M`}</div>
                <div className="descProduct">{`Peso: ${(poke.weight)/10} Kg`}</div>
                <div className="descProduct"><strong>Habilidad: </strong><br />
                    {
                        poke.abilities ?
                            (poke.abilities.map(({ability}, index) => (
                                <span key={index}>{`${ability.name},`}</span>
                            ))) : (<Loading/>)
                    }
                </div>
                <div className="descProduct"><strong>Tipo:</strong><br />
                    {
                        poke.types ?
                            (poke.types.map(({type}, index) => (
                                <span key={index}>{`${type.name},`}</span>
                            ))) : (<Loading/>)
                    }
                </div>
            </div>
        </>
    );
};

export default PokemonDetail;
