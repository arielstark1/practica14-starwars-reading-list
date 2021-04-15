import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { Context } from "../store/appContext";


const Card = (props) => {
  const {store, actions} = useContext(Context);
    return (
        <div className="card">
        <img src="http://via.placeholder.com/400x200" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">Gender: {props.gender}</p>
          <p className="card-text">Hair Color: {props.hairColor}</p>
          <p className="card-text">Eye Color: {props.eyeColor}</p>
         <div className="row m-1 justify-content-between">
          <Link to="/details/:id" className="btn btn-outline-primary btn-sm" onClick={() =>{
            ;
            // actions.saludo(store);
            // actions.actualizar(29);
            // actions.calculo("resta", 15, 8);
            // actions.setFullmane();
          }} >Learn more!</Link>
          <Link to="" className="btn btn-outline-warning btn-sm"><i className="far fa-heart"></i></Link>
          
          </div>  
        </div>
      </div>
    )
}

export default Card
