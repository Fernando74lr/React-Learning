
import React, { useState, useEffect }from 'react';
import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    /*
        This means I want to execute whatever
        is inside only the first time
        this component is rendered.
    */
    useEffect( () => {
        getGifs(category)
            .then(gifs => setImages(gifs)); // or just .then(gifs => setImages);
    }, [category]);

    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={ img.id }
                            title={ img.title }
                            url={ img.url }
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid;
