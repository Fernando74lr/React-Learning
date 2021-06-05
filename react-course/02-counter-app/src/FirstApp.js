// import { Fragment } from "react";

const FirstApp = () => {
    const greeting = {
        name: 'Fernando',
        age: 20
    };
    return (
        <>
            <h1>Hello, I'm { greeting.name }</h1>
            {/* <pre>{ JSON.stringify(greeting, null, 3) }</pre> */}
            <p>My first application</p>
        </>
    );
}

export default FirstApp;