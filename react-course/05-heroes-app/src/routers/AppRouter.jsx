import React from "react";

// Routing
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Components
import { Navbar } from "../components/ui/Navbar";
import MarvelScreen from "../components/marvel/MarvelScreen";
import LoginScreen from "../components/login/LoginScreen";
import DcScreen from "../components/dc/DcScreen";
import HeroesScreen from "../components/heroes/HeroesScreen";

const AppRouter = () => {
    return (
        <Router>
          <div>
            <Navbar />

            <Switch>
              <Route exact path="/login" component={ LoginScreen } />
              <Route exact path="/marvel" component={ MarvelScreen } />
              <Route exact path="/dc" component={ DcScreen } />
              <Route exact path="/marvel" component={ HeroesScreen } />
            </Switch>
          </div>
        </Router>
    );
}

export default AppRouter;
