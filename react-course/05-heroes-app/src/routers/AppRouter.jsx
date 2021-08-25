import React, { useContext } from "react";

// Routing
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";

const AppRouter = () => {

	const { user: { logged }} = useContext(AuthContext);

	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/login" component={ LoginScreen } />

					<PrivateRoute
						path="/" // ...rest
						isAuthenticated={ logged }
						component={ DashboardRoutes }
					/>
				</Switch>
			</div>
		</Router>
	);
}

export default AppRouter;
