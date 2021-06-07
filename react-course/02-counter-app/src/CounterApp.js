import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);
    console.log('~ counter:', counter);

    const handleAdd = () => {
        setCounter(counter + 1);
        // setCounter( (c) => c + 1); /* If for some reason we don't have acces to, in this case, 'counter' */
    };

    const handleSubstract = () => {
        setCounter(counter - 1);
    };

    const handleReset = () => {
        setCounter(value);
    };

    return (
        <div>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd } className={ 'green' }>+1</button>
            <button onClick={ handleReset } className={ 'red' }>Reset</button>
            <button onClick={ handleSubstract } className={ 'yellow' }>-1</button>
        </div>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 0
}

export default CounterApp;
