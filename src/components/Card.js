import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card">
      <img
        src="http://via.placeholder.com/400x200"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        {props.section === "PEOPLE" && (
          <>
            <p className="card-text">Gender: {props.gender}</p>
            <p className="card-text">Hair Color: {props.hairColor}</p>
            <p className="card-text">Eye Color: {props.eyeColor}</p>
          </>
        )}
        {props.section === "PLANETS" && (
          <>
            <p className="card-text">Population: {props.population}</p>
            <p className="card-text">Terrain: {props.terrain}</p>
            <p className="card-text">Climate: {props.climate}</p>
          </>
        )}
        {props.section === "VEHICLES" && (
          <>
            <p className="card-text">Model: {props.model}</p>
            <p className="card-text">Class: {props.vehicleClass}</p>
            <p className="card-text">Crew: {props.crew}</p>
          </>
        )}

        <div className="row m-1 justify-content-between">
          <Link
            to={`/details/${props.section.toLowerCase()}/${props.id}`}
            // "/details/characters/1"
            className="btn btn-outline-primary btn-sm"
            onClick={() => {
              // actions.saludo(store);
              // actions.actualizar(29);
              // actions.calculo("resta", 15, 8);
              // actions.setFullmane();
            }}
          >
            Learn more!
          </Link>
          <Link to="" className="btn btn-outline-warning btn-sm">
            <i className="far fa-heart"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
