import { useState, useEffect, useRef } from "react";

const useFetch = ( url ) => {

    const isMounted = useRef(true);

    useEffect(() => () => isMounted.current = false, [])
    
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {

        setState({
            data: null,
            loading: true,
            error: null
        });
        
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }
            })
    }, [url]);

    return state;
}

export default useFetch;
