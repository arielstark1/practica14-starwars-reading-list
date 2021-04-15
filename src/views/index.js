import React, { useContext } from "react";
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import { Context } from "../store/appContext";


const Home = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
        <Navbar/>
        <Section
        name="CHARACTERS"
        info={store.people}
        //  field1={}
        // field2={}
        // field3={}
        />
         <Section
        name="PLANETS"
        info={store.planets}
        // field1={}
        // field2={}
        // field3={}
        />
         <Section
        name="VEHICLES"
        info={store.vehicles}
        // field1={}
        // field2={}
        // field3={}
        />
          
        </>
    )
}

export default Home
