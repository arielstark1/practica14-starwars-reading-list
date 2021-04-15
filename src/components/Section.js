import React from "react";
import Card from "./Card";

const Section = (props) => {
  return (
    <>
      <div className="row mx-3 my-3 py-3">
        <h2>{props.name}</h2>
      </div>
      <div className="card-deck mx-3 my-3 py-2">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Section;
