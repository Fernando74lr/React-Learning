import { useState, useEffect } from 'react';

const Message = () => {

    useEffect(() => {

        console.log('Component mounted');
        
        return () => {
            console.log('Component unmounted');
        }
    }, []);

    return (
        <>
            <h1>You're cool.</h1> 
        </>
    )
}

export default Message
