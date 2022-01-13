import React from 'react';
import {Link} from 'react-router-dom';
import logorio from './../../assets/images/logo.jpg';

import './home.css';

const Home = () => {
    return (
        <div id="contenido_detalle">
            <div className="item_descripcion">
                <img src={logorio} alt="Rio Magdalena" />
                <p>
			    Rio Magdalena S.A.C. es una Empresa peruana,  Productora y comercializadora de Aceite de Oliva, Vinagres y Vinagretas, nació en el 2004 para competir en el mercado nacional, Su Marca “Huerto Alamein” lleva más de 30 años posesionada en los principales supermercados del País.
			    </p>
			    <p>
                    <Link to="/">
                        <div className="cntvermas">
                            <div className="btnvermas">LEER MÁS</div>
                        </div>
                    </Link>
			    </p>
            </div>
            <div className="item_descripcion">
                <div className="beneficio">Beneficios del <br />Aceite de Oliva</div>
                <ul>
                        <li>- Disminuye el riesgo de sufrir ataques cardíacos, infartos de miocardio y trombosis arteriales.</li>
                        <li>- Favorece el crecimiento y la mineralización de los huesos.</li>
                        <li>- Es un remedio natural para las úlceras.</li>
                        <li>- Es un antiestres depresivo que ayuda en la mente.</li>
                </ul>	
                <p>
                    <Link to="/">
                        <div className="cntvermas">
                            <div className="btnvermas bajaleer">LEER MÁS</div>
                        </div>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Home;
