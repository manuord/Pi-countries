import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Cards/Card.jsx";
import Pages from "../Pages/Pages.jsx";
import NavBar from '../NavBar/NavBar.jsx'

import {
  getCountry,
  getTourism,
  orderByCountry,
  countryByTourism,
  filterByContinent,
  filterByPopulation,
} from "../../store/actions/index.js";
import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.country);
  const [page, setPage] = useState(1);
  const [countriesByPage] = useState(10);
  const [order, setInOrder] = useState("");

  const indexOfLastCountry = page * countriesByPage;
  const IndexOfFirstCountry = indexOfLastCountry - countriesByPage;
  const currentCountry = allCountries.slice(
    IndexOfFirstCountry,
    indexOfLastCountry
  );

  function showPages(page) {
    setPage(page);
  }

  useEffect(() => {
    dispatch(getCountry());
    dispatch(getTourism());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getCountry());
    window.location.reload();
  }

  function handleFilterContinent(e) {
    e.preventDefault();
    setPage(1);
    dispatch(filterByContinent(e.target.value));
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByCountry(e.target.value));
    setPage(1);
    setInOrder(`Ordenado ${order}`);
  }

  function handleSortPopulation(e) {
    e.preventDefault();
    setPage(1);
    dispatch(filterByPopulation(e.target.value));
    setInOrder(`Ordenado ${order}`);
  }

  function handleCountriesTourism(e) {
    e.preventDefault();
    dispatch(countryByTourism(e.target.value));
    setPage(1);
    setInOrder(`Ordenado ${order}`);
  }

  return (
    <div className="home">
      <NavBar setPage={{setPage}} />
      <div>
        <div className="filters">
          <div>
            <h3 className="findBy">Busqueda por:</h3>
          </div>
          <div className="filter">
            <select onChange={(e) => handleSort(e)}>
              <option>Alfabeticamente</option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>
          </div>
          <div className="filter">
            <select onChange={(e) => handleFilterContinent(e)}>
              <option>Continente</option>
              <option value="Africa">África</option>
              <option value="Americas">América</option>
              <option value="Antartic">Antártica</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europa</option>
              <option value="Oceania">Oceanía</option>
            </select>
          </div>
          <div className="filter">
            <select onChange={(e) => handleSortPopulation(e)}>
              <option>Población</option>
              <option value="less">Menor Población</option>
              <option value="high">Mayor Población</option>
            </select>
          </div>
          <div className="filter">
            <select onChange={(e) => handleCountriesTourism(e)}>
              <option value={"All"}>Actividad</option>

              <NavLink to="/Tourism" className="form">
                <p className="CreateTourActivity">
                  No hay actividades, desea crear una?
                </p>
              </NavLink>
              {(q) => (
                <option key={q} value={q}>
                  {q}
                </option>
              )}
            </select>
          </div>
          <div>
            <button onClick={e=> {handleClick(e)}} className='btnFilter'>
                Limpiar Filtro
            </button>
          </div>
        </div>

        <div className="cards">
            {
                currentCountry.map(e => {
                    return (
                        <Card name={e.name} continent={e.continent} flag={e.flag} id={e.id} key={e.id} />
                    );
                })
            }
        </div>

        <Pages 
            countriesByPages={countriesByPage}
            allCountries={allCountries.length}
            showPages={showPages}
        />
      </div>
    </div>
  );
}
