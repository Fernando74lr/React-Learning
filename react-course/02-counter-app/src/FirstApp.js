// import { Fragment } from "react";

const FirstApp = ({ data='Hello world' }) => {

    console.log(data);

    return (
        <>
            <h1>{ data }</h1>
            {/* <pre>{ JSON.stringify(greeting, null, 3) }</pre> */}
            <p>My first application</p>
        </>
    );
}

export default FirstApp;