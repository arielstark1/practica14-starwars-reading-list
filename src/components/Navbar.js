import React from "react";
import { Link } from "react-router-dom";
import swlogo from "../images/sw-logo-gold.png";

const Navbar = () => {
  return (
    <nav className="navbar justify-content-between navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img className="logo" src={swlogo} alt="logo" />
      </Link>
      <div className="dropdown">
  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Favorites
  </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <Link className="dropdown-item my-2" to="">Action</Link>
    <Link className="dropdown-item my-2" to="">Another action</Link>
    <Link className="dropdown-item my-2" to="">Something else here</Link>
  </div>
</div>

      
    </nav>
  );
};

export default Navbar;
