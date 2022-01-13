import React, {useContext} from 'react';
import { PokemonDetailContext } from './../../contexts/PokemonDetailContext';
//import {PokemonContext} from './../../contexts/PokemonContexts';  //-- No se puede usar
import Loading from '../common/Loading';
import PokemonDetail from './pokemon-detail';
import TypeList from './../pokemon/type-list';                    
//Se llama a las imagenes
import treboluno from './../../assets/images/uno.png';
import treboldos from './../../assets/images/dos.png';
import randomside from './../../assets/images/random_side.png';
import culebrita from './../../assets/images/culebrita.png';

const Pokemon = () => {
    const { doneFetchType, doneFetchPoke, doneFetch, types, pokemon, especie } = useContext(PokemonDetailContext);
    //const {types}                                        = useContext(PokemonContext);  //-- No se puede usar
    return (
        <div className="top">
             <div id="proceso">
                <div id="contenido_slider">
                    <div className="textoarriba">
                        <img src={treboluno} className="subetrebol" /><span>NUESTROS PRODUCTOS</span><img src={treboldos} className="subetrebol" />
                    </div>
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
                                    doneFetchType ?
                                    (types.length ? <TypeList tipo={types}></TypeList> : "No se encontró data")
                                        :
                                    (<Loading/>)
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
                                        <h1>Detalle del producto</h1>
                                        <div className="franjita_title_inside"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="contentReceta">
                            {
                                doneFetchPoke && doneFetch ?
                                    (<PokemonDetail poke={pokemon} specie={especie} />)
                                :
                                    (<Loading/>)
                            }
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default Pokemon;