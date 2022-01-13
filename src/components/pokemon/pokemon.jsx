import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './pokemon.css';

const Pokemon = ({url, name}) => {
    let code, img;
    let parte = url.substr(-3,2);
    if(parte.includes('/')){
        code = parte.replace("/","");
    }else{
        code = parte;
    }
    //console.log('id:',code);
    img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + code + ".png";

    return(
        <Fragment>
            <li className="contentProduct">
                <Link to={`/pokemon/${code}`}>
                    <div className="imgproducto"> 
                        <img src={img} alt={`Pokemon - ${name}`} title={`Pokemon - ${name}`} />
                    </div>
                    <div className="nomproducto">{name}</div>
                    <div className="preproducto">S/.120.00</div>
                </Link>    
            </li>
        </Fragment>
    );
};

export default Pokemon;
