import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = (props) => {
  const { actions } = useContext(Context);

  

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
          >
            Learn more!
          </Link>
          <button
            className="btn btn-outline-warning btn-sm"
            onClick={() => {
              actions.addFavourites(props.id, props.title, props.section);
            }}
          >
            <i className="far fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
