import { useState, useEffect } from 'react';

const Message = () => {

    const [coords, setCoords] = useState({ x:0, y:0 })
    const { x, y } = coords;

    useEffect(() => {

        const mouseMove = (e) => {
            const coords = { x: e.x, y: e.y };
            setCoords(coords);
        };

        window.addEventListener('mousemove', mouseMove);
        
        return () => {
            // Cleanup
            window.addEventListener('mousemove', mouseMove);
        }
    }, []);

    return (
        <>
            <h1>You're cool.</h1>
            <p>
                x: { x}, y: { y }
            </p>
        </>
    )
}

export default Message
