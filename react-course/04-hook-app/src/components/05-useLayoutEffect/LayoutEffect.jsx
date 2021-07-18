import useFetch from '../../hooks/useFetch';
import '../02-useEffect/effects.css';
import useCounter from '../../hooks/useCounter';
import './layout.css';
import { useLayoutEffect, useRef } from 'react';

const LayoutEffect = () => {

    const { counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    const { quote } = !!data && data[0];

    const pTag = useRef();

    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />
            <blockquote className="blockquote text-center">
                <p
                    ref={ pTag }
                    className="mb-0"
                >{ quote }</p><br />
            </blockquote>


            <button className="btn btn-primary" onClick={ () => increment() }>
                Next quote
            </button>
        </div>
    );
}

export default LayoutEffect;
