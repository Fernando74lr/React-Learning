
import React from 'react';

// Components
import AboutScreen from './AboutScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

// React Route
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

const AppRouter = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/about" component={ AboutScreen } />
					<Route exact path="/login" component={ LoginScreen } />
					<Route exact path="/" component={ HomeScreen } />
				</Switch>
			</div>
		</Router>
	);
}

export default AppRouter;
