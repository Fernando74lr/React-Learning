import { useState, useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';

 const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    /*
        This means I want to execute whatever
        is inside only the first time
        this component is rendered.
    */
    useEffect( () => {
        getGifs(category)
            .then( imgs => {
                setTimeout(() => {
                    setstate({
                        data: imgs,
                        loading: false
                    });
                }, 1500);
            });
    }, [category]);

    return state;
 }
 
 export default useFetchGifs
 