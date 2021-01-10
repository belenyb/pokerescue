import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ pokemon }) => {
    return (
        <div className="col-3">
            <div className="card mx-auto animate__animated animate__pulse animate__infinite	infinite" style={{ width: "14rem" }}>
                <Link to={`/item/${pokemon.name}`}>
                <img className="card-img-top img-fluid" src={pokemon.sprites.front_default} alt={`Imagen de ${pokemon.name}`} />
                <div className="card-body">
                    <h5 className="card-title">{pokemon.name}</h5>
                </div>
                </Link>
            </div>
        </div>      
    );
}

export default Item;