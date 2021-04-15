import { BrowserRouter, Switch, Route } from "react-router-dom";
import injectContext from "./store/appContext";
import Home from "./views";
import PeopleDetails from "./views/people_details";
import NotFound from "./views/notfound";
import PlanetsDetails from "./views/planets_details";
import VehiclesDetails from "./views/vehicles_details";

const Layout = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/details/people/:id">
          <PeopleDetails />
        </Route>
        <Route exact path="/details/planets/:id">
          <PlanetsDetails />
        </Route>
        <Route exact path="/details/vehicles/:id">
          <VehiclesDetails />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default injectContext(Layout);
