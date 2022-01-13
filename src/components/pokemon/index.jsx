import React, {Fragment, useContext} from 'react';
import {PokemonContext} from './../../contexts/PokemonContexts';
import Loading from '../common/Loading';

//importamos las imagenes
import treboluno from './../../assets/images/uno.png';
import treboldos from './../../assets/images/dos.png';
import randomside from './../../assets/images/random_side.png';
import culebrita from './../../assets/images/culebrita.png';
import PokemonList from './pokemon-list';
import TypeList from './type-list';

const PokemonsHome = () => {
    const {doneFetch, pokemon, types} = useContext(PokemonContext); //Se recibe los Props del Contexto

    return (
        <Fragment>
            <div className="top">
                <div id="proceso">
                    <div id="contenido_slider">
                        <div className="textoarriba"><img src={treboluno} className="subetrebol" /><span>RECETAS</span><img src={treboldos} className="subetrebol" /></div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="listaReceta">
                                <div className="title_receta">
                                    <h1>tipos</h1>
                                    <img className="separador_verde" src={culebrita} />
                                </div>
                                <ul>
                                    {
                                        doneFetch ?
                                        (types.length ? <TypeList tipo={types}></TypeList> : "No se encontró data")
                                        :
                                        <Loading></Loading>
                                    }
                                </ul>
                                <a href="/" className="linkrandom"><img className="imagen_random" src={randomside}></img></a>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="ingredientes">
                                <div className="title_receta">
                                    <div className="search_receta">
                                        <div className="big_title_receta">
                                            <h1>Productos</h1>
                                            <div className="franjita_title_inside"></div>
                                        </div>
                                    </div>
                                    <div className="contador">Se encontró {pokemon.length} resultados:</div>
                                    <div className="contentReceta">
                                        <ul>
                                            {
                                                doneFetch ?
                                                (pokemon.length ? <PokemonList data={pokemon}></PokemonList> : "No hay datos")
                                                :
                                                <Loading></Loading>
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default PokemonsHome;
