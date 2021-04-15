import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import { Context } from "../store/appContext";

const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <Navbar />
      <Section name="PEOPLE" info={store.people} />
      <Section name="PLANETS" info={store.planets} />
      <Section name="VEHICLES" info={store.vehicles} />
    </>
  );
};

export default Home;
