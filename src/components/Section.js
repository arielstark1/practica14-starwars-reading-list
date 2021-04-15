import React, { useContext } from "react";
import Card from "./Card";
import { Context } from "../store/appContext";

const Section = (props) => {
  const { store, actions } = useContext(Context);
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
                  <Card title={element.name}
                  
                  gender={element.gender}
                  hairColor={element.hair_color}
                  eyeColor={element.eye_color}

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
