import React from "react";


const LittleInfo = (props) => {

  return (
    <>
      {props.section === "people" && (
        <>
          <div className="col-md-2">
            <h5 className="text-center detailColor">Name</h5>
            <p className="text-center detailColor">{props.name}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center detailColor">Birth Year</h5>
            <p className="text-center detailColor">{props.birthyear}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center detailColor">Gender</h5>
            <p className="text-center detailColor">{props.gender}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center detailColor">Height</h5>
            <p className="text-center detailColor">{props.height}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center detailColor">Skin Color</h5>
            <p className="text-center detailColor">{props.skinColor}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center detailColor">Eye Color</h5>
            <p className="text-center detailColor">{props.eyeColor}</p>
          </div>
        </>
      )}
      {props.section === "planets" && (
        <>
          <div className="col-md-2">
            <h5 className="text-center detailColor">Name</h5>
            <p className="text-center detailColor">{props.name}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center detailColor">Rotation Period</h5>
            <p className="text-center detailColor">{props.rotationPeriod}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center detailColor">Orbital Period</h5>
            <p className="text-center detailColor">{props.orbitalPeriod}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center detailColor">Climate</h5>
            <p className="text-center detailColor">{props.climate}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center detailColor">Gravity</h5>
            <p className="text-center detailColor">{props.gravity}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center detailColor">Terrain</h5>
            <p className="text-center detailColor">{props.terrain}</p>
          </div>
        </>
      )}

      {props.section === "vehicles" && (
        <>
          <div className="col-md-2">
            <h5 className="text-center detailColor">Name</h5>
            <p className="text-center detailColor">{props.name}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center detailColor">Manufacturer</h5>
            <p className="text-center detailColor">{props.manufacturer}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center detailColor">Cargo Capacity</h5>
            <p className="text-center detailColor">{props.capacity}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center detailColor">Cost in Credits</h5>
            <p className="text-center detailColor">{props.costInCredits}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center detailColor">Consumables</h5>
            <p className="text-center detailColor">{props.consumables}</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center detailColor">Vehicle Class</h5>
            <p className="text-center detailColor">{props.vehicleClass}</p>
          </div>
        </>
      )}
    </>
  );
};

export default LittleInfo;
