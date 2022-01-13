import React from 'react';
import {Link} from 'react-router-dom';
import logo from './../../assets/images/logohuerto.png';

import './header.css';

const Header = () => (
    <header>
        <div className="container">
            <div className="logo">
                <Link to="/"><img src={logo} alt="Aceites vegetales" title="Aceites vegetales" /></Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/pokemonlist">NUESTROS <br />PRODUCTOS</Link></li>
                    <li><Link to="/contact">CONTACTO</Link></li>
                    <Link to="/login"><li className="login button-link">Iniciar sesión</li></Link>
                </ul>
            </nav>
        </div>
        
    </header>
);

export default Header;