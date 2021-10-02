// Routing
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { login } from "../actions/auth";
import { startLoadingNotes } from "../actions/notes";

// Components
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setsChecking] = useState(true);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            if (user?.uid) {
                dispatch( login(user.uid, user.displayName) );
                setIsLoggedIn(true);
                dispatch(startLoadingNotes(user.uid));
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
					<PublicRoute
						path="/auth"
                        isAuthenticated={ isLoggedIn }
						component={ AuthRouter }
                    />

					<PrivateRoute
                        exact
                        isAuthenticated={ isLoggedIn }
						path="/"
						component={ JournalScreen }
					/>

                    <Redirect to="/auth/login" />
				</Switch>
			</div>
		</Router>
    );
}
