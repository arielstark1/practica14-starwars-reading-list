import React from 'react'
import Navbar from '../components/Navbar'
import Section from '../components/Section'

const Home = () => {
    return (
        <>
        <Navbar/>
        <Section
        name="CHARACTERS"/>
         <Section
        name="PLANETS"/>
         <Section
        name="VEHICLES"/>
          
        </>
    )
}

export default Home
