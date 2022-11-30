import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCountryName } from "../../store/actions/index";
// import "./NavBar";

export default function NavBar() {
  const countriesFounded = useSelector((state) => state.countriesFounded);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  async function getCountries(e) {
    e.preventDefault();
    dispatch(getCountryName(search));
  }

  useEffect(() => {
    console.log(countriesFounded);
  }, [countriesFounded]);

  return (
    <div className="navBar">
      <Link to="/countries" />
      <div>
        <select>
          <ul>
            <Link path to="/countries">
              Inicio
            </Link>
            <div path to="/Tourism">
              Crear Actividad
            </div>
          </ul>
        </select>
      </div>
      <form onSubmit={getCountries}>
        <i></i>
        <input
          type="text"
          placeholder="Buscar Pais..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <button type="submit" onClick={getCountries} className='btnFind'/>
      <Link path to="/home">
        Inicio
      </Link>
      <br />
      <Link path to="/Tourism">
        Crear Actividad
      </Link>
    </div>
  );
}
