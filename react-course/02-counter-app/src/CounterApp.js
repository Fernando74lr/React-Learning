import React from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {

    const handleAdd = (e) => console.log(e);
    return (
        <div>
            <h1>CounterApp</h1>
            <h2> { value } </h2>
            <button onClick={ handleAdd }>+1</button>
        </div>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;
