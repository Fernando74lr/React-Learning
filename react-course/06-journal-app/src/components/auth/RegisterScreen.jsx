import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from 'validator';
import { removeError, setError } from "../../actions/ui";
import { useDispatch, useSelector } from "react-redux";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    // Get data from state
    const { msgError } = useSelector(state => state.ui );

    // Form Hook
    const [ formValues, handleInputChange] = useForm({
        name: 'Fernando',
        email: 'test1@test.com',
        password: 'Carnitas3$',
        password2: 'Carnitas3$'
    });

    // Extract data
    const { name, email, password, password2 } = formValues;

    // Handle register
    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            console.log({ name, email, password, password2 });
            dispatch(startRegisterWithEmailPasswordName(email, password, name));
        }
    }

    const isFormValid = () => {
        // Set error (if any)
        if (name.trim().length === 0) {
            dispatch(setError('Invalid name.'));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Invalid email.'));
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError('Invalid password. It should be at least 6 characters and match each others.'));
            return false;
        }

        // Remove error
        dispatch(removeError());

        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={ handleRegister }>

                {
                    msgError && <div className="auth__alert-error">
                        { msgError }
                    </div>
                }

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="auth__input"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />  

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

                <input
                    type="password"
                    name="password2"
                    placeholder="Confirm"
                    className="auth__input"
                    value={ password2 }
                    onChange={ handleInputChange }
                />

                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                >
                    Register
                </button>

                <Link
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>
            </form>
        </>
    );
}
