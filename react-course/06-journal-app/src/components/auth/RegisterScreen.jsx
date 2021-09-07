import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from 'validator';
import { toast } from "../../helpers/sweetAlert2";

export const RegisterScreen = () => {

    // Form Hook
    const [ formValues, handleInputChange] = useForm({
        name: 'Fernando',
        email: 'lopezramirez330@gmail.com',
        password: '12345',
        password2: '12345'
    });

    // Extract data
    const { name, email, password, password2 } = formValues;

    // Handle register
    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            console.log({ name, email, password, password2 });
        }

    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            toast('error', 'Invalid name.');
            return false;
        } else if (!validator.isEmail(email)) {
            toast('error', 'Invalid email.');
            return false;
        } else if (password !== password2 || password.length < 5) {
            toast('error', 'Invalid password. It should be at least 6 characters and match each others.');
            return false;
        }

        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={ handleRegister }>

                <div className="auth__alert-error">
                    Hola, mundo
                </div>

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
