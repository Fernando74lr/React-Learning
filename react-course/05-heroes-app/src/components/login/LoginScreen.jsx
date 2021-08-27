import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        // history.push('/'); // Te redirecciona a la ruta que quieras.
        // history.replace('/'); // Hace un replace de la historia

        const lastPath = localStorage.getItem('lastPath') || '/';
        dispatch({
            type: types.login,
            payload: {
                name: 'Fernando',
            }
        });

        history.replace(lastPath);
    }

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
              Login  
            </button>
        </div>
    );
}