// import { Fragment } from "react";
import PropTypes from 'prop-types';

const FirstApp = ({ greeting, age }) => {

    

    return (
        <>
            <h1>{ greeting }</h1>
            <h2>I'm { age } years old</h2>
            {/* <pre>{ JSON.stringify(greeting, null, 3) }</pre> */}
            <p>My first application</p>
        </>
    );
}

FirstApp.propTypes = {
    greeting: PropTypes.string.isRequired,
    age: PropTypes.number
}

export default FirstApp;