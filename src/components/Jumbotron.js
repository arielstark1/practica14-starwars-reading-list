import React from "react";

const Jumbotron = ({ id, info }) => {

  return (
    <div className="container m-4 d-flex justify-content-center">
      {!!info ? (
        <div className="row my-3">
          <div className="col-md-6">
            <img src="http://via.placeholder.com/450x300" alt="logo" />
          </div>
          <div className="col-md-6">
            <h1 className="display-4 text-center">
              {info.results[id].name}
            </h1>
            <p className="lead text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam sint debitis enim natus blanditiis dolorum assumenda exercitationem, dolor illo. Quis harum a in. Quibusdam, consequatur? Beatae explicabo reiciendis assumenda magnam.
            </p>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Jumbotron;
