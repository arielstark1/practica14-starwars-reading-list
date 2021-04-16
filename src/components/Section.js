import React, { useContext } from "react";
import Card from "./Card";
import { Context } from "../store/appContext";

const Section = (props) => {
  const { actions } = useContext(Context);

  return (
    <>
      <div className="row mx-3 my-3 py-3 sectionTitle">
        <h2>
          <img className="logoSection" src={props.logo} alt="people" />
        </h2>
      </div>
      <div className="container">
        <div className="card-columns">
          <div className="card text-white bg-dark text-center p-3">
            <blockquote className="blockquote mb-0">
              <p className="font-italic">
                When gone am I, the last of the Jedi will you be. The Force runs
                strong in your family. Pass on what you have learned.
              </p>
              <footer className="blockquote-footer text-white">
                <small>
                  <cite>Yoda</cite>
                </small>
              </footer>
            </blockquote>
          </div>
          {!!props.info &&
            props.info.results.map((element, index) => {
              return (
                <div className="card text-white bg-dark p-3" key={index}>
                  <Card
                    section={props.name}
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
          <div className="card text-white bg-dark p-3">
            <blockquote className="blockquote mb-0 card-body">
              <p className="font-italic">
                The Force is strong with you. A powerful Sith you will become.
                Henceforth, you shall be known as Darth… Vader.
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  <cite>Emperor Palpatine</cite>
                </small>
              </footer>
            </blockquote>
          </div>
          <button
            className="btn btnBrown m-2"
            disabled={!!props.info && !!props.info.previous ? "" : "true"}
            onClick={() => {
              actions.getFetch(props.name, props.info.previous.replace("http", "https"));
            }}
          >
            Prev
          </button>
          <button
            className="btn btnBrown m-2"
            disabled={!!props.info && !!props.info.next ? "" : "true"}
            onClick={() => {
              actions.getFetch(props.name, props.info.next.replace("http", "https"));
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Section;
