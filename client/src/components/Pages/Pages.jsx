import React from "react";
import './Pages.css';

export default function Pages({countryByPages, allCountries,showPages}){
    const pageNumber = [];

    for(let i = 1; i <= Math.ceil(allCountries/countryByPages); i++){
        pageNumber.push(i);
    }

    return(
        <nav>
            <ul className="pages">
                { pageNumber &&
                pageNumber.map(e => {
                    return(
                        <li className="numberOfPags" key={e}>
                            <a className="paginacion" onClick={()=>showPages(e)}>{e}</a>
                        </li>
                    );
                })
                }
            </ul>
        </nav>
    );
};