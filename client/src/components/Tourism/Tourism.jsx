import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postTourism, getOnlyCountries } from "../../store/actions/index.js";
import "./Tourism.css";

function validate(input) {
  let error = {};
  if (!input.name) {
    error.name = "Se requiere el nombre de la actividad";
  } else if (!input.span) {
    error.span = "Se requiere la duracion de la actividad";
  }

  return error;
}

export default function Tourism() {
  const dispatch = useDispatch();
  const onlyCountries = useSelector((state) => state.onlyCountries);
  const [error, setError] = useState({
    name: "Se requiere el nombre de la actividad",
    span: "",
  });

  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    span: "",
    season: "",
    country: [],
  });

  useEffect(() => {
    dispatch(getOnlyCountries());
  }, [dispatch]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...input,
        season: e.target.value,
      })
    );
  }

  function handleSelect(e) {
    setInput({
      ...input,
      country: [...input.country, e.target.value],
    });
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleCheck(e) {
    setInput({
      ...input,
      season: e.target.value,
    });
    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleDelete(e) {
    setInput({
      name: "",
      difficulty: "",
      span: "",
      season: "",
      country: [],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postTourism(input));
    setInput({
      name: "",
      difficulty: "",
      span: "",
      season: "",
      country: [],
    });
    alert("Se creo la actividad");
  }

  return (
    <div className="tourism">
      <h1 className="tourTitle">Creacion de actividad turistica</h1>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label> Actividad Turistica: </label>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
          {error.name && <p className="error">{error.name}</p>}
        </div>
        <div>
          <label>Dificultad:</label>
          <input
            type="radio"
            value={1}
            name="difficulty"
            onChange={(e) => handleChange(e)}
          />
          1-
          <input
            type="radio"
            value={2}
            name="difficulty"
            onChange={(e) => handleChange(e)}
          />
          2-
          <input
            type="radio"
            value={3}
            name="difficulty"
            onChange={(e) => handleChange(e)}
          />
          3-
          <input
            type="radio"
            value={4}
            name="difficulty"
            onChange={(e) => handleChange(e)}
          />
          4-
          <input
            type="radio"
            value={5}
            name="difficulty"
            onChange={(e) => handleChange(e)}
          />
          5-
        </div>
        <div>
          <label>Duracion:</label>
          <input
            type="text"
            value={input.span}
            name="span"
            onChange={(e) => handleChange(e)}
            placeholder="Tiempo en horas"
          />
          {error.span && <p className="error">{error.span}</p>}
        </div>
        <div>
          <label>Temporada:</label>
          <select onChange={(e) => handleCheck(e)}>
            <option disable hidden>
              Temporada
            </option>
            <option value="autumn">Otoño</option>
            <option value="winter">Invierno</option>
            <option value="spring">Primavera</option>
            <option value="summer">Verano</option>
          </select>
        </div>
        <div>
          <label>
            Paises:
            <select onChange={(e) => handleSelect(e)}>
              <option disable hidden>
                Paises
              </option>
              {onlyCountries.map((e) => (
                <option key={e.name} value={e.name}>
                  {e.name}
                </option>
              ))}
              ;
            </select>
          </label>
        </div>
        {input.country.map((e) => (
          <div key={e} className="country">
            <h4 className="'countries">{e}</h4>
            <button className="tbn" onClick={() => handleDelete(e)}>
              x
            </button>
          </div>
        ))}
        <div>
          <button
            className="crear"
            type="submit"
            disabled={error.name || error.span ? true : false}
          >
            Crear
          </button>
        </div>
      </form>
      <div className="back">
        <Link to="/Home" className="back">
          Regresar
        </Link>
      </div>
    </div>
  );
}
