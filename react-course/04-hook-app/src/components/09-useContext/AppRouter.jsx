
import React from 'react';

// Components
import AboutScreen from './AboutScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import Navbar from './Navbar';

// React Route
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";

const AppRouter = () => {
	return (
		<Router>
			<div>
				<Navbar />
				<Switch>
					<Route exact path="/" component={ HomeScreen } />
					<Route exact path="/about" component={ AboutScreen } />
					<Route exact path="/login" component={ LoginScreen } />
					<Redirect to="/" />
				</Switch>
			</div>
		</Router>
	);
}

export default AppRouter;
