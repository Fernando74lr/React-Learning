// Routing
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { login } from "../actions/auth";

// Components
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setsChecking] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                dispatch( login(user.uid, user.displayName) );
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }

            setsChecking(false);
        })
    }, [dispatch, setsChecking]);

    if (checking) {
        return (
            <h1>Wait...</h1>
        );
    }

    return(
		<Router>
			<div>
				<Switch>
					<Route
						path="/auth"
						component={ AuthRouter }
                    />

					<Route
                        exact
						path="/"
						component={ JournalScreen }
					/>

                    <Redirect to="/auth/login" />
				</Switch>
			</div>
		</Router>
    );
}
