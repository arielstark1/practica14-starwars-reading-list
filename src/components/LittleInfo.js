import React, { useContext } from "react";
import { Context } from "../store/appContext";

const LittleInfo = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <>
      {props.section === "people" && (
        <>
          <div className="col-md-2">
            <h5 className="text-center text-danger">Name</h5>
            <p className="text-center text-danger">{props.name}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center text-danger">Birth Year</h5>
            <p className="text-center text-danger">{props.birthyear}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center text-danger">Gender</h5>
            <p className="text-center text-danger">{props.gender}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center text-danger">Height</h5>
            <p className="text-center text-danger">{props.height}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center text-danger">Skin Color</h5>
            <p className="text-center text-danger">{props.skinColor}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center text-danger">Eye Color</h5>
            <p className="text-center text-danger">{props.eyeColor}</p>
          </div>
        </>
      )}
      {props.section === "planets" && (
        <>
          <div className="col-md-2">
            <h5 className="text-center text-danger">Name</h5>
            <p className="text-center text-danger">{props.name}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center text-danger">Rotation Period</h5>
            <p className="text-center text-danger">{props.rotationPeriod}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center text-danger">Orbital Period</h5>
            <p className="text-center text-danger">{props.orbitalPeriod}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center text-danger">Climate</h5>
            <p className="text-center text-danger">{props.climate}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center text-danger">Gravity</h5>
            <p className="text-center text-danger">{props.gravity}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center text-danger">Terrain</h5>
            <p className="text-center text-danger">{props.terrain}</p>
          </div>
        </>
      )}

      {props.section === "vehicles" && (
        <>
          <div className="col-md-2">
            <h5 className="text-center text-danger">Name</h5>
            <p className="text-center text-danger">{props.name}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center text-danger">Manufacturer</h5>
            <p className="text-center text-danger">{props.manufacturer}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center text-danger">Cargo Capacity</h5>
            <p className="text-center text-danger">{props.capacity}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center text-danger">Cost in Credits</h5>
            <p className="text-center text-danger">{props.costInCredits}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center text-danger">Consumables</h5>
            <p className="text-center text-danger">{props.consumables}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center text-danger">Vehicle Class</h5>
            <p className="text-center text-danger">{props.vehicleClass}</p>
          </div>
        </>
      )}
    </>
  );
};

export default LittleInfo;
