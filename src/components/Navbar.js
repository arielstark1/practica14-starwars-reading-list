import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbarColor justify-content-between navbar-expand-lg navbar-light ">
      <Link className="navbar-brand" to="/">
        <img
          className="logo"
          src="https://fontmeme.com/permalink/210416/9bafe9511e07711236523ea9e59c09b4.png"
          alt="logo"
        />
      </Link>
      <div className="dropdown dropdownColor">
        <button
          className="btn btnGreen dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Favorites
        </button>
        <div
          className="dropdown-menu dropdown-menu-right dropdownColor"
          aria-labelledby="dropdownMenuButton"
        >
          {!!store.favourites && store.favourites.length > 0 ? (
            <>
              {store.favourites.map((fav, index) => {
                return (
                  <div
                    key={index}
                    className="dropdown-item my-2 d-flex justify-content-between"
                  >
                    <Link
                      className="text-dark my-auto"
                      to={`/details/${fav.section}/${fav.id}`}
                    >
                      {fav.name}{" "}
                    </Link>
                    <button
                      className="btn"
                      onClick={() => {
                        actions.deleteFavourite(index);
                      }}
                    >
                      <i className="far fa-trash-alt my-auto ml-5 "></i>
                    </button>
                  </div>
                );
              })}
              <div className="dropdown-divider"></div>
              <button
                className="dropdown-item text-danger"
                onClick={() => {
                  actions.deleteLocalStorage();
                }}
              >
                Delete all favourites
              </button>
            </>
          ) : (
            <button
              className="dropdown-item disabled"
              tabIndex="-1"
              aria-disabled="true"
            >
              (empty)
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
