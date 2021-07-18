import useCounter from '../../hooks/useCounter';
import '../02-useEffect/effects.css';
import { useState, useMemo } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';

const MemoHook = () => {

    const { counter, increment } = useCounter(100);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

    return (
        <div>
            <h3>MemoHook: { counter }</h3>
            <hr />

            <p>
                {
                    memoProcesoPesado
                }
            </p>
            <button
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={ () => setShow(!show) }
            >
                Show/Hide { JSON.stringify(show) }
            </button>
        </div>
    );
}

export default MemoHook;
