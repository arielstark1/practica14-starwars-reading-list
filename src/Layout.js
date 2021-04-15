import { BrowserRouter, Switch, Route } from "react-router-dom"
import injectContext from "./store/appContext"
import Home from "./views"
import Details from "./views/details"
import NotFound from "./views/notfound"
import PlanetDetails from "./views/planet_details"

const Layout=()=>{
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/details/:id">
                <Details/>
            </Route>
            <Route exact path="/planet_details/:id">
                <PlanetDetails/>
            </Route>
            <Route >
                <NotFound/>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default injectContext(Layout)