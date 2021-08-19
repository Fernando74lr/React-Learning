
export const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        console.log("Click");
        // history.push('/'); // Te redirecciona a la ruta que quieras.
        history.replace('/'); // Hace un replace de la historia
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