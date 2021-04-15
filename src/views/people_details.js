import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { Context } from "../store/appContext";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import LittleInfo from "../components/LittleInfo";

const PeopleDetails = (props) => {
  const { store, actions } = useContext(Context);
  const { id } = props.match.params;
  return (
    <>
      {!!store.people ? (
        <>
          <Navbar />
          <div className="container">
            <Jumbotron info={store.people} id={id} />
            <hr className="my-4 bg-danger" />
            <div className="row">
              <LittleInfo
                section={"people"}
                name={store.people.results[id].name}
                birthyear={store.people.results[id].birth_year}
                gender={store.people.results[id].gender}
                height={store.people.results[id].height}
                skinColor={store.people.results[id].skin_color}
                eyeColor={store.people.results[id].eye_color}
              />
            </div>
          </div>
        </>
      ) : (
        <h3>Loading..</h3>
      )}
    </>
  );
};

export default withRouter(PeopleDetails);
