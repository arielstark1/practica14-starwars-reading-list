import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { Context } from "../store/appContext";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import LittleInfo from "../components/LittleInfo";

const PlanetsDetails = (props) => {
  const { store, actions } = useContext(Context);
  const { id } = props.match.params;
  return (
    <>
      {!!store.planets ? (
        <>
          <Navbar />
      <div className="container">
        <Jumbotron info={store.planets} id={id} />
        <hr className="my-4 bg-danger" />
        <div className="row">
          <LittleInfo
            section={"planets"}
            name={store.planets.results[id].name}
            rotationPeriod={store.planets.results[id].rotation_period}
            orbitalPeriod={store.planets.results[id].orbital_period}
            climate={store.planets.results[id].climate}
            gravity={store.planets.results[id].gravity}
            terrain={store.planets.results[id].terrain}
            />
            </div>
          </div>
        </>
      ) : (
        <h3>Loading..</h3>
      )}
    </>
  );
};

export default withRouter(PlanetsDetails);
