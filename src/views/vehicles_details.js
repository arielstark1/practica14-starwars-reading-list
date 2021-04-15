import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { Context } from "../store/appContext";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import LittleInfo from "../components/LittleInfo";

const VehiclesDetails = (props) => {
  const { store, actions } = useContext(Context);
  const { id } = props.match.params;
  return (
    <>
      {!!store.planets ? (
        <>
          <Navbar />
      <div className="container">
        <Jumbotron info={store.vehicles} id={id} />
        <hr className="my-4 bg-danger" />
        <div className="row">
          <LittleInfo
            section={"vehicles"}
            name={store.vehicles.results[id].name}
            manufacturer={store.vehicles.results[id].manufacturer}
            cargoCapacity={store.vehicles.results[id].cargo_capacity}
            costInCredits={store.vehicles.results[id].cost_in_credits}
            consumables={store.vehicles.results[id].consumables}
            vehicleClass={store.vehicles.results[id].vehicle_class}
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

export default withRouter(VehiclesDetails);
