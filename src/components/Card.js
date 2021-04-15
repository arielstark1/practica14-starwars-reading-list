import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { Context } from "../store/appContext";


const Card = () => {
  const {store, actions} = useContext(Context);
    return (
        <div className="card">
        <img src="http://via.placeholder.com/400x200" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
         <div className="row m-1 justify-content-between">
          <Link to="/details/:id" className="btn btn-outline-primary btn-sm" onClick={() =>{
            actions.hola();
            actions.saludo(store);
            actions.actualizar(29);
            actions.calculo("resta", 15, 8);
            actions.setFullmane();
          }} >Learn more!</Link>
          <Link to="" className="btn btn-outline-warning btn-sm"><i className="far fa-heart"></i></Link>
          
          </div>  
        </div>
      </div>
    )
}

export default Card
