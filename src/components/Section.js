import React from "react";
import Card from "./Card";


const Section = (props) => {

  return (
    <>
      <div className="row mx-3 my-3 py-3 text-danger">
        <h2>{props.name}</h2>
      </div>
      <div className="container">
        <div className="row">
          {!!props.info &&
            props.info.results.map((element, index) => {
              return (
                <div className="col-md-4 my-2" key={index}>
                  <Card section ={props.name}
                  title={element.name}
                  gender={element.gender}
                  hairColor={element.hair_color}
                  eyeColor={element.eye_color}
                  population={element.population}
                  terrain={element.terrain}
                  climate={element.climate}
                  model={element.model}
                  vehicleClass={element.vehicle_class}
                  crew={element.crew}
                  id={index}
                   />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Section;
