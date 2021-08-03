
import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const HomeScreen = () => {

    const userContext = useContext(UserContext);
    console.log('userContext', userContext);

    return (
        <div>
            <h1>Home Screen</h1>
        </div>
    );
}

export default HomeScreen;
