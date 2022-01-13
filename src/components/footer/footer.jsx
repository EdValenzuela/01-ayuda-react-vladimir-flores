import React from 'react';
import pci from './../../assets/images/pci.png';
import './footer.css';

const Footer = () => (
    <footer>
        <div className="container">
            <div className="box one">
                <h3>Huerto Alamein</h3>
                <ul>
                    <li><a>Nosotros</a></li>
                    <li><a target="_blank">Prensa</a></li>
                </ul>
            </div>
            <div className="box two">
                <h3>Productos</h3>
                <ul>
                    <li><a>Beneficios</a></li>
                    <li><a>Precios</a></li>
                    <li><a>Seguridad</a></li>
                    <li><a>Legal</a></li>
                </ul>
            </div>
            <div className="box three">
                <h3>Soporte</h3>
                <ul>
                    <li><a>Contacto</a></li>
                    <li>Llámanos (+511) 517 - 9805</li>
                </ul>
            </div>
            <div className="box four">
                <ul>
                    <li><img src={pci} alt="" /></li>
                    <ul className="redes">
                        <li><a target="_blank"><i className="icon-facebook"></i></a></li>
                        <li><a target="_blank"><i className="icon-twitter"></i></a></li>
                        <li><a target="_blank"><i className="icon-linkedin"></i></a></li>
                    </ul>
                    <li className="mixpanel">
                        <a target="_blank"><img src="//cdn.mxpnl.com/site_media/images/partner/badge_light.png" alt="Mobile Analytics" /></a>
                    </li>
                    <li>&copy; Huerto Alamein</li>
                    <li>Todos los derechos reservados</li>
                </ul>
            </div>
        </div>
    </footer>
);
export default Footer;