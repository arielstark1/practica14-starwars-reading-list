import React, { useContext } from "react";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import { Context } from "../store/appContext";


const Details = () => {
  const {store, actions} = useContext(Context);
  return (
    <>
      <Navbar />
      <div className="container">
        <Jumbotron />
        <hr className="my-4 bg-danger" />
        <div className="row">
          <div className="col-md-2">
            <h5 className="text-center text-danger">Name</h5>
            <p className="text-center text-danger">Luke Skywalker</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center text-danger">Name</h5>
            <p className="text-center text-danger">Luke Skywalker</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center text-danger">Name</h5>
            <p className="text-center text-danger">Luke Skywalker</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center text-danger">Name</h5>
            <p className="text-center text-danger">Luke Skywalker</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center text-danger">Name</h5>
            <p className="text-center text-danger">Luke Skywalker</p>
          </div>
          <div className="col-md-2">
            <h5 className="text-center text-danger">Name</h5>
            <p className="text-center text-danger">Luke Skywalker</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
