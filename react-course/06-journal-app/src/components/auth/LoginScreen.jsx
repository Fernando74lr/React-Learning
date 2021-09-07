import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

export const LoginScreen = () => {

    // Dispatch Hook
    const dispatch = useDispatch();

    // Form Hook
    const [ formValues, handleInputChange] = useForm({
        email: 'lopezramirez330@gmail.com',
        password: '123456'
    });

    // Extract data
    const { email, password} = formValues;

    // Handle login
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
    }

    const handleGoogleLogin = () => {
        console.log('click');
        dispatch(startGoogleLogin());
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form onSubmit={ handleLogin }>
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                >
                    Login
                </button>
                
                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div
                        className="google-btn"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link
                    to="/auth/register"
                    className="link"
                >
                    Create new account
                </Link>
            </form>
        </>
    );
}
