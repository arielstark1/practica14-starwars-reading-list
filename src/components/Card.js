import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = (props) => {
  const { actions } = useContext(Context);

  

  return (
    <>
      <img
        src="http://via.placeholder.com/400x200"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="cardTitle">{props.title}</h5>
        {props.section === "people" && (
          <>
            <p className="card-text">Gender: {props.gender}</p>
            <p className="card-text">Hair Color: {props.hairColor}</p>
            <p className="card-text">Eye Color: {props.eyeColor}</p>
          </>
        )}
        {props.section === "planets" && (
          <>
            <p className="card-text">Population: {props.population}</p>
            <p className="card-text">Terrain: {props.terrain}</p>
            <p className="card-text">Climate: {props.climate}</p>
          </>
        )}
        {props.section === "vehicles" && (
          <>
            <p className="card-text">Model: {props.model}</p>
            <p className="card-text">Class: {props.vehicleClass}</p>
            <p className="card-text">Crew: {props.crew}</p>
          </>
        )}

        <div className="row m-1 justify-content-between">
          <Link
            to={`/details/${props.section}/${props.id}`}
            // "/details/characters/1"
            className="btn btnGreen btn-sm"
          >
            Learn more!
          </Link>
          <button
            className="btn btnBrown btn-sm"
            onClick={() => {
              actions.addFavourites(props.id, props.title, props.section);

            }}
          >{
            !actions.isAdded(props.title)
            ? <i className="far fa-heart"></i>
            : <i className="fas fa-heart"></i>
          }
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
