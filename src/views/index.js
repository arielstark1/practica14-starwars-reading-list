import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import { Context } from "../store/appContext";

const Home = () => {
  const { store } = useContext(Context);
  return (
    <>
      <Navbar />
      <Section
        name="people"
        info={store.people}
        logo={
          "https://fontmeme.com/permalink/210416/2138d79b1184a6004fa24b9a2f5f26f9.png"
        }
      />
      <Section 
      name="planets" 
      info={store.planets}
      logo={"https://fontmeme.com/permalink/210416/05771ba910091f7e0b4e173f9a64cf70.png"}
       />
      <Section 
      name="vehicles" 
      info={store.vehicles}
      logo={"https://fontmeme.com/permalink/210416/7973e407075627df3b88c1968d2f0ef4.png"} />
    </>
  );
};

export default Home;
