import React from "react";
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({name, continent, flag, id}){
    return (
        <div>
            <Link to={`/Country/${id}`}><img className="bandera" src={flag} alt='No existe esta bandera'/></Link>
            <h2 className="pais">{name}</h2>
            <h4 className="continent">{continent}</h4>
        </div>
    );
}