import '../02-useEffect/effects.css';
import { useState } from 'react';
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks' ;

const RealExampleRes = () => {

    const [show, setShow] = useState();
    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr />

            { show && <MultipleCustomHooks /> }

            <button
                className="btn btn-primary mt-5"
                onClick={ () => {
                    setShow(!show);
                }}
            >
                Show/Hide
            </button>


        </div>
    );
}

export default RealExampleRes;
