
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const LoginScreen = () => {

    const { setUser } =  useContext(UserContext);

    const user = {
        id: 1234,
        name: 'Fernando',
        email: 'test@test.com'
    };

    return (
        <div>
            <h1>Login Screen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ () => setUser(user) }
            >
                Login
            </button>
        </div>
    );
}

export default LoginScreen;
