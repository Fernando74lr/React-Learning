import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(0);
    console.log('~ counter:', counter);

    const handleAdd = () => {
        setCounter(counter + 1);
        // setCounter( (c) => c + 1); /* If for some reason we don't have acces to, in this case, 'counter' */
    };

    return (
        <div>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>+1</button>
        </div>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;
