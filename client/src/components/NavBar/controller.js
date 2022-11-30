import React from "react";
import { Link } from "react-router-dom";

export function Search(country) {
  if (!country) {
    return (
      <div>
        <h2>No se encontraron coincidencias</h2>
      </div>
    );
  } else if (country > 1) {
    return country.map((country) => {
      console.log(country);
      const { name, flag, population, id, continent, capital } = country;
      return (
        <select>
          <Link path to={`/Country/${id}`}>
            <article key={id}>
              <div>
                <img src={flag} alt={name} />
                <div>
                  <h3>{name}</h3>
                  <h4>
                    Capital: <span>{capital}</span>
                  </h4>
                  <h4>
                    Poblacion: <span>{population}</span>
                  </h4>
                  <h4>
                    Continente: <span>{continent}</span>
                  </h4>
                </div>
              </div>
            </article>
          </Link>
        </select>
      );
    });
  } else {
    const { name, flag, population, id, continent, capital, area, subregion } =
      country;
    return (
      <div>
        <div>
          <div>
            <h1>{name}</h1>
            <img src={flag} alt={name} />
          </div>
          <article key={id}>
            <div>
              <h4>
                Capital: <span>{capital}</span>
              </h4>
              <h4>
                Poblacion: <span>{population}</span>
              </h4>
              <h4>
                Continente: <span>{continent}</span>
              </h4>
              <h4>
                Area: <span>{area}</span>
              </h4>
              <h4>
                Subregion: <span>{subregion}</span>
              </h4>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
