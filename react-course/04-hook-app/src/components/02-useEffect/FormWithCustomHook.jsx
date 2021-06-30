import useForm from '../../hooks/useForm';
import './effects.css';
import { useEffect } from 'react';

const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('Email changed')
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( formValues );
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormWithCustomHook</h1>
            <hr />

            {/* Name */}
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div> <br/>

            {/* Email */}
            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="test@gmail.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div> <br/>

            {/* Password */}
            <div className="form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*****"
                    autoComplete="off"
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div> <br />

            <button type="submit" className="btn btn-primary">
                Guardar
            </button>

        </form>
    );
}

export default FormWithCustomHook;
