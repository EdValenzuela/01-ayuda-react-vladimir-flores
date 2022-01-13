import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

const TypeList = ({tipo}) => (
    <Fragment>
        {
            tipo.map((xz, index) =>{
                return(
                    <li key={index} className="btn_recetas">
                        <Link to="/"><div className="listacategoria">{xz.name}</div></Link>
                    </li>
                );
            })
        }
    </Fragment>
);

export default TypeList;