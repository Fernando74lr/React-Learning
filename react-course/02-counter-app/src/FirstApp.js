// import { Fragment } from "react";
import PropTypes from 'prop-types';

const FirstApp = ({ greeting, age, subtitle }) => {

    return (
        <>
            <h1>{ greeting }</h1>
            <h2>I'm { age } years old</h2>
            <h3>{ subtitle }</h3>
            {/* <pre>{ JSON.stringify(greeting, null, 3) }</pre> */}
            <p>My first application</p>
        </>
    );
}

// Definition of the type properties.
FirstApp.propTypes = {
    greeting: PropTypes.string.isRequired,
    age: PropTypes.number
}

// Definition of the default properties.
FirstApp.defaultProps = {
    subtitle: 'I\'m a subtitle'
}

export default FirstApp;