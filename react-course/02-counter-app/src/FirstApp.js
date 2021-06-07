// import { Fragment } from "react";
import PropTypes from 'prop-types';

const FirstApp = ({ greeting, age, subtitle }) => {

    return (
        <>
            <h1>{ greeting }</h1>
            <p>{ subtitle }</p>
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
    subtitle: 'I\'m a subtitle',
    age: 20
}

export default FirstApp;