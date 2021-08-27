import React, { useContext } from "react";

// Routing
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const AppRouter = () => {

	const { user: { logged }} = useContext(AuthContext);

	return (
		<Router>
			<div>
				<Switch>
					<PublicRoute
                        exact
						path="/login" // ...rest
                        isAuthenticated={ logged }
						component={ LoginScreen }
                    />

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
