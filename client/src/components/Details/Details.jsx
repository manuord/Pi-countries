import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../store/actions/index.js";
import "./Details.css";

export default function Details() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const countryDetails = useSelector((state) => state.details);
  console.log(countryDetails)
  useEffect(() => {
    dispatch(getDetails(id));
  },[dispatch, id])

  return (
    <div className="detailsContainer">
      
      {countryDetails.hasOwnProperty("name") ? (
        <div>
          <div className="ss">
            <div className="content">
              <div className="images">
                <img src={countryDetails.flag} alt="Bandera" className="flag" />
              </div>
              <h2>{countryDetails.name}</h2>
              <h3>
                <i>Capital:</i> {countryDetails.capital[0]}
              </h3>
              <h4>
                <i>Codigo:</i> {countryDetails.id}
              </h4>
              <h4>
                <i>Subregion:</i> {countryDetails.subregion}
              </h4>
              <h4>
                <i>Area:</i>{" "}
                {parseInt(countryDetails.area).toLocaleString("de-DE")} km2
              </h4>
              <h4>
                <i>Poblacion:</i>{" "}
                {countryDetails.population.toLocaleString("de-DE")}
              </h4>
            </div>
          </div>
          <div className="tourism">
            <div className="content">
              <h2>
                <i>Actividades:</i>
              </h2>
              <br />
              {countryDetails.tourisms?.length > 0 ? (
                countryDetails.tourisms?.map((e) => (
                  <p key={e.id}>
                    <li className="titleTourAct">Actividad: {e.name}</li>
                    <li> Temporada: {e.season}</li>
                    <li>Duracion: {e.span}</li>
                    <li>Dificultad: {e.difficulty}</li>
                  </p>
                ))
              ) : (
                <h2 className="TourNotFound">No tiene Actividades!</h2>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p>Buscando...</p>
      )}

      <div className="back">
        <Link to="/Home" className="back">
          Regresar
        </Link>
      </div>
    </div>
  );
}
