import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import swlogo from "../images/sw-logo-gold.png";

const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar justify-content-between navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img className="logo" src={swlogo} alt="logo" />
      </Link>
      <div className="dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Favorites
  </button>
  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
    { store.favourites.length > 0 ?
      store.favourites.map((fav, index) =>{
        return(
          <Link key={index} className="dropdown-item my-2 d-flex justify-content-between" to={`/details/people/0`}>{fav} <i className="far fa-trash-alt ml-5"></i></Link>
        )
      })
      : (<a className="dropdown-item disabled" href="#" tabIndex="-1" aria-disabled="true">(empty)</a>)
    }
    
  </div>
</div>

      
    </nav>
  );
};

export default Navbar;
