
import React, { useState, useEffect }from 'react';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    /*
        This means I want to execute whatever
        is inside only the first time
        this component is rendered.
    */
    useEffect( () => {
        getGifs();
    }, []);

    const getGifs = async() => {

        const url = `http://api.giphy.com/v1/gifs/search?q=Dr. House&limit=10&api_key=iPlnzzkiQMdEmc7mA81SQAqz53frGnAQ`;
        const response = await fetch(url);
        const {data} = await response.json();
        const gifs = data.map(gif => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images?.downsized_medium.url
            }
        })
        console.log('~ gifs', gifs);

        setImages(gifs);
        
    }

    return (
        <div>
            <h3>{ category }</h3>
            <ol>
                {
                    images.map(img => (
                        <GifGridItem
                            key={ img.id }
                            title={ img.title }
                            url={ img.url }
                        />
                    ))
                }
            </ol>
        </div>
    )
}

export default GifGrid;
