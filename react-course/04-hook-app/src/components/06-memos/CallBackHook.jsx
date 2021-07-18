import '../02-useEffect/effects.css';
import { useCallback, useState } from 'react';
import ShowIncrement from './ShowIncrement';

const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter( counter + 1);
    // }

    const increment = useCallback( (num) => {
        setCounter( c => c + num);
    }, [setCounter]);

    return (
        <div>
            <h1>useCallback Hook: { counter }</h1>
            <hr />
            <ShowIncrement increment={ increment }/>
        </div>
    );
}

export default CallBackHook;
